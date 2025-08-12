# Personal Website - Project Information

## Project Description
**Purpose:** This repository contains the source code and development standards for my personal website. It serves as both the codebase for my personal site and a reference implementation of modern frontend development practices.

**Vision:** To create a high-performance, accessible, and visually appealing personal website that showcases my work and expertise while following industry best practices.

## GitHub Location and Rules
 - Repository: https://github.com/How2Architect/kapilvirenahuja.git
- Branch Naming: All feature branches must use `/features/` prefix (e.g., `/features/user-authentication`)
- Commit Standards: Conventional commit format required for all commits
  - Format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore
- Pull Request Process:
  - Must run linting before creating PR
  - Required code review from at least one team member
  - All CI/CD checks must pass
  - Use `gh` CLI for all GitHub operations (issues, PRs, releases)
- Documentation: CLAUDE.md file provides guidance for Claude Code interactions

## Architecture & Technology
 - frontend project, static generation layer
 - shadcn/ui components
 - deployed on vercel
 - reusable next.js components
 - mobile first design, and responsive
 - fast loading times with optimized assets
 - build for accessibility, and seo

## Quality
 - Minimum 80% coverage
 - cyclomatic complexity of maximum 10 per method
 - less thatn 3% duplicated code
 - maintain less than 5% tech debt ration
 - lighthouse audit and web vitals to be > 80
 - WCAG AA standards


## Non-Functional Requirements

### Performance Requirements
- **Page Load Time:** < 3 seconds on 3G connection
- **First Contentful Paint:** < 1.5 seconds
- **Largest Contentful Paint:** < 2.5 seconds
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms
- **Lighthouse Score:** 90+ for Performance, Accessibility, Best Practices, SEO

### Security Requirements
- **Content Security Policy:** Strict CSP headers implemented
- **HTTPS:** TLS 1.3 for all connections (handled by Vercel)
- **Security Headers:** HSTS, X-Frame-Options, X-Content-Type-Options
- **Dependency Security:** Regular dependency updates and vulnerability scanning
- **Privacy:** No tracking without user consent, GDPR compliant

### SEO Requirements
- **Core Web Vitals:** Pass all Google Core Web Vitals metrics
- **Meta Tags:** Complete Open Graph and Twitter Card implementation
- **Structured Data:** JSON-LD for rich snippets
- **Sitemap:** Auto-generated XML sitemap
- **Robots.txt:** Proper search engine directives
- **Canonical URLs:** Prevent duplicate content issues

### Maintainability Requirements
- **Documentation:** Clear README and component documentation
- **Code Reviews:** Peer reviews for all changes
- **Dependency Management:** Regular updates with security scanning
- **Error Monitoring:** Client-side error tracking
- **Deployment:** Automatic deployments with rollback capability via Vercel


## Getting Started
1. **Clone the repository** and review this project.info file
2. **Install dependencies** with `npm install`
3. **Start development server** with `npm run dev`
4. **Read CLAUDE.md** for Claude Code specific guidelines
5. **Review design principles** in `/context/frontend/design-principles.md`
6. **Follow branch naming** conventions and commit standards
7. **Run linting** before creating pull requests
8. **Deploy automatically** to Vercel on push to main branch


## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking


## Contact and Support
For questions about the personal website or development standards, refer to:
- CLAUDE.md for AI-assisted development guidance