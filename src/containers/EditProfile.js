import React, { Component } from 'react'
import { connect } from 'react-redux'

import agent from '../agent'

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import { FORM_VALIDATE, IMG_UPLOAD } from '../constants/actionTypes'

import { pluck } from '../helpers/object'

import FileUpload from '../components/FileUpload'

const USER_DEFAULT_FIELDS = [
  // "id",
  // "pseudo",
  // "password",
  'prenom',
  'nom',
  // "birthdate",
  // "ville",
  // "pays",
  // "region",
  'description',
  'sexe',
  // "img",
  // "statut",
  // "orientation"
]

const sexeValue = [{ label: 'Homme', value: 1 }, { label: 'Femme', value: 2 }]

const mapStateToProps = ({ common: { currentUser } }) => ({
  currentUser,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: user =>
    dispatch({ type: FORM_VALIDATE, payload: agent.Auth.update(user) }), // payload: agent.Auth.save(user)
  onSubmitImg: (formData, pictureNb) => {
    console.log('SubmitIMG', agent.Img.add(formData, pictureNb)) // agent.Img.add(formData, pictureNb))
    dispatch({
      type: IMG_UPLOAD,
      payload: agent.Img.add(formData, pictureNb),
    }) // payload: agent.Auth.save(user)
  },
})

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = pluck(props.currentUser, USER_DEFAULT_FIELDS)

    this.updateState = field => (ev, value) => {
      this.setState({ ...this.state, [field]: value })
    }

    this.submitForm = ev => {
      ev.preventDefault()

      const user = { ...this.state }

      this.props.onSubmit(user)
    }
  }

  render() {
    const { nom, prenom, description, sexe } = this.state
    const { onSubmitImg } = this.props
    return (
      <div className="EditProfile">
        <div className="container">
          <div className="row">
            <form onSubmit={this.submitForm}>
              <MuiThemeProvider>
                <TextField
                  value={nom}
                  floatingLabelText="Votre nom"
                  onChange={this.updateState('nom')}
                />{' '}
                <TextField
                  value={prenom}
                  floatingLabelText="Votre prenom"
                  onChange={this.updateState('prenom')}
                />
                <br />
                <TextField
                  value={description}
                  floatingLabelText="Description"
                  multiLine
                  rows={2}
                  onChange={this.updateState('description')}
                />
                <RadioButtonGroup
                  name="sexe"
                  valueSelected={sexe}
                  onChange={this.updateState('sexe')}
                >
                  {sexeValue.map(({ label, value }) => (
                    <RadioButton value={value} label={label} />
                  ))}
                </RadioButtonGroup>
                <FileUpload onEnding={onSubmitImg}>
                  <div>Test Upload</div>
                </FileUpload>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Update Settings
                </button>
              </MuiThemeProvider>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
