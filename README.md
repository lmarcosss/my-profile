<p align="center">
    <img src="https://github.com/user-attachments/assets/accf0539-52c9-42b1-a2b0-566d85e0b825" align="center">
	

</p>
<p align="center"><h1 align="center">My profile</h1></p>
<p align="center">
	<em>Styling excellence, code consistency, user engagement.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/lmarcosss/my-profile?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/lmarcosss/my-profile?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/lmarcosss/my-profile?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/lmarcosss/my-profile?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

\*\*Overview:

**my-profile** is a dynamic portfolio project that empowers software developers to showcase their skills, projects, and contact information with flair. Its interactive features include animated cards, theme toggles, and typing animations, enhancing user engagement. Tailored for developers seeking a visually appealing and interactive online presence, my-profile offers a seamless platform to highlight their work and connect with visitors.

---

## Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                                          |
| :-- | :---------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **TypeScript** for strong typing and enhanced developer experience.</li><li>Configured with **Vite** for fast development and optimized builds.</li><li>Follows a **component-based architecture** for reusability and maintainability.</li></ul>                                               |
| 🔩  | **Code Quality**  | <ul><li>**ESLint** setup enforcing best practices and code consistency.</li><li>Integration with **Prettier** for code formatting.</li><li>Utilizes **TypeScript** for type safety and improved code quality.</li></ul>                                                                                          |
| 📄  | **Documentation** | <ul><li>Extensive **TypeScript** documentation with **10 TypeScript files**.</li><li>**Package.json** and **package-lock.json** defining project dependencies and scripts.</li><li>**GitHub Actions workflows** for automated deployment and hosting.</li></ul>                                                  |
| 🔌  | **Integrations**  | <ul><li>**Firebase Hosting** configuration for serving the web application.</li><li>**GitHub Actions** for CI/CD workflows and deployment automation.</li><li>Integration with **Tailwind CSS** for styling and theming.</li></ul>                                                                               |
| 🧩  |  **Modularity**   | <ul><li>**Components.json** defining project configuration for styles and TypeScript setup.</li><li>**Utilizes module aliases** for easy imports and code organization.</li><li>**Context API** for managing theme state and data across the application.</li></ul>                                              |
| 🧪  |    **Testing**    | <ul><li>**Test commands** available using **npm** for running tests.</li><li>**Utilizes Jest or React Testing Library** for testing components and functionality.</li><li>Ensures **test coverage** for critical parts of the application.</li></ul>                                                             |
| ⚡️ |  **Performance**  | <ul><li>**Optimized build process** with **Vite** for fast development and production builds.</li><li>**Lazy loading** of components for improved initial load times.</li><li>**Performance monitoring** tools integrated for tracking and optimizing performance metrics.</li></ul>                             |
| 🛡️  |   **Security**    | <ul><li>**Firebase Hosting** configuration for secure serving of the web application.</li><li>**Code quality checks** with **ESLint** and **Prettier** for secure and consistent codebase.</li><li>**Dependency management** with locked versions in **package-lock.json** for stability and security.</li></ul> |
| 📦  | **Dependencies**  | <ul><li>**Package.json** defining project dependencies including **React**, **Tailwind CSS**, and various UI libraries.</li><li>**Locked versions** managed in **package-lock.json** for consistency and stability.</li><li>**Utilizes npm** for package management and dependency installation.</li></ul>       |

---

## Project Structure

