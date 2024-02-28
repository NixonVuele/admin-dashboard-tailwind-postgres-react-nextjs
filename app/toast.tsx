import { cookies } from 'next/headers';
import DismissButton from './dismiss-button';

export default function Toast() {
  const cookieStore = cookies();
  const isHidden = cookieStore.get('template-banner-hidden');

  return isHidden ? null : (
        <a
          className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[220px] h-10 flex items-center justify-center "
          href="/rutas"
          target="_blank"
          rel="noreferrer"
        >
          Ver ruta
        </a>
  );
}
