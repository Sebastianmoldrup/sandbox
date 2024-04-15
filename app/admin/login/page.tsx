'use client';
import { supabase } from "@/app/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
    // TODO
    // 1. Form/input validation for email/password
    // 2. Redirect to dashboard after login

    const [user, setUser] = useState({ email: '', password: '' });
    console.log(user);

    const handleSignIn = async () => {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password
        })

        if (error) {
            console.log(error.message);
            return;
        }

        console.log(data);

        if (data.user?.aud === 'authenticated') {
            console.log("User is authenticated");
        }
    }

    return (
        <div className="h-screen grid place-content-center gap-y-4">
            <h2 className="text-2xl font-semibold text-center">Login</h2>
            <div className="flex flex-col items-center space-y-4">
                <Input type="email" placeholder="Email" onChange={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))} />
                <Input type="password" placeholder="Password" onChange={(e) => setUser((prevState) => ({ ...prevState, password: e.target.value }))} />
                {user.email && user.password ? <Button onClick={handleSignIn}>Login</Button> : <Button disabled>Login</Button>}
            </div>
        </div>
    )
}