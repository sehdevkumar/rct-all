import { usePostLogger } from "../custom-hooks/usePostLoger";

const Landing = () => {
  
  const {onInfo} = usePostLogger('http://172.16.120.62:8080','Dashboard', 'sehdev')
  



  return (
    <div className="min-h-screen h-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r flex justify-center items-center h-full from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl mb-8">
              Discover amazing features and solutions for your needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>

            <button onClick={()=> {
              onInfo('Hello')
              
            }} className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Post Log
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
