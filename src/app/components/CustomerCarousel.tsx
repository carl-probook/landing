'use client';

import Image from 'next/image';

const customers = [
    [
        { name: 'Airco', file: 'airco.png' },
        { name: 'Apollo', file: 'apollo.webp' },
        { name: 'Art', file: 'art.webp' },
        { name: 'AStar', file: 'astar.png' },
        { name: 'Blake', file: 'blake.png' },
        { name: 'Boulden', file: 'boulden.avif' },
        { name: 'Bowman', file: 'bowman.svg' },
        { name: 'Cardinal', file: 'cardinal.png' },
        { name: 'Eco', file: 'eco.png' },
        { name: 'FH Furr', file: 'fhfurr.png' },
        { name: 'Heath', file: 'heath.svg' },
        { name: 'Hoover', file: 'hoover.png' },
    ],
    [
        { name: 'John Moore', file: 'johnmoore.png' },
        { name: 'Jones', file: 'jones.png' },
        { name: 'JSP', file: 'jsp.png' },
        { name: 'JW', file: 'jw.png' },
        { name: 'Ken Hall', file: 'kenhall.svg' },
        { name: 'Lion', file: 'lion.png' },
        { name: 'Metro', file: 'metro.png' },
        { name: 'My Plumber Plus', file: 'myplumberplus.webp' },
        { name: 'Network', file: 'network.png' },
        { name: 'TR Milller', file: 'trmiller.png' },
        { name: 'Twebber', file: 'twebber.png' },
        { name: 'Wilson', file: 'wilson.png' },
    ],
];


// kinda hacky
export default function CustomerCarousel({ index = 0 }: { index?: number }) {
    const itemWidth = 128 + 48; // w-32 + mx-6 (24px each side)
    const totalItems = customers[index].length;
    const totalWidth = itemWidth * totalItems;

    return (
        <div className="overflow-hidden">
            <div 
                className="flex"
                style={{
                    animation: index === 0 
                        ? `scroll-left 120s linear infinite`
                        : `scroll-right 120s linear infinite`
                }}
            >
                {customers[index].concat(customers[index]).concat(customers[index]).concat(customers[index]).map((customer, i) => (
                    <div key={`${customer.file}-${i}`} className="flex-shrink-0 mx-6 flex items-center justify-center w-32">
                        <Image
                            src={`/customers/${customer.file}`}
                            alt={customer.name}
                            height={40}
                            width={120}
                            className="max-h-20 max-w-32 object-contain"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
@keyframes scroll-left {
0% {
transform: translateX(0px);
}
100% {
transform: translateX(-${totalWidth * 2}px);
}
}
@keyframes scroll-right {
0% {
transform: translateX(-${totalWidth * 2}px);
}
100% {
transform: translateX(0px);
}
}
`}</style>
        </div>
    );
}
