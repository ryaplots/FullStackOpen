import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('renders title and author', () => {
    const blog = {
        title: 'This is the title of the blog',
        author: 'This is the author of the blog'
    }

    const component = render(
        <Blog blog={blog} />
    )

    const div = component.container.querySelector('div')

    console.log(prettyDOM(div))

    expect(component.container).toHaveTextContent(`${blog.title}, ${blog.author}`)
})