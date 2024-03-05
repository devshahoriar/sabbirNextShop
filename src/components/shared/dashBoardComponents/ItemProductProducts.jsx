/* eslint-disable @next/next/no-img-element */
'use client'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/ContextMenu '
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ImNewTab } from 'react-icons/im'
import { SlLoop } from 'react-icons/sl'

const ItemProductProducts = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className=" border p-2 shadow-md rounded-md">
        <div className="flex gap-3">
          <img
            className="object-cover h-20 w-28 rounded-md"
            src="https://picsum.photos/500/300"
            alt=""
          />
          <div>
            <h1 className="line-clamp-1 font-bold">This is products title</h1>
            <p className="line-clamp-2 text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum in
              cum iusto pariatur laborum eligendi, quia dolor blanditiis natus
              nostrum?
            </p>
            <p className="text-sm flex gap-2">
              <span className="line-through">120taka</span>
              <span className="">100taka</span>
              <span className="">20p</span>
            </p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-60 bg-white">
        <ContextMenuItem onClick={() => console.log('edit click')}>
          Edit
          <ContextMenuShortcut>
            <MdOutlineModeEditOutline className="text-lg" />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => console.log('delete click')}
          className="text-red-600"
        >
          Delete
          <ContextMenuShortcut>
            <RiDeleteBinLine className="text-lg" />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onClick={() => console.log('view click')}>
          View
          <ContextMenuShortcut>
            <ImNewTab className="text-lg" />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onClick={() => console.log('archive click')}>
          Arcive
          <ContextMenuShortcut>
            <SlLoop className="text-lg" />
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ItemProductProducts
