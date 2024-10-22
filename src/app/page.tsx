import Head from "next/head";
import Image from "next/image";
import Form from "@/layo/Form";
import Plant from "@/components/Plants";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

import Section1 from "@/components/Section1";
import IndoorPlants from "@/components/IndoorPlants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Your page description here" />
      </Head>
      
      <Form>
      
        <Section1 />
        <Plant/>
        <IndoorPlants/>
       
      </Form>
    </>
  );
}
