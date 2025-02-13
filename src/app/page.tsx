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
    'modelo de currículo',
    'currículo personalizável',
    'como criar um currículo',
    'currículo digital',
    'currículo para vaga de emprego',
    'currículo moderno',
    'currículo eficiente',
    'currículo AI',
    'ferramenta de criação de currículo',
    'criação de currículo profissional',
    'dicas para currículo',
    'currículo para primeira experiência',
    'currículo para estágio',
    'currículo executivo',
    'currículo online gratuito',
    'template de currículo',
    'como melhorar meu currículo',
    'currículo para entrevista de emprego',
    'currículo com inteligência artificial',
    'criar currículo Modifyca',
    'ferramenta Modifyca',
    'currículo Modifyca',
    'plataforma Modifyca',
    'currículo fácil Modifyca',
    'currículo personalizável Modifyca',
    'gerar currículo online Modifyca',
    'currículo profissional Modifyca',
    'criar currículo com AI Modifyca',
    'currículo rápido Modifyca',
    'modificar currículo online',
    'criar currículo digital Modifyca',
    'currículo Modifyca modelo pronto',
    'currículo para vagas Modifyca',
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
