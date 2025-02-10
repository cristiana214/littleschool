# Next Boilerplate by cristiana


A Next.js 14 template for building apps with Radix UI and Tailwind CSS with best practices for performance, state management, authentication, and database integration.


## Template Usage, no need if already cloned

```bash
npx create-next-app -e https://github.com/cristiana214/next-boilerplate.git project-name
```
## 📦 Cloning and installation
### to run locally  just clone
```bash
git clone https://github.com/cristiana214/next-boilerplate.git foldername    //foldername can be any othername
```
## if you want to create new repo
```git remote remove origin```
### verify it is removed
``` git remote -v```
#### link the local folder to your new repository
```git remote add origin https://github.com/cristiana214/new-repo.git```
#### push all to new repo
``` git push -u origin main ```
#### push all the branch
``` git push --all origin```


### How to run locally
```bash
cd project-name
```
### install dependencies
```sh
npm install

npm run dev
```
## 📦 Installation

```sh
# Clone the repository
git clone https://github.com/cristiana214/your-repo.git
cd your-repo
```


### Github commands
add all files for commit
```bash
git add .
```
Commit update
```bash
git commit -m "commit message"
```
git pull latest update

```bash
git pull
```
git push latest commit
```bash
git push
```




## Features 

- **Next.js 14 App Directory** – React framework for server-side rendering and static site generation.
- Radix UI Primitives
- **Tailwind CSS** – Utility-first styling with automatic class sorting and merging.
 

- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- **ShadCN UI** – Pre-built, accessible UI,reusable components 

- **Zod** – Schema validation for TypeScript.

### 🔄 State Management
- **Zustand** – Simple, scalable state management. Small, fast and scalable bearbones state-management solution using simplified flux principle
  https://github.com/pmndrs/zustand
- **React Query** – Data fetching, caching, and auto-revalidation.
  State management for fetching, auto-managed queries and mutations, revalidation https://tanstack.com/query/latest

### 🔐 Authentication
- **NextAuth.js** – Secure and flexible authentication for Next.js.

### 🗄️ Database & ORM
- **MySQL / PostgreSQL** – Choice of relational database.
- **Drizzle ORM** – Type-safe database queries.
###  Code Quality
- **ESLint** – Linting for best coding practices.
- **Prettier** – Automatic code formatting.
- **Lint-staged** – Runs linting and formatting only on changed files.
- **Husky** – Git hooks to enforce pre-commit checks.
- **GitHub Actions** – CI/CD for linting and testing.

  node 20.14
  npm 10.8



## 🛠️ Configuration
 ### Tailwind CSS Class Sorting & Merging
Tailwind classes are automatically sorted and merged using Prettier.

### Database Setup
Create a `.env.local` file and set your database connection:

```env
DATABASE_URL="mysql://user:password@localhost:3306/dbname"
# or
DATABASE_URL="postgres://user:password@localhost:5432/dbname"
```

## ✅ Running the Project

```sh
npm run dev  # Start development server
npm run build # Build for production
npm start  # Start production server
```

##  Linting & Formatting

```sh
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

## 🏗️ Git Hooks
Pre-commit hooks ensure clean commits:
```sh
npx husky install
```

 ### CONFIG example
  to generate secret use `$ openssl rand -base64 32`
`  .env.example`

