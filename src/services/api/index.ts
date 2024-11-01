type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function errorConverter (res: Response) {
  if (res.status >= 400) {
    const isResponseJson = res.headers.get('content-type')?.includes('application/json')
    const responseBody = isResponseJson ? await res.json() : { message: 'Unknown error' }
    throw new Error(responseBody.message)
  }
  return res
}

export function sendRequest(route: string, method: Method = 'GET', body?: Record<string, unknown>): Promise<Response> {
  if (method === 'GET') {
    return fetch(`/api${route}`, { method: 'GET' }).then(errorConverter)
  }

  return fetch(
    `/api${route}`,
    { method: method, body: JSON.stringify(body) },
  ).then(errorConverter)
}
