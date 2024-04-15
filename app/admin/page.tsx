'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { supabase } from '../utils/supabase/client';
import { useEffect } from 'react';

export default function Page() {
    
    useEffect(() => {

        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            console.log(user);
        }
        getUser();

    }, []);

    return <div className="h-screen grid place-content-center gap-y-4">
        <Link href="/admin/register">
            <Button>Register</Button>
        </Link>
        <Link href="/admin/login">
            <Button>Login</Button>
        </Link>
        <Link href="/admin/image">
            <Button>Image</Button>
        </Link>
    </div>
}