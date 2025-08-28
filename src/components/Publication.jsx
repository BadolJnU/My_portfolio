import React from 'react'
import { motion } from 'framer-motion'
import { PUBLICATIONS } from '../constants'

const Publication = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Publication</motion.h1>
      <div>
        {PUBLICATIONS.map((publication, index) => (
          <div key={index}>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl border-double border-4 p-4 rounded-lg mx-auto mb-8'>
              <h2 className='mb-2 mt-2 font-bold text-3xl'>{publication.title}</h2>
              <h4 className='mb-2 font-semibold text-gray'>{publication.authors}</h4>
              <p className='mb-4 text-neutral-400 '>{publication.conference}</p>
              <div className='mb-2 mt-2 pt-2'>
                <a href={publication.link} className='mr-2 rounded-md bg-green-900 text-white px-2 py-1'>Paper Link</a>
              </div>

            </motion.div>
          </div>
        ))}

      </div>

    </div>

  )
}

export default Publication;