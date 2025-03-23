Thought for 2 seconds### Full-Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience as a full-stack developer.

## Description

This portfolio serves as a comprehensive showcase of my work, skills, and professional journey as a full-stack developer. Designed with a focus on user experience and modern aesthetics, it presents my projects, technical expertise, and contact information in an engaging and interactive manner. The portfolio is fully responsive, ensuring a seamless experience across all devices, and features smooth animations to enhance visual appeal.

## Features

- **Responsive Design**: Fully optimized for all screen sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes based on user preference
- **Animated UI Elements**: Smooth animations and transitions using Framer Motion
- **Interactive Sections**:

- **Hero**: Eye-catching introduction with animated text reveals
- **About**: Personal background and professional journey
- **Projects**: Showcase of featured projects with filtering capability
- **Skills**: Interactive display of technical and soft skills
- **Blog**: Timeline of articles with category filtering
- **Contact**: Contact form with validation and submission feedback

- **Custom Cursor**: Enhanced cursor interaction on desktop devices
- **Preloader**: Engaging loading animation with multilingual greetings
- **Resume Download**: Direct download of resume PDF
- **Smooth Scrolling**: Enhanced navigation experience
- **SEO Optimized**: Meta tags and structured data for better search engine visibility


## Technologies Used

- **Frontend Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form
- **Deployment**: [Vercel](https://vercel.com/)
- **Type Safety**: TypeScript
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git, GitHub


## Installation

Follow these steps to set up the portfolio project locally:

1. **Clone the repository**:

```shellscript
git clone https://github.com/Tushar7436/Portfolio_v2
cd portfolio
```


2. **Install dependencies**:

```shellscript
npm install
# or
yarn install
# or
pnpm install
```


3. **Run the development server**:

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```


4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.


## Usage

The portfolio is designed to be intuitive and easy to navigate:

- **Navigation**: Use the header menu to jump to different sections of the portfolio
- **Projects**: Toggle between "Featured" and "All Projects" to filter the displayed projects
- **Skills**: Switch between tabs to view different skill categories
- **Theme Toggle**: Click the sun/moon icon in the header to switch between light and dark modes
- **Contact Form**: Fill out the form to send a message (form submissions are simulated in the demo)
- **Resume**: Click the "Download Resume" button in the About section to download the resume PDF
- **Mobile Menu**: On smaller screens, use the hamburger menu to access navigation options


## Project Structure

```plaintext
portfolio/
├── app/                  # Next.js App Router pages and layouts
│   ├── work/             # Work showcase page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Homepage component
├── components/           # Reusable React components
│   ├── navigation/       # Header, footer, and navigation components
│   ├── sections/         # Main page sections (Hero, About, Projects, etc.)
│   ├── ui/               # UI components from shadcn/ui
│   └── ui-elements/      # Custom UI elements (RevealText, ScrollIndicator, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets (images, resume PDF, etc.)
├── styles/               # Additional styling (if needed)
├── types/                # TypeScript type definitions
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```
### Environment Variables

If you've added any API integrations or services that require environment variables:

1. Create a `.env.local` file locally for development
2. Add the same variables in your Vercel project settings under "Environment Variables"


## Future Enhancements

- **Blog Integration**: Connect to a headless CMS for dynamic blog content
- **Project Case Studies**: Detailed pages for each project with in-depth information
- **Testimonials Section**: Add client or colleague testimonials
- **Multi-language Support**: Add support for multiple languages
- **Analytics Integration**: Add Google Analytics or similar for visitor tracking
- **Advanced Contact Form**: Connect the contact form to a backend service for actual email sending
- **Interactive Resume**: Create an interactive version of the resume with more details
- **Project Filtering**: Add more filtering options for projects (by technology, year, etc.)
- **Accessibility Improvements**: Further enhance accessibility features
- **Performance Optimization**: Implement additional performance optimizations


---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Vercel](https://vercel.com/) for hosting and deployment
