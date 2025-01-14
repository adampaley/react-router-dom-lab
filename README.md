# React Router DOM Lab

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/assets/reactville.png)

## About
Welcome to Reactville’s local post office! In this lab, you’ll develop an application that simulates the management of post office boxes. Features will include creating new mailboxes, viewing a list of all mailboxes, and exploring individual mailbox details.

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/assets/solution-ui-1.png)

Throughout the lab, you’ll use client-side routing tools from the React Router library to navigate between different components. This approach allows your single-page application to function more like a traditional multi-page website, improving the user experience by providing distinct navigable pages without full page reloads.

## Setup

Open your Terminal application and navigate to your ~/code/ga/labs directory:

```
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `react-router-dom-lab`.

* Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
* Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```
cd react-router-dom-lab
npm i
```

Open the project’s folder in your code editor:

```
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the indicated `rules` to the rules object in your `eslint.config.js` file:

```js
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // add this line
      'react/no-unescaped-entities': 'off', // add this line
    },
```

The first addition prevents warnings if you don’t declare types for your props (which we’re not), and the second prevents warnings if you use contractions within JSX.

### Clear `App.jsx`
Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {
  return <h1>Hello world!</h1>;
};

export default App;
```

### Running the development server
To start the development server and view our app in the browser, we’ll use the following command:

```
npm run dev
```

You should see that `Vite` is available on port number 5173:

```
localhost:5173
```

### Github setup
To add this project to GitHub, initialize a Git repository:

```
git init
git add .
git commit -m "init commit"
```

Make a new repository on GitHub named `react-router-dom-lab`.

Link your local project to your remote GitHub repo:

```
git remote add origin https://github.com/<github-username>/react-router-dom-lab.git
git push origin main
```
> Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>`(including the `<` and `>`) in the URL above.

## Adding CSS starter code
Styling is not a requirement for this lab, but feel free to develop the final look of this application as you see fit. Below, you will find some basic CSS to get you started.

Add the following to the bottom of `src/index.css`:

```css
/* src/index.css */

body {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

#root {
  width: 100%;
  height: 100%;
}

ul {
  padding: 0;
  display: flex;
  list-style: none;
}

li {
  margin-right: 16px;
}

.mail-box {
  border: 2px solid white;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label,
button {
  margin: 16px 0px;
  font-weight: bold;
}

input,
select,
textarea {
  padding: 8px;
}

button {
  background-color: #535bf2;
}
```

# Exercise
## Overview
In this lab, you will build an application that simulates a post office, where users can create new mailboxes, view a list of all mailboxes, and explore details about each mailbox.

You will utilize several client-side routing tools provided by React Router’s library to complete this lab.

Here are a few screenshots to reference as you work through this exercise:

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/exercise/assets/list.png)

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/exercise/assets/details.png)

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/exercise/assets/new-mailbox.png)

Take a look at the component hierarchy diagram below for a sense of how this application will be structured:

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/exercise/assets/chd.png)

In the list below, you’ll find a brief description of the role of each component in our app:

* **App**: The root component that orchestrates the entire application.
* **NavBar**: Provides navigation links.
* **MailboxForm**: Allows users to enter details for and submit new mailboxes.
* **MailboxList**: Displays an index list of all mailboxes.
* **MailboxDetails**: Shows details about a specific mailbox.

## User Stories
Here are the user stories for this lab:

* As a user, I should see a nav bar with links at the top of each page in the application.

* As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’.

* As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes.

* As a user, when viewing the form on the ‘New Mailbox’ page, I should see a `<form>` with an `<input>` for the name of the `boxOwner` and a `<select>` menu for the `boxSize`. The `<select>` menu should include three options: ‘Small’, ‘Medium’, and ‘Large’.

* As a user, I should not be required to select a box number when creating a new mailbox. When a new mailbox is created, it should be assigned a box number, or `_id`, automatically. This number should increment based on the number of mailboxes that already exist.

* As a user, when I submit a the ‘New Mailbox’ form, I should be redirected to the ‘Mailboxes’ page (`/mailboxes`) where I will see the newly created mailbox added to the list.

* As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page.

* As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. Each mailbox in the list should be a square container with a box number `_id`.

* As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page.

* As a user, when viewing the details page, I should see details about a specific mailbox. The details should include the box number (`_id`), the name of the box owner, and the box size.

* As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.

## Lab Exercise 
Your primary goal is to implement the user stories listed above.

To get started, follow the steps below:
1. Start by creating each of the components listed below. After creating each component, be sure to import them at the top of `src/App.jsx`.
    * src/components/NavBar/NavBar.jsx
    * src/components/MailboxForm/MailboxForm.jsx
    * src/components/MailboxList/MailboxList.jsx
    * src/components/MailboxDetails/MailboxDetails.jsx

