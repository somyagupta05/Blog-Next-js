import Image from "next/image";
import Link from "next/link";
import Author from "./child/Author";
import ThemeToggle from "./ThemeToggle";

export default function Section1() {
  return ( 
    <section className="py-16">
     
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">  <br>
        </br>PLANTS <ThemeToggle/></h1>
        
        
       <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    {Slide()} 
    </div>
    <div className="carousel-item">
    {Slide1()} 
    </div>
    <div className="carousel-item">
    {Slide2()} 
    </div>
  </div>
 
</div>





      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2 mb-4">
      <div className="image">
        <Link href="/">
          <Image
            src="/images/image1.png"
            width={600}
            height={600}
            alt="Description of image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col ml-5">
        <div className="cat">
          <Link href="/" className="text-orange-600 hover:text-orange-800">Availabel From</Link>
          <Link href="/" className="text-gray-800 hover:text-gray-600">- October 22, 2024</Link>
        </div>
        <div className="title">
          <Link href="/" className="text-2xl md:text-5xl font-bold text-gray-600 hover:text-gray-600">
            Your most unhappy customer is your greatest source of learning
          </Link>
          <p className="text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi saepe. Consectetur dolorum a nobis harum facere, veritatis doloremque? Sed quaerat et magnam tenetur reiciendis?
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
}


function Slide2() {
  return (
    <div className="grid md:grid-cols-2 mb-4">
      <div className="image">
        <Link href="/">
          <Image
            src="/images/image1.png"
            width={600}
            height={600}
            alt="Description of image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col ml-5">
        <div className="cat">
          <Link href="/" className="text-orange-600 hover:text-orange-800">Availabel From</Link>
          <Link href="/" className="text-gray-800 hover:text-gray-600">- October 22, 2024</Link>
        </div>
        <div className="title">
          <Link href="/" className="text-2xl md:text-5xl font-bold text-gray-600 hover:text-gray-600">
            Your most unhappy customer is your greatest source of learning
          </Link>
          <p className="text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi saepe. Consectetur dolorum a nobis harum facere, veritatis doloremque? Sed quaerat et magnam tenetur reiciendis?
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
}


function Slide1() {
  return (
    <div className="grid md:grid-cols-2 mb-4">
      <div className="image">
        <Link href="/">
          <Image
            src="/images/slide1.png"
            width={600}
            height={600}
            alt="Description of image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col ml-5">
        <div className="cat">
          <Link href="/" className="text-orange-600 hover:text-orange-800">Business Travel</Link>
          <Link href="/" className="text-gray-800 hover:text-gray-600">- October 22, 2024</Link>
        </div>
        <div className="title">
          <Link href="/" className="text-2xl md:text-5xl font-bold text-gray-600 hover:text-gray-600">
            Your most unhappy customer is your greatest source of learning
          </Link>
          <p className="text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi saepe. Consectetur dolorum a nobis harum facere, veritatis doloremque? Sed quaerat et magnam tenetur reiciendis?
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
}

