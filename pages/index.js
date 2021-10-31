import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Bitmoji from '../components/Bitmoji'
import { motion } from 'framer-motion'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-4xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hey 👋🏻
        </h1>
        <h1 className="text-4xl font-extrabold leading-9 text-purple-400 dark:text-green-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          I'm Valentina.
        </h1>
      </div>
      <h1 className="my-12 text-3xl text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </h1>
      <div className="flex justify-end">
        <motion.div animate={{ rotate: 5 }} transition={{ delay: 0.3 }}>
          <Bitmoji />
        </motion.div>
      </div>
    </motion.div>
  )
}
