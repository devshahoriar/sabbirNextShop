/* eslint-disable react-hooks/rules-of-hooks */

import { AddProductAdmin } from '@/actions/hendelSubmit'
import EditProductsMDX from '@/components/shared/dashBoardComponents/EditProductsMDX'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'


const page = () => {
  return (
    <div className="m-2 md:m-10">
      <h1 className="text-2xl">Add Product</h1>
      <form action={AddProductAdmin} className="flex flex-col gap-5 mt-5">
        <Input placeholder="Name" />
        <Input placeholder="Price" />
        <Input placeholder="Sort Description" />
        <Input placeholder="quentity" />

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a products gatagory" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <EditProductsMDX/>
        </div>

        <Button className="text-white">Add</Button>
      </form>
    </div>
  )
}

export const metadata = {
  title: 'Add Product | Admin',
}

export default page
