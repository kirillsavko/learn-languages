import AuthRoute from '@/components/AuthRoute/AuthRoute'

export default function Home() {
  return (
    <AuthRoute>
      {(user) => (
        <div className='container'>
          <h1>home</h1>
          username: {user.username}
        </div>
      )}
    </AuthRoute>
  )
}
