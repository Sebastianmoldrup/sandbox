'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Page() {

    const [img, setImg] = useState<string | null>(null);
    console.log(img);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const imgFile = event.target.files[0];
        const imgUrl = URL.createObjectURL(imgFile);
        setImg(imgUrl);

        const { data, error } = await supabase.storage
  .from('avatars')
  .upload('public/avatar1.png', avatarFile)
    }

    return <div className="h-screen grid place-content-center gap-y-4">
        {img && <Image height={200} width={200} src={img} alt="Preview" />}
        <input type="file" onChange={handleFileChange} />
    </div>
}