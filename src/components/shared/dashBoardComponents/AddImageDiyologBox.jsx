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

const AddImageDiyologBox = ({
  open,
  onChangeOpen,
  images,
  setImages,
  title,
  desc,
  multiple=true
}) => {
  console.log(images)
  return (
    <Dialog open={open} onOpenChange={onChangeOpen}>
      <DialogTrigger asChild>
        <Button className="text-white">Add Cover Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <div className="">
          {/* {images && images?.map((img,i)=> <ImagePreview key={i} viewImg={img} />)} */}
          {images?.length > 0 && (
            <div className='mb-2 flex gap-2 flex-wrap'>
              {Array.from(images).map((img, i) => (
                <ImagePreview className="h-12 w-20" key={i} viewImg={img} />
              ))}
            </div>
          )}
          <Input
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={(e) => {
              if (!e.target.files || e.target.files.length === 0) {
                setImages(undefined)
                return
              }
              setImages(e.target.files)
            }}
          />
        </div>
        <DialogFooter className="gap-2">
          <Button>Add</Button>
          {images && <Button>Uplade</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddImageDiyologBox
