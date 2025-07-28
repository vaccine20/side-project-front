'use client'

import Button from '@mui/material/Button';

const WhatToDoFooter = () => {

  return (
    <div className="flex items-center justify-center gap-4 h-24">
      <div>
        <Button variant="outlined">저장</Button>
      </div>
      <div>
        <Button variant="outlined" color='error'>선택 삭제</Button>
      </div>
    </div>
  )
}

export default WhatToDoFooter;