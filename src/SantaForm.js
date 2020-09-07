import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'

const SantaForm = ({ setError, setSuccess}) => {
  const { register, handleSubmit, errors} = useForm()
  const history = useHistory()

  const onSubmit = async(formData) => {
    const request = {
      username: formData.username,
      wish: formData.wish
    }

    try {
      const response = await axios.post('/wishlist', request)
      if(response) {
        setSuccess(true)
        history.push('/success')
      }
    } catch(error) {
      if(error.response.data.error) {
        if(error.response.status === 400) {
          // Older than 10 years
          setError('残念ながら君はもう１０歳を超えていて、大きな子になってしまいましたので、サンタさんは君の願いを叶えません。')
        } else if(error.response.status === 404) {
          // Not found
          setError('ユーザは存在しません。もう一度ユーザー名を確認して、やり直してください。')
        } else {
          // Error besides those two occured, generic error message.
          setError('エラーが発生しまいました。後ほどまたやり直してください。')
        }
      } else {
        // Didnt make it to the client
        setError('申し訳ございませんがサンタさんはただいま大変忙しいので、サンタさんに連絡できませんでした。後ほどまたやり直してください。')
      }
      history.push('/error')
    }
  }

  return (
    <>
      <header>
        <h1>
          サンタさんへの手紙
        </h1>
      </header>
  
      <main>
        <p className="bold">メリークリスマス! クリスマスは何が欲しいですか。自分の願いを書いてください！</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          お名前は？
          <input name="username" placeholder="charlie.brown"　ref={register({required: true})}/>
          <ErrorMessage error={errors.username} />
          願い
          <textarea name="wish" rows="10" cols="45" placeholder="世界平和、チーズケーキ、PS5" ref={register({ required: true, maxLength: 100})}></textarea>
          <ErrorMessage error={errors.wish} />
          <br/>
          <button type="submit">確定</button>
        </form>
      </main>
  
      <footer>
        Made with
        <a href="https://glitch.com">Glitch</a>!
      </footer>
    </>
  )
}

export default SantaForm




