# CA Monk Blog

A modern, professional blog application built with React, TypeScript, and Tailwind CSS. This project showcases a clean, responsive design for displaying financial and accounting articles with a focus on user experience and professional aesthetics.

## 🚀 Features

- **Professional Design**: Clean, modern interface matching CA Monk branding
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Article Management**: Browse and read articles with rich content display
- **Interactive Sidebar**: Latest articles with hover effects and selection states
- **Rich Content Display**: Support for images, formatted text, and structured content
- **Real-time Data**: JSON Server backend for dynamic content management
- **TypeScript**: Full type safety and better development experience
- **Modern Stack**: Built with latest React 19 and Vite

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Backend**: JSON Server (for development)
- **Styling**: Tailwind CSS with custom components
- **Linting**: ESLint with TypeScript support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ca-monk-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   
   Start the JSON server (backend):
   ```bash
   npm run server
   ```
   
   Start the React development server (frontend):
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Frontend: `http://localhost:5174`
   - API Server: `http://localhost:3001`

## 🏗️ Project Structure

```
src/
├── api/
│   └── blogs.ts          # API functions for blog data
├── components/
│   ├── BlogDetail.tsx    # Individual blog article display
│   ├── BlogList.tsx      # Sidebar article list
│   └── CreateBlogForm.tsx # Form for creating new blogs
├── lib/
│   └── queryClient.ts    # React Query configuration
├── pages/
│   └── Home.tsx          # Main page layout
├── App.tsx               # Root component
├── App.css               # Custom styles
├── index.css             # Tailwind imports
└── main.tsx              # Application entry point
```

## 🎨 Design Features

### Header
- CA MONK branding with logo
- Navigation menu (Docs, Workflow, Events, Job Board, Pricing)
- Call-to-action "Explore" button

### Main Content
- Centered blog title with descriptive subtitle
- Two-column layout: sidebar + main content
- Professional typography and spacing

### Sidebar (Latest Articles)
- Clean white card design
- Article previews with:
  - Category tags
  - Publication dates
  - Titles and descriptions
  - "Read More" links
- Hover effects and selection states

### Article Display
- Hero image with gradient overlay
- Professional article layout
- Structured content sections:
  - Category and read time badges
  - Article title and description
  - Rich text content
  - Key takeaways sections
  - Quote blocks
  - Author information
- Social sharing buttons

### Footer
- Dark theme with organized link sections
- Company information and legal links
- Responsive grid layout

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start JSON server backend
- `npm run lint` - Run ESLint

## 📊 Data Structure

### Blog Article Schema
```typescript
interface Blog {
  id?: number;
  title: string;
  category: string[];
  description: string;
  content: string;
  coverImage: string;
  date: string;
}
```

### API Endpoints
- `GET /blogs` - Fetch all blog articles
- `GET /blogs/:id` - Fetch specific article
- `POST /blogs` - Create new article

## 🎯 Key Components

### BlogList Component
- Displays article previews in sidebar
- Handles article selection
- Shows loading and error states
- Responsive card design

### BlogDetail Component
- Full article display
- Hero image with overlay
- Structured content layout
- Author information
- Social sharing integration

### Home Component
- Main page layout
- Header with navigation
- Two-column content layout
- Footer with links

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

3. **Set up backend** - Replace JSON Server with your production API

## 🔮 Future Enhancements

- [ ] Search functionality
- [ ] Article categories filtering
- [ ] User authentication
- [ ] Comment system
- [ ] Social media integration
- [ ] SEO optimization
- [ ] Dark mode support
- [ ] Article bookmarking
- [ ] Newsletter subscription

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: React, TypeScript, Tailwind CSS
- **Backend**: JSON Server (Development)
- **Design**: Professional CA Monk branding

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for CA Monk - Empowering the next generation of financial professionals**