import Image from 'next/image'
import styles from './page.module.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>

  );
}
