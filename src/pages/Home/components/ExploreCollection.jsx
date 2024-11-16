import React from 'react';

const ExploreCollection = () => {
  return (
    <div>
      <div className='mb-8 mt-8 text-center h4'>Explore Collection</div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mb-24">
      <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group">
    <img
      src="https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="oxidized-jewellery"
      className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-yellow h4">Jewellery</p>
    </div>
  </div>

  <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group">
    <img
      src="https://images.unsplash.com/photo-1659708701940-e60893ef03d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Accessory"
      className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-yellow h4">Accessory</p>
    </div>
  </div>

  <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group">
    <img
      src="https://images.unsplash.com/photo-1676696706907-0e04665b80bd?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="sarees"
      className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-yellow h4">Sarees</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default ExploreCollection;