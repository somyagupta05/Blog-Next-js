export default function Footer() {
  return (
    <section>
    
      <footer className="bg-gray-100 text-center">
      
        <div className="container mx-auto p-4">
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center">
           
            <div className="col-span-2 mb-4">
              <h5 className="text-lg font-semibold uppercase mb-4">Footer Content</h5>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                aliquam voluptatem veniam, est atque cumque eum delectus sint!
              </p>
              <hr></hr><hr></hr>
            </div>
            
           
            <div className="flex justify-center space-x-10 text-left">
              
              <div className="space-y-4 text-center">
                <h5 className="text-lg font-semibold uppercase">PLANTS</h5>
                <ul className="list-none text-gray-600">
                  <li>
                    <a href="#!" className="hover:text-blue-600">Bamboo</a>
                  </li>
                  <li>
                    <a href="#!" className="hover:text-blue-600">Aloe Vera</a>
                  </li>
                  <li>
                    <a href="#!" className="hover:text-blue-600">Fiddle Leaf Fig</a>
                  </li>
                  <li>
                    <a href="#!" className="hover:text-blue-600">Spider Plant</a>
                  </li>
                </ul>
              </div>

             
              <div className="space-y-4 text-center">
                <h5 className="text-lg font-semibold uppercase">PLANTS</h5>
                <ul className="list-none text-gray-600">
                  <li>
                    <a href="#!" className="hover:text-blue-600">Peace Lily</a>
                  </li>
                  <li>
                    <a href="#!" className="hover:text-blue-600">Rubber Plant</a>
                  </li>
                  <li>
                    <a href="#!" className="hover:text-blue-600">Orchid</a>
                  </li>
                  <li>
                    <a href="#!" className="hover:text-blue-600">Succulents</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="bg-gray-200 text-center py-3">
          <p className="text-gray-600">
            © 2024 Copyright: 
            <a className="text-blue-600 hover:text-blue-800" href="https://mdbootstrap.com/"> SoMyAgUpTa.com</a>
          </p>
        </div>
        
      </footer>
    </section>
  );
}
