'use client'
import EditProductsMDX from '@/components/shared/dashBoardComponents/EditProductsMDX'
import { Button } from '@/components/ui/Button'
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

const AddProductForm = () => {
  const [product, setProduct] = useState({
    mdx: 'for help goto -> https://www.markdownguide.org',
  })

  const _hendelChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const _hendel_submit = (e) => {
    e.preventDefault()
    console.log(product);
  }

  return (
    <form onSubmit={_hendel_submit} className="flex flex-col gap-5 mt-5">
      <Input placeholder="Name" name="name" onChange={_hendelChange} />
      <Input placeholder="Price" name="proce" onChange={_hendelChange} />
      <Input
        placeholder="Discount Price"
        name="discount_price"
        onChange={_hendelChange}
      />
      <Input
        placeholder="Sort Description"
        name="short_description"
        onChange={_hendelChange}
      />
      <Input placeholder="quentity" name="quan" onChange={_hendelChange} />

      <Select onValueChange={(e) => setProduct({ ...product, category: e })}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a products gatagory" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectItem value="man">Man</SelectItem>
            <SelectItem value="woman">Woman</SelectItem>
            <SelectItem value="house">House</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <EditProductsMDX
          data={product.mdx}
          onUpdate={(e) => setProduct({ ...product, mdx: e })}
        />
      </div>

      <Button className="text-white">Add</Button>
    </form>
  )
}

export default AddProductForm