2. Within `NavBar.jsx`, import `Link` from `react-router` and create a `<Link>` for each destination in the table below:
    | Destination       | `to`          | Text Content |
    | :---------------- | :------:      | ----: |
    | Home              |   `/`         | Home |
    | MailboxList       |   `/mailboxes`| Mailboxes |
    | MailboxForm       |  `/new-mailbox`| New Mailbox |

3. In `App.jsx`, import `Route` and `Routes` from `react-router` and create a `<Route>` for each destination in the table below:
    | Destination              | `path` | `element` |
    | :---------------- | :------: | ----: |
    | Home      |   `/`       | `<main><h1>Post Office</h1></main>` |
    | MailboxList        |   `/mailboxes`   | `<MailboxList />` |
    | MailboxForm    |  `/new-mailbox`   | `<MailboxForm />` |
    | MailboxDetails	 |  `/mailboxes/:mailboxId`   | 	`<MailboxDetails />` |

4. In `App.jsx`, import `useState` from `react` and create a new `useState` variable called `mailboxes`. Set its initial state to an empty array (`[]`).

5. In `App.jsx`, build the scaffolding for a function called `addBox`. It should accept form data for a new mailbox and `setMailboxes` state accordingly.

### Hints

1. The `mailboxes` `useState` variable will be used to store an array of objects, each object representing a mailbox. Each mailbox object should adhere to the shape outlined below:

    ```jsx
    {
        _id: 1,
        boxSize: 'Small',
        boxOwner: 'Alex',
    };
    ```

2. New mailboxes should receive a box number or `_id` property automatically. A good place to handle this would be the `addBox` function in `App.jsx`. The value of the `_id` property can be derived by adding 1 to the current `length` of `mailboxes` state. This value can be added to the submitted form data before the object is set in state.

3. When building out `MailboxDetails.jsx`, the `useParams()` hook will be useful. You can use the value extracted from the URL params `to find()` a specific mailbox in `mailboxes` state.

    ```jsx
    // src/components/MailboxDetails/MailboxDetails.jsx

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (
    mailbox._id === Number(mailboxId)
    ));
    ```

4. From the user stories: 
    * “Each mailbox in the list should be a square container with a box number `_id.`”
    * We’ve included a CSS class called `.mail-box`, where should you place it?

# Level-Up

## Overview
In this level up, you will add the functionality for creating and reading letters within the post office app.

Take a look at the screenshots below as reference:

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/send-and-receive-letters-exercise/assets/new-letter-level-up.png)

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-router-dom-lab/send-and-receive-letters-exercise/assets/details-level-up.png)

## Exercise
Here are the user stories to guide you through the process:

1. Create a new component called `LetterForm.jsx` and import it at the top of `src/App.jsx`.

2. In `src/App.jsx`, create a new `useState` variable called `letters`. Set its initial state to an empty array (`[]`).

3. In `src/App.jsx`, build the scaffolding for a new function called `addLetter`. It should accept form data for a new letter and `setLetters` state accordingly.

4. Implement the following user stories:
  * As a user, I want to be able to send letters to specific mailboxes.
  * As a user, I should be able to click on a ‘New Letter’ link in the nav bar. Doing so should navigate me to a ‘New Letter’ page.
  * As a user, when viewing the ‘New Letter’ page, I should see a `<form>` with a `<select>` menu for the box number (`_id`) that I wish to send a letter to. The `<select>` menu should have options for all existing mailboxes. The `<form>` should also have an `<input>` for the recipient name, and `<textarea>` for my message.
  * As a user, when I submit a new letter, I should be redirected to the ‘MailboxDetails’ page of the respective mailbox.
  * As a user, when viewing the ‘MailboxDetails’ page, I should see a list of all the letters that have been send to that mailbox.

### Hints 
1. The `letters` `useState` variable will be used to store an array of objects, each object representing a letter. Each letter object should adhere to the shape outlined below:
    ```jsx
    {
    mailboxId: 0,
    recipient: '',
    message: '',
    };
    ```
2. To enable your users to `<select>` a mailbox when writing a letter, you will want to pass `mailboxes` state down to `src/components/LetterForm/LetterForm.jsx`, and use the `map()` method to generate a collection of `<option>` tags within the `<select>` menu.
3. The `useParams()` hook should be useful for displaying the `letters` of a particular mailbox in `src/components/MailboxDetails/MailboxDetails.jsx` You can use the value extracted from the URL params to `find()` a specific mailbox in `mailboxes` state.
    ```jsx
    // src/components/MailboxDetails/MailboxDetails.jsx
    const { mailboxId } = useParams();
    const selectedLetters = props.letters.filter((letter) => (
    letter.mailboxId === Number(mailboxId)
    ));
    ```