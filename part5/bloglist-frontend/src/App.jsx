import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogEntries, setBlogEntries] = useState([])
  const [userField, setUserField] = useState('')
  const [passField, setPassField] = useState('')
  const [activeAccount, setActiveAccount] = useState(null)
  const [loginNotice, setLoginNotice] = useState(null)
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogUrl, setBlogUrl] = useState('')
  const [blogNotice, setBlogNotice] = useState(null)
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [notificationType, setNotificationType] = useState('success')

  useEffect(() => {
    blogService.getAll().then(entries => setBlogEntries(entries))
  }, [])

  useEffect(() => {
    const storedAccount = window.localStorage.getItem('loggedBlogAppUser')
    if (storedAccount) {
      const parsedAccount = JSON.parse(storedAccount)
      setActiveAccount(parsedAccount)
    }
  }, [])

  useEffect(() => {
    if (activeAccount) {
      blogService.setAuthToken(activeAccount.token)
    }
  }, [activeAccount])

  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      const credentials = await loginService.authenticate({
        username: userField,
        password: passField,
      })
      setActiveAccount(credentials)
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(credentials))
      setUserField('')
      setPassField('')
      setNotificationMsg(`Welcome, ${credentials.name}!`)
      setNotificationType('success')
      setTimeout(() => setNotificationMsg(null), 4000)
    } catch (err) {
      setNotificationMsg('Login failed: wrong credentials')
      setNotificationType('error')
      setTimeout(() => setNotificationMsg(null), 4000)
    }
  }

  const handleSignOut = () => {
    setActiveAccount(null)
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  const handleBlogSubmit = async (event) => {
    event.preventDefault()
    try {
      const newEntry = {
        title: blogTitle,
        author: blogAuthor,
        url: blogUrl
      }
      const returnedBlog = await blogService.createBlog(newEntry)
      setBlogEntries(blogEntries.concat(returnedBlog))
      setBlogTitle('')
      setBlogAuthor('')
      setBlogUrl('')
      setNotificationMsg(`Blog "${returnedBlog.title}" added!`)
      setNotificationType('success')
      setTimeout(() => setNotificationMsg(null), 4000)
    } catch (err) {
      setNotificationMsg('Failed to add blog')
      setNotificationType('error')
      setTimeout(() => setNotificationMsg(null), 4000)
    }
  }

  if (!activeAccount) {
    return (
      <div>
        <h2>Sign in to Blog Portal</h2>
        {loginNotice && <div style={{ color: 'red' }}>{loginNotice}</div>}
        <form onSubmit={handleSignIn}>
          <div>
            Username
            <input
              type="text"
              value={userField}
              name="User"
              onChange={({ target }) => setUserField(target.value)}
            />
          </div>
          <div>
            Password
            <input
              type="password"
              value={passField}
              name="Pass"
              onChange={({ target }) => setPassField(target.value)}
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      <div>
        {activeAccount.name} logged in
        <button onClick={handleSignOut}>Sign out</button>
      </div>
      <Notification message={notificationMsg} type={notificationType} />
      <h3>Add a new blog</h3>
      <form onSubmit={handleBlogSubmit}>
        <div>
          Title:
          <input
            type="text"
            value={blogTitle}
            name="BlogTitle"
            onChange={({ target }) => setBlogTitle(target.value)}
          />
        </div>
        <div>
          Author:
          <input
            type="text"
            value={blogAuthor}
            name="BlogAuthor"
            onChange={({ target }) => setBlogAuthor(target.value)}
          />
        </div>
        <div>
          URL:
          <input
            type="text"
            value={blogUrl}
            name="BlogUrl"
            onChange={({ target }) => setBlogUrl(target.value)}
          />
        </div>
        <button type="submit">Add blog</button>
      </form>
      {blogEntries.map(entry =>
        <Blog key={entry.id} blog={entry} />
      )}
    </div>
  )
}

export default App