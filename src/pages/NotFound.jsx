import { Link } from 'react-router-dom'
import { Chrome as HomeIcon } from 'lucide-react'
import Page from '../components/Page.jsx'

export default function NotFound() {
  return (
    <Page>
      <section className="min-h-[70vh] grid place-items-center bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [background-size:36px_36px] opacity-50" />
        <div className="relative text-center px-4">
          <p className="font-display text-8xl md:text-9xl font-extrabold text-gradient-gold">404</p>
          <h1 className="mt-4 font-display text-2xl md:text-3xl font-bold">Looks like this desk is empty.</h1>
          <p className="mt-3 text-navy-200 max-w-md mx-auto">The page you’re looking for doesn’t exist — but your next project is just a click away.</p>
          <Link to="/" className="btn-gold mt-7"><HomeIcon className="h-4 w-4" /> Back home</Link>
        </div>
      </section>
    </Page>
  )
}
