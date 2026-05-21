# Bitfinex - E2E Tests

## The tests are being developed with Javascript, Cypress.io & Cucumber

Cypress is a next generation front end testing tool built for the modern web. This enables us to write faster, easier and more reliable tests.

Cucumber, along with Gherkin, is the testing framework. Gherkin is the business language used to write the tests in a “human readable” way. Cucumber helps capture test results as well.

## Cloning

First of all you need to create a local folder [assessment-revelo](https://github.com/gabriel0182/assessment-revelo) repository:

1. Clone your fork:

```
git clone https://github.com/gabriel0182/assessment-revelo

```

2. Updating your local environment from original repo to keep up with their changes:

```
git pull origin master
```

## Installation

Now you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed in your machine.

Once you have them, install the dependencies running:

```
npm install --save-dev
```

## Tools

We suggest using [Visual Studio Code](https://visualstudio.microsoft.com/) as a code editor.

Before starting, we recommend installing the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions which is our code formatters. Add the file `.vscode/settings.json` with the content:

```
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.formatOnPaste": false,
	"cucumberautocomplete.steps": ["cypress/e2e/**/*.js"],
	"cucumberautocomplete.strictGherkinCompletion": true,
	"cSpell.words": ["apikey", "badeball", "bahmutov", "Esbuild", "maint", "mochawesome", "Parens", "Totp"],
	"[feature]": {
		"editor.defaultFormatter": "alexkrechik.cucumberautocomplete"
	},
	"editor.bracketPairColorization.enabled": true,
	"editor.guides.bracketPairs": "active"
}
```

And make sure you have the `.prettierrc` file with the following content:

```
{
	"semi": false,
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 2,
	"bracketSpacing": true,
	"arrowParens": "always",
	"trailingComma": "es5",
	"printWidth": 120
}
```

This ensures that every time we add new code, it is saved and formatted correctly.

## Execution

In order to execute the tests, you just need to execute the following commands.

If you prefer in headless mode (running all tests):

```
npm run test:all
```

Or if you want to perform with the Cypress test runner:

```
npm run cy:open
```

We recommend running all the scenarios before creating the PR to make sure that everything will go smoothly when running the build of our automated suite, using:

```
node cypress_runner.js
```

Or to target a specific test:

```
node cypress_runner.js --spec "cypress/e2e/test.spec.js"
```

Another suggestion is run the new test several times in a row using the command `repeat_test`:

```
npm run repeat_test cypress/e2e/test.spec.js
```

This will run the test 5 times in a row.

Or if you want to perform with the Cypress test with the dashboard results:

npm run cypress-run-dashboard

## Git flow

When you are going to create a new feature test, be sure to create a new branch, but before creating the new branch, pull your local `master` branch so that it is up to date with respect to the remote main branch.

To update the `master` branch:

```
git checkout master
git pull origin master
```

Create and switch to the new branch:

```
git checkout -b descriptive-name-of-the-branch
```

You are now ready to work on your branch locally, and create the new test, or make a fix or refactor when necessary.

When you are adding new code, remember to make frequent and small commits. Once you finish your work, consider to go to the main branch and update it, and then merge/rebase it to the branch you are working on, so that when you create the PR you avoid conflicts.

## Handling Dependent PRs

When your work depends on changes from another unmerged PR, use feature branch chaining to avoid coupling and stay unblocked:

### Steps:

1. Branch off the dependent PR:

   ```
   git checkout -b feature/your-task-name feature/dependent-pr-branch
   ```

2. Work only on the new changes required for your task.

3. Open your PR and clearly mention:

   > "This branch is based on `feature/dependent-pr-branch`. Will rebase to `main` once that is merged."

4. Optionally prefix the PR title with `[DEPENDS ON #123]` or `[BLOCKED]` for visibility.

5. Once the dependent PR is merged, rebase your branch onto `main`:
   ```
   git checkout feature/your-task-name
   git fetch upstream
   git rebase upstream/main
   ```

This approach keeps your PR focused and clean, while ensuring that development remains unblocked.
