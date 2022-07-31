import { useRouter } from 'next/router';

import Footer from "./footer/footer";
import Header from "./header/header";


import classes from './layout.module.css'

function Layout(props) {
  const router = useRouter();
  const isMain = router.asPath === '/';

  return (
    <section className={isMain ? 'wrap_bg': ''}>
      <Header fon={ isMain ? '': 'white'}/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </section>
    
  )
}

export default Layout;