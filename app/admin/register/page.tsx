'use client';
import { supabase } from "@/app/utils/supabase/client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
    // TODO
    // 1. Form/input validation for email/password
    // 2. Email verification

    const [user, setUser] = useState({ email: '', password: '' });

    const updateUser = (key: string, value: string) => {
        setUser((prevState) => ({
          ...prevState,
          [key]: value,
        }));
      };

    async function HandleRegister() {

        // Check if email and password is not empty
        if (!user.email || !user.password) {
            return;
        }

        // Sign up user
        let { data, error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password
        })

        // Check if email is not verified
        // if (data.user?.user_metadata.email_verified === false) {
        //     console.log("Email not verified");
        // }

    }

    return (
        <div className="grid place-content-center text-center h-screen gap-y-4">
            <h2 className="text-2xl font-semibold">Register</h2>
            <div className="flex flex-col items-center space-y-4">
                <Input type="email" placeholder="Email" onChange={(e) => updateUser('email', e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => updateUser('password', e.target.value)} />
                {user.email && user.password ? <Button onClick={HandleRegister}>Register</Button> : <Button disabled>Register</Button>}
            </div>
        </div>
    )
}