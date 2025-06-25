// src/services/userService.ts
import api from './api'

export interface User {
  id: number
  name: string
  email: string
}

export async function getUsers(): Promise<User[]> {
  const response = await api.get('/users')
  return response.data
}

export async function getUser(id: number): Promise<User> {
  const response = await api.get(`/users/${id}`)
  return response.data
}

export async function createUser(data: Partial<User>): Promise<User> {
  const response = await api.post('/users', data)
  return response.data
}
