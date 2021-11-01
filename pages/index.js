import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Bitmoji from '../components/Bitmoji'
import { motion } from 'framer-motion'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hey{' '}
            <span role="img" aria-label="wave-hand-emoji">
              👋🏻
            </span>
          </h1>
          <h1 className="text-4xl font-extrabold leading-9 text-purple-400 dark:text-green-300 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
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
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <p className="text-lg uppercase leading-7 text-gray-400 dark:text-white">
          Recently Published
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-purple-400 hover:text-purple-500 dark:text-green-300 dark:hover:text-green-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
