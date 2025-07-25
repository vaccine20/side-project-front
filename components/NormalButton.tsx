'use client'

import axios from "axios"
import { useState } from "react"

type NormalButtonProps = {
  title : string,
  className? : string
}

const NormalButton = ({title, className} : NormalButtonProps) => {

  const [buttonText, setButtonText] = useState('눌러보세요.');

  return (
    <>
      <button className={className}>
        { buttonText }
      </button>
    </>
  )
}

export default NormalButton;