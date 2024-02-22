/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const ImagePreview = ({ viewImg,className }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    if (!viewImg) {
      setPreview(undefined)
      return
    }
    setUrl(URL?.createObjectURL(viewImg))
    return () => URL?.revokeObjectURL(viewImg)
  }, [viewImg])

  return (
    <div className={cn(className)}>
      <img src={url} alt="preview" className="h-full w-full object-cover rounded-md" />
    </div>
  )
}

export default ImagePreview
