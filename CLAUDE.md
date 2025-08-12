# Claude Code Guidance for Personal Website

This file provides guidance to Claude Code when working on this personal website project.

## Project Description
**Purpose:** This repository contains the source code and development standards for my personal website. It serves as both the codebase for my personal site and a reference implementation of modern frontend development practices.

**Vision:** To create a high-performance, accessible, and visually appealing personal website that showcases my work and expertise while following industry best practices.

## GitHub Location and Rules
- Repository: https://github.com/How2Architect/kapilvirenahuja.git
- Branch Naming: All feature branches must use `/features/` prefix (e.g., `/features/user-authentication`)
  - create a branch when preparing for commit if its not on an existing branch
  - connect to github and capture this on an issue if you are not working on an issue already
- Commit Standards: Conventional commit format required for all commits
  - Format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore
- Pull Request Process:
  - Must run linting before creating PR
  - Required code review from at least one team member
  - All CI/CD checks must pass
  - Use `gh` CLI for all GitHub operations (issues, PRs, releases)
- Bug fixing process
  - should create a new branch for working on an issue. new branches must use `/issues/number/` prefix (e.g., `/issues/1` or `/issues/2`)
- Do not refer yourself when creating commit messages



## Architecture & Technology

### Core Technology Stack
- **Framework**: Next.js with TypeScript
- **UI Components**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel with automatic deployments
- **Generation**: Static site generation for optimal performance

### Technical Architecture
- Frontend project with static generation layer
- Reusable Next.js components following consistent patterns
- Mobile-first responsive design approach
- Fast loading times with optimized assets
- Built for accessibility and SEO optimization
- Component-based architecture with TypeScript strict mode

## Quality Standards
- Minimum 80% coverage
- cyclomatic complexity of maximum 10 per method
- less than 3% duplicated code
- maintain less than 5% tech debt ratio
- lighthouse audit and web vitals to be > 80
- WCAG AA standards

## Performance Requirements
- **Page Load Time:** < 3 seconds on 3G connection
- **First Contentful Paint:** < 1.5 seconds
- **Largest Contentful Paint:** < 2.5 seconds
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms
- **Lighthouse Score:** 90+ for Performance, Accessibility, Best Practices, SEO

## Security Requirements
- **Content Security Policy:** Strict CSP headers implemented
- **HTTPS:** TLS 1.3 for all connections (handled by Vercel)
- **Security Headers:** HSTS, X-Frame-Options, X-Content-Type-Options
- **Dependency Security:** Regular dependency updates and vulnerability scanning
- **Privacy:** No tracking without user consent, GDPR compliant

## SEO Requirements
- **Core Web Vitals:** Pass all Google Core Web Vitals metrics
- **Meta Tags:** Complete Open Graph and Twitter Card implementation
- **Structured Data:** JSON-LD for rich snippets
- **Sitemap:** Auto-generated XML sitemap
- **Robots.txt:** Proper search engine directives
- **Canonical URLs:** Prevent duplicate content issues

## Maintainability Requirements
- **Documentation:** Clear README and component documentation
- **Code Reviews:** Peer reviews for all changes
- **Dependency Management:** Regular updates with security scanning
- **Error Monitoring:** Client-side error tracking
- **Deployment:** Automatic deployments with rollback capability via Vercel

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (REQUIRED before creating PRs)
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run Jest tests with coverage
- `npm run lighthouse` - Run Lighthouse performance audit
- `npm run pre-commit` - Run all quality checks before committing

## Getting Started Workflow
1. **Clone the repository** from https://github.com/How2Architect/kapilvirenahuja.git
2. **Install dependencies** with `npm install`
3. **Start development server** with `npm run dev`
4. **Read CLAUDE.md** for Claude Code specific guidelines
5. **Follow branch naming** conventions (`/features/` prefix) and commit standards
6. **Run linting and type checking** before creating pull requests
7. **Deploy automatically** to Vercel on push to main branch

## File Structure and Configuration
- **TypeScript Config**: Strict mode enabled with path aliases `@/*` mapping to `./src/*`
- **ESLint**: Configured with accessibility, TypeScript, and Next.js rules
- **Prettier**: Code formatting with consistent style
- **Jest**: Testing framework with 80% coverage requirement
- **Tailwind**: CSS v4 with custom design system and mobile-first approach
- **Components**: shadcn/ui components in `/src/components/ui`

## Agent Guidelines
- Ask for information upfront, when you make initial prompt, and when you need directions
- When I say `think hard`, then agent should take time to think real hard for solutions
- Use `gh` CLI for all GitHub operations (clone, PR, issues, releases)
- Follow project patterns and existing component structure
- Prioritize performance, accessibility, and user experience
- Always run linting before creating pull requests

## Priority levels
- Mark an issue as High prioity and technical debt if it beeaches a technical guideline
- Mark an issue as High priority and big if it breaches a functional requirement and is breaking major flows
