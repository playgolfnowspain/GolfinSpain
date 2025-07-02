// 1. Create: src/components/ContactButton.jsx
export default function ContactButton() {
    return (
      <a href="mailto:your@email.com" className="bg-green-600 text-white px-4 py-2 rounded">
        Contact Me
      </a>
    );
  }
  
  // 2. Use in Navbar: src/components/Navbar.jsx
  import ContactButton from './ContactButton';
  
  export default function Navbar() {
    return (
      <nav>
        {/* other nav items */}
        <ContactButton />
      </nav>
    );
  }