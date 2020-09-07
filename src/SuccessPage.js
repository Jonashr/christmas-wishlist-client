import React from 'react'
import { Link }  from 'react-router-dom'

const SuccessPage = () => {
  return (
    <div>
      <Link to='/'> 前のページへ戻る</Link>
      <h1>サンタさんはあなたの願いを貰いました！</h1>
      <p>今年は良い子でしたら、願いが叶うかもしれません</p>
    </div>
  )
}

export default SuccessPage
