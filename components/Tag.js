import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-purple-400 hover:text-purple-500 dark:text-green-300 dark:hover:text-green-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
