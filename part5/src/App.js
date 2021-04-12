import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [newTitle, setNewTitle] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [user, setUser] = useState(null)


    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs)
        )
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username,
                password,
            })
            blogService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setMessage('Wrong credentials')
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
    }

    const handleTitleChange = event => {
        setNewTitle(event.target.value)
    }

    const handleUrlChange = event => {
        setNewUrl(event.target.value)
    }

    const handleAuthorChange = event => {
        setNewAuthor(event.target.value)
    }

    const addBlog = async event => {
        event.preventDefault()

        const blogObject = {
            title: newTitle,
            author: newAuthor,
            url: newUrl,
            likes: 0
        }

        try {
            const addedBlog = await blogService.create(blogObject)
            setBlogs(blogs.concat(addedBlog))
            setMessage(`${user.name} added ${addedBlog.author}.`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
            setNewTitle('')
            setNewUrl('')
            setNewAuthor('')
        } catch (error) {
            setMessage(error.response.data.error)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
    }

    const loginForm = () => (
        <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
        >
        </LoginForm>
    )

    const blogForm = () => (
        <form onSubmit={addBlog}>
            <p>
                Title: <input value={newTitle} onChange={handleTitleChange} />
            </p>
            <p>
                Author: <input value={newAuthor} onChange={handleAuthorChange} />
            </p>
            <p>
                Url: <input value={newUrl} onChange={handleUrlChange} />
            </p>
            <button type='submit'>Post</button>
        </form>
    )

    return (
        <div>
            <h2>blogs</h2>

            {user === null ? (
                loginForm()
            ) : (
                    <div>
                        <p className='logged'>
                            Welcome, {user.username}.<button>Logout</button>
                        </p>
                        {blogForm()}
                        {blogs.map(blog =>
                            <Blog key={blog.id} blog={blog} />
                        )}
                        
                    </div>
                )}
        </div>
    )
}

export default App