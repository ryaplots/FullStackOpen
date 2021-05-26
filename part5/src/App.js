import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [user, setUser] = useState(null)


    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs)
        )
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBloglistAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username,
                password,
            })

            window.localStorage.setItem(
                'loggedBloglistAppUser', JSON.stringify(user)
            )
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

    const handleLogout = async event => {
        event.preventDefault()
        try {
            window.localStorage.clear()
            setUser(null)
        } catch (exception) {
            setMessage('Already logged out.')
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
    }

    const addBlog = async (blogObject) => {
        try {
            blogFormRef.current.toggleVisibility()
            const createdBlog = await blogService
                .create(blogObject)
            setMessage(
                `Blog ${blogObject.title} was successfully added`
            )
            setBlogs(blogs.concat(createdBlog))
            setMessage(null)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        } catch (exception) {
            setMessage(
                `Cannot add blog ${blogObject.title}`
            )
            setMessage(null)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
    }

    const loginForm = () => {

        return (
            <Togglable buttonLabel='login'>
                <LoginForm
                    handleLogin={handleLogin}
                    username={username}
                    password={password}
                    handleUsernameChange={({ target }) => setUsername(target.value)}
                    handlePasswordChange={({ target }) => setPassword(target.value)}
                >
                </LoginForm>
            </Togglable>
        )
    }

    const blogFormRef = useRef()

    const blogForm = () => {
        return (
            <Togglable buttonLabel='new blog' ref={blogFormRef}>
                <BlogForm
                    createBlog={addBlog}
                ></BlogForm>
            </Togglable>
        )
    }

    return (
        <div>
            <h1>BlogList</h1>
            {user === null ? (
                loginForm()
            ) : (
                    <div>
                        <p className='logged'>
                            Welcome, {user.username}.<button onClick={handleLogout}>Logout</button>
                        </p>

                        <Notification message={message} />

                        <h2>Blogs</h2>
                        {blogs.map(blog =>
                            <Blog key={blog.id} blog={blog} />
                        )}

                        <h2>Create new</h2>
                        {blogForm()}
                    </div>
                )}
        </div>
    )
}

export default App