```sh
└── my-profile/
    ├── .github
    │   └── workflows
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── firebase.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── icon.png
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   ├── components
    │   ├── contexts
    │   ├── index.css
    │   ├── lib
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

### Project Index

<details open>
	<summary><b><code>MY-PROFILE/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/components.json'>components.json</a></b></td>
				<td>- Defines project configuration for styles, aliases, and TypeScript setup<br>- Specifies Tailwind CSS settings, file paths, and module aliases for components, utilities, and hooks<br>- Facilitates consistent styling and easy module imports across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td>- Defines ESLint configuration for TypeScript and React projects, leveraging recommended rules and plugins for error checking and code formatting<br>- Integrates with Prettier and enforces best practices for React hooks and components.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/firebase.json'>firebase.json</a></b></td>
				<td>Configure Firebase hosting settings to serve the web application from the 'dist' directory and rewrite all URLs to 'dist/index.html'.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/index.html'>index.html</a></b></td>
				<td>Defines the main HTML structure for the project, setting up the initial layout and linking to the main TypeScript file for functionality.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project structure defines the dependencies and their versions required for the `my-profile` project<br>- It ensures that the project uses specific versions of packages like `@radix-ui/react-dropdown-menu`, `@radix-ui/react-icons`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, and `embla-carousel-react`<br>- This file plays a crucial role in managing and locking the dependencies to maintain consistency and stability within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/package.json'>package.json</a></b></td>
				<td>- Define project dependencies and scripts for development, building, linting, and previewing<br>- Key dependencies include React, Tailwind CSS, and various UI libraries<br>- The package.json file outlines project metadata, scripts, and dependencies essential for development and deployment workflows.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td>Configures PostCSS plugins Tailwind CSS and Autoprefixer for the project's build process.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- Define Tailwind CSS configuration for project theming, including dark mode, content sources, and custom color palette<br>- Extends theme with border radius and color variables<br>- Integrates Tailwind CSS plugin for animations.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td>- Defines TypeScript compiler options for the project, specifying target version, module resolution, and linting rules<br>- Maps custom paths for imports and sets up strict type checking<br>- Configures the project to use ES2020 features and React JSX syntax<br>- The file ensures consistent compilation and adherence to coding standards across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Defines project structure and module paths for TypeScript compilation, ensuring proper resolution of imports across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>- Configures TypeScript compiler options for ES2022 target with strict linting rules and bundler mode for module resolution<br>- Includes Vite configuration file for the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
				<td>- Configures Vite to resolve paths using aliases for easier imports within the project<br>- Sets up React plugin and defines project configuration.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- .github Submodule -->
		<summary><b>.github</b></summary>
		<blockquote>
			<details>
				<summary><b>workflows</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/.github/workflows/firebase-hosting-merge.yml'>firebase-hosting-merge.yml</a></b></td>
						<td>- Automates deployment to Firebase Hosting upon merging changes to the main branch<br>- Utilizes GitHub Actions to build and deploy the project, ensuring seamless updates to the live channel<br>- The workflow integrates Firebase tools for efficient hosting management.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/.github/workflows/firebase-hosting-pull-request.yml'>firebase-hosting-pull-request.yml</a></b></td>
						<td>- Automate deployment to Firebase Hosting for pull requests, ensuring seamless preview of changes<br>- Utilizes GitHub Actions to build and deploy the project, triggered on pull requests<br>- Maintains permissions for necessary actions and integrates with Firebase services for deployment.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/App.css'>App.css</a></b></td>
				<td>- Define the styling for the root element and container, ensuring centralized alignment and responsiveness<br>- Implement flexbox properties for layout control, with media queries for smaller screens<br>- Customize the profile image with specific dimensions and styling attributes.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/App.tsx'>App.tsx</a></b></td>
				<td>- Implements a dynamic portfolio showcasing a software developer's profile, projects, and contact links<br>- Utilizes animations, theming, and a carousel component for an interactive user experience<br>- Integrates icons for social media and email, with the ability to toggle between light and dark themes.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/index.css'>index.css</a></b></td>
				<td>- Defines global styles and color variables for the project, ensuring consistent design across components<br>- Sets typography, color scheme, and button styles<br>- Handles light and dark mode styling based on user preference<br>- Organizes Tailwind CSS utilities and base styles for a cohesive user interface.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/main.tsx'>main.tsx</a></b></td>
				<td>- Initialize the React application by rendering the main component within a strict mode<br>- This file sets up the root element for the application and renders the main App component, ensuring a robust and secure rendering environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
				<td>Defines Vite client types for the project, enhancing development experience and enabling seamless integration with Vite's build tooling.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/animated-card.tsx'>animated-card.tsx</a></b></td>
						<td>- Implements an interactive animated card component using React and Framer Motion<br>- Allows users to flip the card to reveal hidden content, creating an engaging user experience within the project's component architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/header.tsx'>header.tsx</a></b></td>
						<td>Defines the Header component responsible for rendering the project's header section.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/mode-toggle.tsx'>mode-toggle.tsx</a></b></td>
						<td>- Implements a mode toggle component that allows users to switch between light, dark, and system themes<br>- The component includes a button with icons for sun and moon, providing visual feedback for theme selection<br>- The dropdown menu offers options to switch themes with corresponding labels.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/typing-animation.tsx'>typing-animation.tsx</a></b></td>
						<td>- Implements a typing animation component using Framer Motion and React to display text character by character<br>- The component dynamically types out the provided text with a blinking cursor effect, enhancing user engagement and visual appeal within the project's UI components.</td>
					</tr>
					</table>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
								<td>- Defines and exports a Button component with various visual styles and sizes<br>- Utilizes class-variance-authority for managing button variants<br>- The component can be rendered as a button element or a slot based on the 'asChild' prop<br>- Enables easy customization of button appearance and behavior within the project's UI components.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/ui/carousel.tsx'>carousel.tsx</a></b></td>
								<td>- Enables creation of interactive carousels with navigation controls and slide management<br>- Facilitates seamless scrolling between items in a horizontal or vertical orientation<br>- Supports customization through various options and plugins<br>- Enhances user experience by providing intuitive navigation and accessibility features.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/components/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
								<td>- Facilitates creation of customizable dropdown menus with various interactive elements like items, checkboxes, and radio buttons<br>- Enables seamless integration of dropdown functionality into React components, enhancing user experience and interface interactivity within the project architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>contexts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/contexts/theme-provider.tsx'>theme-provider.tsx</a></b></td>
						<td>- Enables dynamic theming based on user preference or system settings<br>- Manages theme state and provides a context for theme-related data across the application<br>- Supports customization of default theme and storage options<br>- Facilitates seamless integration of theme switching functionality within the project's UI components.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lmarcosss/my-profile/blob/master/src/lib/utils.ts'>utils.ts</a></b></td>
						<td>Enhances class value merging for Tailwind CSS classes by combining utility functions clsx and twMerge, optimizing class value handling in the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with my-profile, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Install my-profile using one of the following methods:

**Build from source:**

1. Clone the my-profile repository:

```sh
❯ git clone https://github.com/lmarcosss/my-profile
```

2. Navigate to the project directory:

```sh
❯ cd my-profile
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### Usage

Run my-profile using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

### Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/lmarcosss/my-profile/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/lmarcosss/my-profile/issues)**: Submit bugs found or log feature requests for the `my-profile` project.
- **💡 [Submit Pull Requests](https://github.com/lmarcosss/my-profile/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/lmarcosss/my-profile
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

---

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](./LICENSE.txt) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
