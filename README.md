# NC News Frontend

A modern React-based news aggregation application built with React Router, Bootstrap, and custom hooks for state management.
Deployed: https://nc-news-jkram.netlify.app/
Please note - to connect to the API, the render app may need to be loaded here: https://nc-news-api-qa14.onrender.com/

Github: https://github.com/pooch1e/nc-news-fe

## 🚀 Features

- **Article Browsing**: View articles by topic with sorting and filtering options
- **Interactive Comments**: Read, post, and vote on comments
- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **Topic Navigation**: Browse articles by specific topics
- **Vote System**: Upvote and downvote articles and comments
- **Dynamic Routing**: Clean URLs with React Router
- **Real-time Updates**: Context-based state management for live updates

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Bootstrap 5, Custom CSS
- **State Management**: React Context API, Custom Hooks
- **HTTP Client**: Axios (assumed)
- **Build Tool**: Vite (assumed)

## 📁 Project Structure

```
nc-news-frontend/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── __tests__/                     # Test files
├── plan_assets/                   # Project planning & design assets
│   ├── API STATE.png
│   ├── ARTICLE VIEWS.png
│   ├── COMMENT VIEW.png
│   ├── COMP VIEWS MAIN.png
│   ├── nc news front end docs plan.excalidraw
│   ├── WIREFRAME ALL.png
│   ├── WIREFRAME FULL.png
│   ├── WIREFRAME MOB.png
│   └── WIREFRAME WEB.png
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/                    # Static assets (images, icons, etc.)
    ├── components/
    │   ├── articles/              # Article-related components
    │   │   ├── ArticleStyles.jsx
    │   │   ├── FetchArticles.jsx
    │   │   └── SingleArticle.jsx
    │   ├── comments/              # Comment-related components
    │   │   ├── CommentStyles.jsx
    │   │   ├── FetchComments.jsx
    │   │   └── CommentCard.jsx
    │   ├── Forms/                 # Form components
    │   │   ├── CreatePost.jsx
    │   │   ├── CommentForm.jsx
    │   │   └── ArticleForm.jsx
    │   ├── Hooks/                 # Custom React hooks
    │   │   ├── useApiRequest.js
    │   │   ├── useCommentsRequest.js
    │   │   └── useTopicsRequest.js
    │   ├── layout/                # Layout & UI components
    │   │   ├── Error.jsx
    │   │   ├── Loading.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   └── Navigation.jsx
    │   └── topics/                # Topic-related components
    │       ├── TopicPage.jsx
    │       ├── TopicList.jsx
    │       └── FetchTopics.jsx
    ├── context/                   # React Context providers
    │   ├── idTypeContext.jsx
    │   └── refreshContext.jsx
    └── utils/                     # Utility functions & API calls
        ├── getArticles.js
        ├── getCommentsById.js
        ├── getTopics.js
        ├── postComment.js
        └── voteHandlers.js
```

## 🎯 Key Components

### Custom Hooks
- **`useApiRequest`**: Manages article fetching with sorting and filtering
- **`useCommentsRequest`**: Handles comment data and deletion
- **`useTopicsRequest`**: Fetches and validates topic data

### Context Providers
- **`idTypeContext`**: Manages post types (article/comment)
- **`refreshContext`**: Handles component refresh triggers

### Smart Components
- **`FetchArticles`**: Article listing with sorting capabilities
- **`FetchComments`**: Comment display with voting
- **`CreatePost`**: Dynamic form for articles and comments
- **`Footer`**: Context-aware navigation footer

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd nc-news-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run test suites

When redploying an app, first create an updated build version of the code:

```npm run build```

Deploy to a draft URL:

```netlify deploy```

Deploy to the production URL:

```netlify deploy --prod```

## 🌐 API Integration

The application connects to a backend API with the following endpoints:

- `GET /api/articles` - Fetch articles with optional topic and sorting
- `GET /api/articles/:article_id` - Fetch single article
- `GET /api/articles/:article_id/comments` - Fetch article comments
- `GET /api/topics` - Fetch available topics
- `POST /api/articles/:article_id/comments` - Post new comment
- `PATCH /api/articles/:article_id` - Vote on article
- `PATCH /api/comments/:comment_id` - Vote on comment

## 🎨 Styling

The application uses a combination of:
- **Bootstrap 5** for responsive layout and components
- **Custom CSS** with CSS variables for theming
- **Reddit Sans** font family for modern typography

### CSS Custom Properties
```css
:root {
  --border-debug: 1px solid red;
  --border-card: 1px solid grey;
  --box-shadow-card: 0px 0.2px 0.8px hsl(0deg 0% 0% / 0.49);
  --button-size: 0.8rem;
}
```

## 📋 Current TODO List

### Articles
- [ ] Fix topic pill styling
- [ ] Reduce comment button size and prominence
- [ ] Add navigation from comment button to article view
- [ ] Increase vote container size
- [ ] Improve single article title styling
- [ ] Enhance topic pill design
- [ ] Optimize full-screen layout
- [ ] Implement article posting functionality

### Comments
- [ ] Improve styling and layout
- [ ] Enable comment editing
- [ ] Auto-increment comment count on new posts
- [ ] Refactor state management
- [ ] Add user authentication for posting
- [ ] Update comment count dynamically
- [ ] Implement pagination
- [ ] Add additional sorting options
- [ ] Write comprehensive tests for utilities

### General
- [ ] Add error boundaries
- [ ] Implement loading skeletons
- [ ] Add user authentication
- [ ] Optimize performance with React.memo
- [ ] Add accessibility improvements
- [ ] Implement PWA features

## 🧪 Testing

Currently, testing is in development. Planned testing includes:
- Unit tests for custom hooks
- Integration tests for API calls
- Component testing with React Testing Library
- E2E tests with Cypress

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- Topic validation needs improvement for invalid slugs
- Form validation could be more user-friendly
- Mobile responsive design needs refinement
- Loading states could be more polished

## 📞 Support

For support or questions, please [open an issue](https://github.com/[username]/nc-news-frontend/issues) on GitHub.

---
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
**Note**: This project is currently in active development. Features and documentation may change frequently.