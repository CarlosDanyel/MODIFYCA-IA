import { HomePage } from '@/components/pages/landing-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modifyca | Criação de Currículos Profissionais',
  description:
    'Crie seu currículo de forma rápida e profissional com a Modifyca. Modelos modernos e personalizados para destacar suas habilidades no mercado de trabalho.',
  keywords: [
    'currículo online',
    'criação de currículo',
    'currículo profissional',
    'trabalho',
    'emprego',
    'Modifyca',
  ],
  openGraph: {
    title: 'Modifyca | Criação de Currículos Profissionais',
    description:
      'Destaque-se no mercado com um currículo profissional e bem elaborado. Experimente Modifyca agora!',
    url: 'https://modifyca.com',
    siteName: 'Modifyca',
    images: [
      {
        url: 'https://modifyca.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Modifyca - Plataforma de criação de currículos',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modifyca | Criação de Currículos Profissionais',
    description:
      'Monte seu currículo profissional em poucos minutos com a Modifyca.',
    images: ['https://modifyca.com/twitter-image.png'],
  },
};

export default function Home() {
  return <HomePage />;
}
