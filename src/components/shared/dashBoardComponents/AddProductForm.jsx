/* eslint-disable @next/next/no-img-element */
'use client'

import EditProductsMDX from '@/components/shared/dashBoardComponents/EditProductsMDX'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import { useState } from 'react'
import ImagePreview from './ImagePreview'
import AddImageDiyologBox from './AddImageDiyologBox'
import axios from 'axios'

const AddProductForm = ({ categories }) => {
  const [openAddCoverImage, setOpenAddCoverImage] = useState(false)
  const [openAddOtherImage, setOpenOtherImage] = useState(false)

  const [selectedPrimaryImages, setSelectedPrimaryImages] = useState([])
  const [selectOtherImages, setSelectOtherImages] = useState([])

  const [primaryImageUrl, setPrimaryImageUrl] = useState('')
  const [otherImageUrl, setOtherImageUrl] = useState('')
  // input state ------> products
  const [product, setProduct] = useState({})

  const _hendelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  // from submite hendeler
  const _hendel_submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        '/api/admin/products',
        {
          ...product,
          primary_image: primaryImageUrl,
          other_Images: otherImageUrl,
        }
      )
      console.log(res)
      setProduct({})
      setSelectedPrimaryImages([])
      setSelectOtherImages([])
    } catch (error) {
      //hendel later
    }
  }

  return (
    <form onSubmit={_hendel_submit} className="flex flex-col gap-5 mt-5">
      <Input
        value={product?.name ? product?.name : ''}
        placeholder="Name"
        name="name"
        onChange={_hendelChange}
      />
      <Input
        value={product?.price ? product?.price : ''}
        placeholder="Price"
        name="price"
        onChange={_hendelChange}
      />
      <Input
        value={product?.discount_price ? product?.discount_price : ''}
        placeholder="Discount Price"
        name="discount_price"
        onChange={_hendelChange}
      />
      <Input
        value={product?.short_description ? product?.short_description : ''}
        placeholder="Sort Description"
        name="short_description"
        onChange={_hendelChange}
      />
      <Input
        value={product?.quan ? product?.quan : ''}
        placeholder="quentity"
        name="quan"
        onChange={_hendelChange}
      />

      <div className="flex gap-3">
        {/* primary image select */}
        <AddImageDiyologBox
          open={openAddOtherImage}
          onChangeOpen={setOpenOtherImage}
          images={selectedPrimaryImages}
          setImages={setSelectedPrimaryImages}
          title={
            selectedPrimaryImages?.length > 0
              ? selectedPrimaryImages.length + ' image selected'
              : 'Add Other Image'
          }
          desc="Add products primary photo. Thats show on social media and other as
          primary."
          multiple={false}
          onUplodedUrl={setPrimaryImageUrl}
        />

        <AddImageDiyologBox
          open={openAddCoverImage}
          onChangeOpen={setOpenAddCoverImage}
          images={selectOtherImages}
          setImages={setSelectOtherImages}
          title={
            selectOtherImages?.length > 0
              ? selectOtherImages.length + ' images selected'
              : 'Add Other Image'
          }
          desc="Add products all images.
          primary."
          onUplodedUrl={setOtherImageUrl}
        />
      </div>

      <Select value={product?.category ? product.category : ""} onValueChange={(e) => setProduct({ ...product, category: e })}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a products gatagory" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {categories?.map((c) => (
              <SelectItem key={c._id} value={c._id}>
                {c.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <EditProductsMDX
          data={product.mdx}
          onUpdate={(e) => setProduct({ ...product, mdx: e })}
        />
      </div>

      <Button className="text-white self-start w-[200px]">Add</Button>
    </form>
  )
}

export default AddProductForm
