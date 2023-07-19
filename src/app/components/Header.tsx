import Link from "next/link"

const Header = () => {
    return(
        <header className="flex justify-between border-b hover:shadow-md duration-1000 ease-out">
        <Link href="/">
          <h1 className="font-bold text-xl p-4">{"C.J's Blog"}</h1>
        </Link>
        <div>
          <nav className="p-4 space-x-2">
            <Link href={'/'}>Home</Link>
            <Link href={'/hobby'}>Hobby</Link>
            <Link href={'/codeStory'}>Code</Link>
            <Link href={'/contact'}>Contact</Link>
          </nav>
        </div>
      </header>
    )
}

export default Header;