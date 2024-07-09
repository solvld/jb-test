import { useState } from 'react'

const navLinks = ['Beans', 'Facts', 'Recipes', 'Combinations', 'History']

export default function Header() {
  const [param, setParam] = useState('Beans')
  return (
    <div className="w-full flex justify-center p-4">
      <ul className="flex justify-between list-none text-red-500 w-full max-w-[360px]">
        {navLinks.map(link => (
          <li
            className="cursor-pointer"
            onClick={() => setParam(link)}
            style={param == link ? { fontWeight: '700' } : {}}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}
