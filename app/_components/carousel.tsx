'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(5);
  const [page, setPage] = useState(1);

  const url = `https://picsum.photos/v2/list?page=${page}&limit=${amount}`;
  const getImages = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log('data:', data);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h1>Carousel</h1>
      <div>
        {loading
          ? 'Loading...'
          : images.map((image) => (
              <Image key={image.id} src={image.url} alt={image.author} />
            ))}
      </div>
    </div>
  );
}
