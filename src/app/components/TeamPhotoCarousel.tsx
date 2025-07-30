'use client';

import Image from 'next/image';

const teamPhotos = [
    { src: '/team/founders.png', alt: 'Founders' },
    { src: '/team/team1.JPEG', alt: 'Team Photo 1' },
    { src: '/team/team2.png', alt: 'Team Photo 2' },
    { src: '/team/team3.png', alt: 'Team Photo 3' },
    { src: '/team/team4.jpg', alt: 'Team Photo 4' },
    { src: '/team/team5.jpg', alt: 'Team Photo 5' },
    { src: '/team/team6.jpg', alt: 'Team Photo 6' },
    { src: '/team/team7.jpg', alt: 'Team Photo 7' },
    { src: '/team/team8.png', alt: 'Team Photo 8' },
    { src: '/team/team9.png', alt: 'Team Photo 9' },
    { src: '/team/team10.png', alt: 'Team Photo 10' },
    { src: '/team/team11.png', alt: 'Team Photo 11' },
];

export default function TeamPhotoCarousel() {
    const itemWidth = 320 + 24; // photo width + mx-3 (12px each side)
    const totalItems = teamPhotos.length;
    const totalWidth = itemWidth * totalItems;

    return (
        <div className="relative overflow-hidden">
            <div 
                className="flex"
                style={{
                    animation: `scroll-left 240s linear infinite`
                }}
            >
                {teamPhotos.concat(teamPhotos).concat(teamPhotos).concat(teamPhotos).map((photo, i) => (
                    <div key={`${photo.src}-${i}`} className="flex-shrink-0 mx-3 flex items-center justify-center">
                        <Image 
                            src={photo.src}
                            alt={photo.alt}
                            width={320}
                            height={240}
                            className="object-contain mx-auto"
                            style={{ height: '240px', width: 'auto' }}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
            
            {/* Fade masks */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0px);
                    }
                    100% {
                        transform: translateX(-${totalWidth * 2}px);
                    }
                }
            `}</style>
        </div>
    );
}
