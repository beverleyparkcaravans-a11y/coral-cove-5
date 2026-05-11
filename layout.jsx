import './globals.css';

export const metadata = {
  title: 'Coral Cove 5 | Luxury Lodge at Beverley Holiday Park Devon',
  description: 'Luxury Regal Cranleigh lodge sleeping 4 at Beverley Holiday Park, Paignton, Devon. Free WiFi, entertainment passes included, no pets, no smoking.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
