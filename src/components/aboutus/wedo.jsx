const Wedo=()=>{
    return(
   <section className="bg-gray-800 text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Sofa & Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">What We Do</h2>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
            Discover the Magic of Sharma's Furniture:  
            Where Dreams Take Shape in Wood and Design.
          </h3>
          <img
            src="https://www.decornation.in/wp-content/uploads/2020/09/wooden-sofa-set.jpg"
            alt="Custom Sofa"
            className="rounded-lg shadow-lg mb-6"
          />
          <h4 className="text-xl font-bold mb-2">
            Custom Furniture Design
          </h4>
          <p className="text-gray-300 mb-4">
            Bring your vision to life with our personalized furniture design
            service, tailored to suit your unique style and preferences.
          </p>
          <a href="#" className="text-yellow-500 underline font-semibold">
            Consult Now
          </a>
        </div>

        {/* Right Side - Static Stats */}
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-yellow-500">50 Year</p>
            <p className="text-gray-300">Material Warranty</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">2500+</p>
            <p className="text-gray-300">Homes Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">100+</p>
            <p className="text-gray-300">Interior Designers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">45 Days</p>
            <p className="text-gray-300">Project Delivery</p>
          </div>
        </div>

      </div>
    </section>
    )
}
export default Wedo;