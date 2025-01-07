import Link from "next/link"


interface portfoliobtnprops {
    label: string
    to: string
}

const portfoliobtn: React.FC<portfoliobtnprops> = ({label, to}) => {
  return (
    <Link href={to}>
        <button className="btn">{label}</button>
    </Link>
  )
}

export default portfoliobtn