'use client';

import Image from 'next/image';
import { useState } from 'react';
import { supabase } from '../../utils/supabase/client';

export default function Page() {

    const [img, setImg] = useState<string | null>(null);
    console.log(img);

    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const imgFile = event.target.files[0];
        console.log('file:', imgFile);
        const imgUrl = URL.createObjectURL(imgFile);
        console.log('url:', imgUrl);
        setImg(imgUrl);
    
        const { data, error } = await supabase.storage
        .from('images')
        .upload(imgFile.name, imgFile); // upload the file to the 'images' bucket with its original name
    }

    return <div className="h-screen grid place-content-center gap-y-4">
        {img && <Image height={200} width={200} src={img} alt="Preview" />}
        <input type="file" onChange={handleFileChange} />
    </div>
}