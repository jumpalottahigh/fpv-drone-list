import React from 'react'

import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <section>
        <div className="container">{children}</div>
      </section>
      <Footer />
    </>
  )
}
