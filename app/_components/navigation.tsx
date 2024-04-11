import Link from 'next/link';

export default function Navigation() {

    const pages = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Admin',
            url: '/admin'
        },
        {
            name: 'Redux',
            url: '/redux'
        },
        {
            name: 'shadcnui',
            url: '/shadcnui'
        }
    ]

    return <nav className="flex justify-between p-4">
        <h1>Sandbox</h1>
        <ul className="flex gap-x-6">
            {pages.map((page, index) => {
                return <li key={index}><Link href={page.url}>{page.name}</Link></li>
            })
            }
        </ul>
    </nav>
}