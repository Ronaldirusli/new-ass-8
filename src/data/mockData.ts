import type {
  NavItem,
  BranchItem,
  ResultData,
  ProcessStep,
  ServiceCardItem,
  IndustryItem,
  ProjectItem,
  Testimonial,
  FaqItem,
} from '../types/index';
import img1 from '../assets/Portofolio 1.png';
import img2 from '../assets/Portofolio 2.png';
import img3 from '../assets/Portofolio 3.png';
import img4 from '../assets/Container.png';
import img5 from '../assets/Website.png';
import img6 from '../assets/Mobile App Development.png';
import img7 from '../assets/UX Design.png';
import img8 from '../assets/Cloud Solutions.png';
import img9 from '../assets/Software Development.png';
import img10 from '../assets/IT Infrastructure.png';
import img11 from '../assets/Icon.png';
import img12 from '../assets/QA Solutions.png';
import img13 from '../assets/IT Consulting & Support.png';
import img14 from '../assets/Imgfintech.png';
import img15 from '../assets/Imgecommerce.png';
import img16 from '../assets/Imghealth.png';
import john from '../assets/Johnlee.png';
import sarah from '../assets/Sarahtan.png';
import emily from '../assets/Emilychen.png';

export const navItems: NavItem[] = [
  { label: 'About', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Projects', href: '/' },
  { label: 'Testimonials', href: '/' },
  { label: 'FAQ', href: '/' },
];
export const branchItem: BranchItem[] = [{ name: 'logoBrand', icon: img4 }];
export const resultData: ResultData[] = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '5+', label: 'Years of Experience' },
  { number: '10+', label: 'Industry Awards Won' },
  { number: '100%', label: 'Client Satisfaction Rate' },
];
export const processStep: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals.',
  },
  {
    number: 2,
    title: 'Planning & Strategy',
    description: 'Build a Clear, Scalable Roadmap.',
  },
  {
    number: 3,
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts.',
  },
  {
    number: 4,
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision.',
  },
  {
    number: 5,
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step.',
  },
  {
    number: 6,
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continously.',
  },
];

export const serviceCardItem: ServiceCardItem[] = [
  {
    icon: img5,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO friendly websites.',
  },
  {
    icon: img6,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
  },
  {
    icon: img7,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces.',
  },
  {
    icon: img8,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
  },
  {
    icon: img9,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
  },
  {
    icon: img10,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
  },
  {
    icon: img11,
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
  },
  {
    icon: img12,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
  },
  {
    icon: img13,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
  },
];
export const IndustryItems: IndustryItem[] = [
  {
    id: 'Fintech',
    name: 'Fintech',
    title:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    imageURL: img14,
  },
  {
    id: 'E-Commerce',
    name: 'E-Commerce',
    title:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    imageURL: img15,
  },
  {
    id: 'Healthcare',
    name: 'Healthcare',
    title:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    imageURL: img16,
  },
];
export const projectItems: ProjectItem[] = [
  {
    title: 'Portofolio 1',
    tag: 'Landing Page',
    imageURL: img1,
  },
  {
    title: 'Portofolio 2',
    tag: 'Landing Page',
    imageURL: img2,
  },
  {
    title: 'Portofolio 3',
    tag: 'Landing Page',
    imageURL: img3,
  },
];
export const testimonials: Testimonial[] = [
  {
    rating: 2,
    quote:
      '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    avatarURL: john,
  },
  {
    rating: 5,
    quote:
      '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatarURL: sarah,
  },

  {
    rating: 2,
    quote:
      '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    avatarURL: emily,
  },
];
export const faqItems: FaqItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
  },
  {
    question: 'How do I know if this is right for my business?',
    answer:
      'Book a free consult — we’ll assess your goals and recommend the right approach.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Every project is different. Let’s talk about your needs to get a tailored estimate.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Depends on scope — but we always prioritize quality and deadlines.',
  },
  {
    question: 'Can I start with a small project first?',
    answer: 'Absolutely. We often begin with MVPs or pilot projects.',
  },
];
