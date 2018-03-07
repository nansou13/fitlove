/**
 * Return a copy of the object, filtered to only have values for the whitelisted keys.
 *
 * @param { object } obj
 * @param { Array } list of properties
 * @return { obj } obj with properties
 * @example
 * ````js
 * pluck({ a: '1', b: 2, c: 'http://www.abcde.com' }, ['a','b'])
 * >> { a: '1', b: 2 }
 * pluck({ a: '1', b :{ c: 'http://www.abcde.com' } }, ['a','c'])
 * >> { a: '1', c: 'http://www.abcde.com' }
 * ````
 */

const pluck = (o, props) =>
  Object.assign({}, ...props.map(prop => ({ [prop]: o[prop] })))

/**
 * Delete null or undefined properties. Not recursive
 *
 * @param { object } obj
 * @return { obj } cleaned obj
 * @example
 * ````js
 * clean({ a: null, b: undefined, c: 'http://www.abcde.com' })
 * >> {  c: 'http://www.abcde.com' }
 * clean({ a: '', b :{ c: null } })
 * >> { a: '', b :{ c: null } }
 * ````
 */

const clean = o =>
  Object.keys(o).forEach(key => o[key] == null && delete o[key])

/**
 * Delete specific fields of an object
 *
 * @param { Array } a
 * @return { obj } with specific properties from the input array set to undefined
 *
 */
const reduceProperties = a =>
  a.reduce((prev, curr) => {
    prev[curr] = undefined
    return prev
  }, {})

/**
 * Delete null or undefined and empty properties.
 *
 * @param { object } obj
 * @return { obj } cleaned obj
 * @example
 * ````js
 * clean({ a: null, b: undefined, c: 'http://www.abcde.com', d:'' })
 * >> {  c: 'http://www.abcde.com' }
 * clean({ a: '', b :{ c: null } })
 * >> { b :{ c: null } }
 * ````
 */
const cleanParams = params =>
  Object.keys(params).reduce((prev, curr) => {
    const value = params[curr]
    if (!(value === undefined || value === null || value.length === 0)) {
      prev[curr] = value
    }
    return prev
  }, {})

export { pluck, clean, cleanParams, reduceProperties }
