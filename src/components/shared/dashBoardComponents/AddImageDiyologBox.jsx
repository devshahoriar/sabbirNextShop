import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import { Input } from '@/components/ui/Input'
import ImagePreview from './ImagePreview'
import { useRef, useState } from 'react'
import axios from 'axios'

const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLUDINARY_CLUDE_NAME}/image/upload`

const AddImageDiyologBox = ({
  open,
  onChangeOpen,
  images,
  setImages,
  title,
  desc,
  multiple = true,
  onUplodedUrl,
}) => {
  const refInput = useRef()
  const [uploadStatus, setUploadStatus] = useState(0)
  const [uploadErr, setUploadErr] = useState('')
  const [uploadDone, setUploadDone] = useState(false)
  const _hendelUpload = async () => {
    const newUrls = []
    for (let index = 0; index < images.length; index++) {
      const data = new FormData()
      data.append('file', images[index])
      data.append(
        'upload_preset',
        process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_NAME
      )
      const res = await axios.post(url, data, {
        onUploadProgress: (e) => {
          setUploadStatus(
            Math.floor(((index + e.loaded / e.total) / images?.length) * 100)
          )
        },
      })
      if (res.status !== 200) {
        setUploadErr('Something error contact your developer!')
        return
      }
      newUrls.push(res.data?.url)
      setUploadDone(true)
    }

    onUplodedUrl(newUrls?.toString())
  }
  return (
    <Dialog open={open} onOpenChange={onChangeOpen}>
      <DialogTrigger asChild>
        <Button className="text-white">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="p-2 mb-2  relative">
            {images?.length > 0 && (
              <div className="flex gap-2 flex-wrap z-20 relative">
                {Array.from(images).map((img, i) => (
                  <ImagePreview className="h-12 w-20" key={i} viewImg={img} />
                ))}
              </div>
            )}
            {images?.length > 0 && (
              <div
                style={{ width: uploadStatus + '%' }}
                className="absolute top-0 left-0 bg-main bg-opacity-50 h-full rounded-md z-0"
              ></div>
            )}
          </div>
          <Input
            ref={refInput}
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={(e) => {
              if (!e.target.files || e.target.files.length === 0) {
                setImages(undefined)
                setUploadStatus(0)
                return
              }
              setImages(e.target.files)
              setUploadStatus(0)
            }}
          />
        </div>
        <DialogFooter className="gap-2 !flex-row !justify-end !items-center">
          {uploadErr !== '' && <p>{uploadErr}</p>}
          {uploadStatus !== 0 && (
            <p className="text-sm opacity-70">uploading {uploadStatus}%</p>
          )}
          <Button
            onClick={() => {
              refInput.current.files = new DataTransfer().files
              setImages([])
              setUploadStatus(0)
              setUploadDone(false)
            }}
            disabled={images?.length === 0}
          >
            Delete
          </Button>
          {uploadDone ? (
            <Button
              onClick={() => {
                onChangeOpen(false)
                setUploadDone(false)
              }}
            >
              Done
            </Button>
          ) : (
            <Button
              onClick={_hendelUpload}
              disabled={images?.length === 0}
            >
              Upload
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddImageDiyologBox
