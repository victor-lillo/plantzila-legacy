import React from 'react'
import { SvgList } from '@types'

import Book from '@components/icons/Book'
import Download from '@components/icons/Download'
import Ebook from '@components/icons/Ebook'
import Heart from '@components/icons/Heart'
import ShoppingBasket from '@components/icons/ShoppingBasket'

export default function CardSvgPicker({ svgName }: { svgName: SvgList }) {
  switch (svgName) {
    case SvgList.Book:
      return <Book />
    case SvgList.Download:
      return <Download />
    case SvgList.Ebook:
      return <Ebook />
    case SvgList.Heart:
      return <Heart style={{ fill: 'green' }} />
    case SvgList.ShoppingBasket:
      return <ShoppingBasket />
    default:
      return <>No existe</>
  }
}
