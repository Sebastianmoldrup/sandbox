'use client';

import Image from 'next/image';
import { useState } from 'react';
import { supabase } from '../../utils/supabase/client';
import { Button } from '@/components/ui/button';

export default function Page() {
  // External adds:
  // next.config.js - added image pathname
  //
  const [img, setImg] = useState<string | null>(null);

  //   Fetch images from supabase bucket
  const getImages = async (file: File) => {
    const { data } = supabase.storage.from('images').getPublicUrl(file.name);
    console.log(data);
    setImg(data.publicUrl);
  };

  //   Insert image to supabase bucket & call getImages
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files[0];

    const { data, error } = await supabase.storage
      .from('images')
      .upload(file.name, file);

    if (error) {
      console.error('Error uploading image:', error.message);
    } else if (data) {
      getImages(file);
    }
  };

  // Testing --- Empty bucket for all images
  const emptyBucket = async () => {
    const { data, error } = await supabase.storage.emptyBucket('images');
    if (error) {
      console.error('Error emptying bucket:', error.message);
    } else if (data) {
      console.log('emptied:', data);
    }
  };

  return (
    <div className='h-screen grid place-content-center gap-y-4'>
      {img && <Image height={200} width={200} src={img} alt='Preview' />}
      <input type='file' onChange={handleFileChange} />
      <Button onClick={emptyBucket}>Empty Bucket</Button>
    </div>
  );
}
