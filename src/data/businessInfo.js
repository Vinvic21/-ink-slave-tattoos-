// Single source of truth. Edit here. Empty phone/email/bookingUrl hide those items automatically.
export const business = {
  name: 'Ink Slave Tattoos',
  category: 'Tattoo shop',
  street: '1296 GA-138',
  city: 'Riverdale',
  region: 'GA',
  postalCode: '30296',
  phone: '',        // e.g. '+1 770 555 0100' (owner to supply)
  email: '',        // owner to supply
  bookingUrl: '',   // owner to supply (Instagram DM link, booking form, etc.)
  instagramUrl: '', // owner to supply
  facebookUrl: '',  // owner to supply
  // Copied from the Google Maps listing; owner must confirm.
  hours: [
    ['Monday', '9 am – 11 pm'],
    ['Tuesday', '9 am – 11 pm'],
    ['Wednesday', '9 am – 11 pm'],
    ['Thursday', 'Open 24 hours'],
    ['Friday', 'Open 24 hours'],
    ['Saturday', 'Open 24 hours'],
    ['Sunday', '9 am – 10 pm'],
  ],
  // Owner must confirm each service before launch.
  services: [
    { title: 'Tattoos', text: 'Custom tattoo work by the shop’s artists. Bring your idea and talk it through with an artist in the shop.' },
    { title: 'Piercings', text: 'Body piercing at the shop. Ask in person about which piercings are available.' },
  ],
}
export const address = `${business.street}, ${business.city}, ${business.region} ${business.postalCode}`
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name + ' ' + address)}`
