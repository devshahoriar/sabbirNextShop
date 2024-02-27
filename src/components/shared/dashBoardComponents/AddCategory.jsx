/* eslint-disable react/no-unescaped-entities */
'use client'

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
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddCategory = ({ category }) => {
  const [openAddCAtegoryDiolog, setOpenAddCategoryDilog] = useState(false)
  const [categoryText, setCategoryText] = useState('')
  const [addCategoryErr, setAddCategoryErr] = useState('')
  const route = useRouter()

  const _hendelSubmit = async () => {
    if (categoryText === '') {
      setAddCategoryErr('Add your category title.')
      return
    }
    try {
      const res = await axios.post(
        '/api/admin/category',
        { title: categoryText },
        {
          withCredentials: true,
        }
      )
      route.refresh()
      setOpenAddCategoryDilog(false)
      setCategoryText('')
    } catch (error) {
      setAddCategoryErr('Something error!')
      console.log(error)
    }
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl">Add Category</h1>
          <p className="text-sm">You have {category?.length} categorys.</p>
        </div>

        <Dialog
          open={openAddCAtegoryDiolog}
          onOpenChange={setOpenAddCategoryDilog}
        >
          <DialogTrigger asChild>
            <Button className="text-white">Add A Category</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-md">
            <DialogHeader>
              <DialogTitle>Add A Category</DialogTitle>
              <DialogDescription>
                Add a category that use to add a new product
              </DialogDescription>
            </DialogHeader>
            <div>
              <p className="text-sm mb-2 ml-1">Category title:</p>
              <Input
                value={categoryText}
                onChange={(e) => setCategoryText(e.target.value)}
                placeholder="Your category title"
              />
            </div>
            <DialogFooter className="gap-2 !flex-row !justify-end !items-center">
              <p className="text-red-500 text-sm">{addCategoryErr}</p>
              <Button onClick={_hendelSubmit}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {category?.length === 0 ? (
        <h2 className='mt-5 font-bold text-red-500'>
          You don't have any ctegory first create some category than add
          products.
        </h2>
      ) : (
        <div className="mt-2 grid grid-cols-3 gap-3 md:grid-cols-5 sm:grid-cols-4">
          {category?.map((c) => {
            return <div key={c?._id}>{c?.title}</div>
          })}
        </div>
      )}
    </>
  )
}

export default AddCategory
