'use client'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

import { useState } from 'react'

import * as commands from '@uiw/react-md-editor/commands'
import dynamic from 'next/dynamic'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

const EditProductsMDX = ({ data, onUpdate }) => {
  return (
    <div>
      <MDEditor value={data} onChange={onUpdate} />
    </div>
  )
}

export default EditProductsMDX
