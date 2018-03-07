import io from 'socket.io-client'

import { store } from './store'

export const socket = io('http://localhost:8000') // http://78.118.250.227:8000

export function sendMessage(id, value) {
  socket.emit(id, value)
}

export function getOnSocket() {
  socket.on('visited', user_id => {
    store.dispatch({ type: 'VISITED_USER', user_id })
    alert('visited !!!')
  })
}
