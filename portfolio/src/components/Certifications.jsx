import React, { useState } from 'react';
import Heading1 from './text/Heading1';

const Certifications = () => {
    const [loading, setLoading] = useState([true, true, true, true]);

    const handleImageLoad = (index) => {
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = false;
            return newLoading;
        });
    };

    return (
        <div className='mx-4'>
            <Heading1 text='Volunteering Work' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative overflow-hidden">
                    {loading[0] && <div className="absolute inset-0 flex items-center justify-center">Loading...</div>}
                    <img 
                        src="img1.jpg" 
                        alt="Description 1" 
                        className={`object-contain transform transition-transform duration-500 hover:scale-110 ${loading[0] ? 'opacity-0' : 'opacity-100'}`} 
                        onLoad={() => handleImageLoad(0)} 
                    />
                </div>
                <div className="relative overflow-hidden">
                    {loading[1] && <div className="absolute inset-0 flex items-center justify-center">Loading...</div>}
                    <img 
                        src="img2.jpg" 
                        alt="Description 2" 
                        className={`object-contain transform transition-transform duration-500 hover:scale-110 ${loading[1] ? 'opacity-0' : 'opacity-100'}`} 
                        onLoad={() => handleImageLoad(1)} 
                    />
                </div>
                <div className="relative overflow-hidden">
                    {loading[2] && <div className="absolute inset-0 flex items-center justify-center">Loading...</div>}
                    <img 
                        src="img3.jpg" 
                        alt="Description 3" 
                        className={`object-contain transform transition-transform duration-500 hover:scale-110 ${loading[2] ? 'opacity-0' : 'opacity-100'}`} 
                        onLoad={() => handleImageLoad(2)} 
                    />
                </div>
            </div>
            <Heading1 text='Certificates' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative overflow-hidden">
                    {loading[3] && <div className="absolute inset-0 flex items-center justify-center">Loading...</div>}
                    <img 
                        src="img4.jpg" 
                        alt="Description 4" 
                        className={`object-contain transform transition-transform duration-500 hover:scale-110 ${loading[3] ? 'opacity-0' : 'opacity-100'}`} 
                        onLoad={() => handleImageLoad(3)} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Certifications;