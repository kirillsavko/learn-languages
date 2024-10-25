type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export function sendRequest(route: string, method: Method = 'GET', body?: Record<string, unknown>) {
  if (method === 'GET') {
    return fetch(`/api${route}`, { method: 'GET' })
  }

  return fetch(
    `/api${route}`,
    { method: method, body: JSON.stringify(body) },
  )
}
