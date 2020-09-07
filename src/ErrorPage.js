import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = ({ error }) => {
  if (!error) {
    return null
  }


  return (
    <div>
      <Link to='/'> 前のページへ戻る</Link>
      <p>エラーが発生しました。</p>
      <p>{error}</p>
    </div>
  )
}

export default ErrorPage
