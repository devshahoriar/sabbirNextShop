'use client'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

import { useState } from 'react'

import * as commands from '@uiw/react-md-editor/commands'
import dynamic from 'next/dynamic'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

const EditProductsMDX = () => {
  const [value, setValue] = useState('**Hello world!!!**')
  return (
    <div>
      <MDEditor value={value} onChange={setValue} />
    </div>
  )
}

export default EditProductsMDX
