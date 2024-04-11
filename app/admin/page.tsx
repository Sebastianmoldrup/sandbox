import Link from 'next/link';

export default function Page() {
    return <div className="h-screen grid place-content-center gap-y-4">
        <Link href="/admin/register">Register</Link>
        <Link href="/admin/login">Login</Link>
    </div>
}