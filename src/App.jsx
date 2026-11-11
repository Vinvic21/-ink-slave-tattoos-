import { useState } from 'react'
import { business as b, address, mapsUrl } from './data/businessInfo.js'

const nav = [['About', '#about'], ['Services', '#services'], ['Hours', '#hours'], ['Visit', '#visit']]
const tel = b.phone.replace(/[^+\d]/g, '')

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <a className="brand" href="#top">{b.name}</a>
        <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn small" href={b.phone ? `tel:${tel}` : mapsUrl} {...(!b.phone && { target: '_blank', rel: 'noopener noreferrer' })}>
            {b.phone ? 'Call the shop' : 'Get directions'}
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <p className="kicker">{b.category} in {b.city}, Georgia</p>
          <h1>{b.name}</h1>
          <p className="big">Open 24 hours, Thursday to Saturday.</p>
          <p className="lead">Find us at {address}. Walk in during opening hours to talk with an artist.</p>
          <div className="actions">
            <a className="btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            {b.bookingUrl && <a className="btn ghost" href={b.bookingUrl} target="_blank" rel="noopener noreferrer">Book online</a>}
            {b.phone && <a className="btn ghost" href={`tel:${tel}`}>Call {b.phone}</a>}
          </div>
        </section>

        <section id="about" className="sec narrow">
          <h2>About the shop</h2>
          <p>Ink Slave Tattoos is a tattoo shop on GA-138 in Riverdale, Georgia. Stop by to see the shop, meet the artists and talk through the piece you have in mind.</p>
        </section>

        <section id="services" className="sec alt">
          <h2>Services</h2>
          <ul className="services">
            {b.services.map(s => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
          </ul>
        </section>

        <section id="hours" className="sec narrow">
          <h2>Opening hours</h2>
          <table className="hours">
            <caption className="sr">Weekly opening hours</caption>
            <tbody>{b.hours.map(([d, t]) => <tr key={d}><th scope="row">{d}</th><td>{t}</td></tr>)}</tbody>
          </table>
          <p className="note">Hours can change on public holidays. Check before a special trip.</p>
        </section>

        <section id="visit" className="sec alt">
          <h2>Visit or contact</h2>
          <address>
            <strong>{b.name}</strong><br />
            {b.street}<br />{b.city}, {b.region} {b.postalCode}
            {b.phone && <><br /><a href={`tel:${tel}`}>{b.phone}</a></>}
            {b.email && <><br /><a href={`mailto:${b.email}`}>{b.email}</a></>}
          </address>
          <p><a className="btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {b.name}, {address}</p>
        <p>
          {b.instagramUrl && <a href={b.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>}
          {b.facebookUrl && <> <a href={b.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></>}
        </p>
      </footer>
    </>
  )
}
