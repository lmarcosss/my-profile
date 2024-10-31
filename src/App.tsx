import './App.css'
import assets from './assets'

export default function App() {
  return (
    <div className='container'>
      <img className='profile-image' src={assets.profileImage} />
      <h1>Hi, I'm Leo. <br/>I'm a software developer.</h1>
    </div>
  )
}
