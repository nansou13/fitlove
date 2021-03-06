import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

import axios from 'axios'

const superagent = superagentPromise(_superagent, global.Promise)

const axiosPromise = option =>
  new Promise((res, rej) => {
    axios(option)
      .then(response => {
        res(response.data)
      })
      .catch(error => {
        rej(error)
      })
  })

const API_ROOT = 'http://api.gigan.fr/fitsocial'

const VERSION = '1_1'

const encode = encodeURIComponent
const responseBody = res => res.body

let token = null
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Bearer ${token}`)
  }
}

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),

  postfile: (url, files) =>
    axiosPromise({
      url: `${API_ROOT}${url}`, // API endpoint that needs file URL from CDN
      method: 'post',
      data: files,
      headers: { Authorization: `Bearer ${token}` },
    }),
}

const Auth = {
  current: () => requests.get(`/user/${VERSION}/`),
  login: (pseudo, password) =>
    requests.post(`/user/${VERSION}/login`, { user: { pseudo, password } }),
  update: user => requests.put(`/user/${VERSION}/`, { user }),
  register: user => requests.post(`/user/${VERSION}/new`, { user }),
  save: user => requests.put('/user', { user }),
}

const Img = {
  add: files => requests.postfile(`/img/${VERSION}/`, files),
}

const Users = {
  gets: () => requests.get(`/user/${VERSION}/list`),
}

const Tags = {
  getAll: () => requests.get('/tags'),
}

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`
const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page => requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug => requests.del(`/articles/${slug}`),
  favorite: slug => requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () => requests.get('/articles/feed?limit=10&offset=0'),
  get: slug => requests.get(`/articles/${slug}`),
  unfavorite: slug => requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article => requests.post('/articles', { article }),
}

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug => requests.get(`/articles/${slug}/comments`),
}

const Profile = {
  follow: username => requests.post(`/profiles/${username}/follow`),
  get: username => requests.get(`/profiles/${username}`),
  unfollow: username => requests.del(`/profiles/${username}/follow`),
}
const test = {
  toto: files =>
    axiosPromise({
      url: `${API_ROOT}/img/${VERSION}/`, // API endpoint that needs file URL from CDN
      method: 'post',
      data: files,
      headers: { Authorization: `Bearer ${token}` },
    }),
}

export default {
  // Articles,
  Auth,
  Users,
  Img,
  test,
  // Comments,
  // Profile,
  // Tags,
  setToken: _token => {
    token = _token
  },
}
