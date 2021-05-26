import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const [newAuthor, setNewAuthor] = useState('')

    const handleTitleChange = event => {
        setNewTitle(event.target.value)
    }

    const handleUrlChange = event => {
        setNewUrl(event.target.value)
    }

    const handleAuthorChange = event => {
        setNewAuthor(event.target.value)
    }

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newTitle,
            author: newAuthor,
            url: newUrl,
            likes: 0
        })

        setNewTitle('')
        setNewUrl('')
        setNewAuthor('')
    }

    return (
        <div>
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
        </div>
    )
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

export default BlogForm