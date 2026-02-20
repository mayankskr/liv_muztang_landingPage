import { PhoneIcon } from 'lucide-react';
export default function CallButton() {
  return (
    <div className="flex w-fit items-center justify-center rounded-3xl bg-white p-1">
      <a href="tel:+910000000000" className="flex gap-1 font-semibold text-slate-800">
        <PhoneIcon className="h-6 w-6 text-orange-400" />
        Call Now
      </a>
    </div>
  );
}
