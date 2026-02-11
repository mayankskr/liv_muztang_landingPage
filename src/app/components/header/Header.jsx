import './header.css';
import { PhoneIcon } from '@heroicons/react/20/solid';
import CallButton from '../CallButton';
export default function Header() {
  return (
    // REMOVED "fixed" class.
    // We keep "z-50" to ensure it stays on top of other content.
    <header className="Header z-50 container mx-auto flex h-12 items-center justify-center gap-4 shadow-xl before:opacity-90 before:backdrop-blur-xl">
      <div>
        <p className="font-bold text-white md:text-xl">Free Consultation</p>
      </div>
      <div className="animate-pulse">
        <CallButton></CallButton>
      </div>
    </header>
  );
}
