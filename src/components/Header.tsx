const navLinks = ['Beans', 'Facts', 'Recipes', 'Combinations', 'History']

interface HeaderProp {
  listProp: string
  setListProp(prop: string): void
}

export default function Header({ listProp, setListProp }: HeaderProp) {
  return (
    <div className="w-full flex justify-center p-4">
      <ul className="flex justify-between list-none text-red-500 w-full max-w-[360px]">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className="cursor-pointer"
            onClick={() => setListProp(link)}
            style={listProp == link ? { fontWeight: '700' } : {}}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}
