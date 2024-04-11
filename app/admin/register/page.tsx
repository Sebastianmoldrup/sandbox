export default function Page() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

    console.log(supabaseUrl, supabaseKey);

    return (
        <div>
            <h1>Register</h1>
            <p>Register page</p>
        </div>
    )
}