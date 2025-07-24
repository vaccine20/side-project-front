'use client'

import axios from "axios"
import { useState } from "react"

type NormalButtonProps = {
  title : string,
  className? : string
}

const NormalButton = ({title, className} : NormalButtonProps) => {

  const [buttonText, setButtonText] = useState('눌러보세요.');

  const handleClick = () => {
    
    axios.get('http://localhost:8000/init')
    .then(res => {
      console.log('response ===> ', res);
      if (res.status == 200) {
        setButtonText('성공');
      } else {
        setButtonText('실패');
      }
    })
    .catch(err => {
      setButtonText('에러 콘솔 확인');
      console.log('err ===============> ', err);
    })
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        { buttonText }
      </button>
    </>
  )
}

export default NormalButton;