import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"; 
export default function Form({children}){
  return(
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <Header></Header>
    <main>{children}</main>
    <br></br><br></br>
    <Footer></Footer>
    </>
  )
}