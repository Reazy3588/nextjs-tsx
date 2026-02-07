import { Button } from 'flowbite-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ecommerce TL Express",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reiciendis natus similique atque doloribus, accusantium fugit maiores ducimus accusamus non.",
  openGraph : {
    title: "TL Express Logostic ",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reiciendis natus similique atque doloribus, accusantium fugit maiores ducimus accusamus non."
    // images: [""]
  } 
}

export default function page () {
  return (
    <div>
      <h1 className='mt-30'>about</h1>
    </div>
  )
}


