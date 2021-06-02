[![Netlify Status](https://api.netlify.com/api/v1/badges/e8f2e766-888b-4954-8500-1b647d84db99/deploy-status)](https://app.netlify.com/sites/rintnetwork/deploys)
[![All Contributors](https://img.shields.io/badge/all_contributors-342-orange.svg?style=flat-square)](#contributors)
[![Discord](https://img.shields.io/discord/714888181740339261?color=1C1CE1&label=rint.network%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square)](https://discord.gg/9PR3gaGzdb)
[![Twitter Follow](https://img.shields.io/twitter/follow/rintnetwork.svg?style=social)](https://twitter.com/rintnetwork)

<h1 align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <p><a href="https://rint.network"><img alt="Rint logo" src="./rint-transparent.png" alt="rint.network" width="500"></a></p>
  <br>
  <p>👋 Welcome</p>
</h1>

This is the repo for the [rint.network](https://rint.network) website, a resource for the Rint community. The purpose of the site is to _“Be the best portal to Rint for our growing global community"_ - read more about what this means [here](https://rint.network/en/about/).

[rint.network](https://rint.network) is improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to managing its evolution. If you’re interested in helping to improve [rint.network](https://rint.network), find out [how to contribute](https://rint.network/en/contributing/).

## Looking for the Rint blockchain's code?

If you're looking for the Rint blockchain itself, there is no single repo. Instead, Rint has multiple implementations of the protocol written in different programming languages for security and diversity. [Check out the different implementations](https://rint.network/en/developers/docs/nodes-and-clients/#clients)

<hr style="margin-top: 3em; margin-bottom: 3em;">

# How to contribute

This project follows the [all-contributors](https://allcontributors.org/docs/en/overview) specification. Contributions of any kind welcome!

## How updates are made to rint.network:

### Submit an issue

- Create a [new issue](https://github.com/rintnetwork/front-end/issues/new/choose)
- Comment on the issue (if you'd like to be assigned to it) - that way [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).

### Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo)

### Set up your local environment (optional)

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. [Set up your development environment](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

2. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:

```
$ git clone git@github.com:[your_github_handle]/ethereum-org-website.git && cd ethereum-org-website
```

If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```
$ git remote add upstream https://github.com/rintnetwork/front-end.git
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```
$ git checkout dev
$ git fetch upstream
$ git merge upstream/dev
```

3. Install dependencies

```
$ yarn
```

4. Add personal GitHub API token (free)

We recommend setting this up when running the project locally, as we use the GitHub API to fetch repository data for many projects & files.

> - [Follow these instructions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to create a personal GitHub API token
>   - When selecting scopes in step 7, leave everything unchecked (the data we fetch doesn't require any [scope](https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes))
> - In local repo root directory: Make a copy of `.env.example` and name it `.env`
> - Copy & paste your new GitHub API token in `.env`

```
// .env Example:
GATSBY_GITHUB_TOKEN_READ_ONLY=48f84de812090000demo00000000697cf6e6a059
```

### Make awesome changes!

1. Create new branch for your changes

```
$ git checkout -b new_branch_name
```

2. Start developing!

```
$ yarn start
```

- Open this directory in your favorite text editor / IDE, and see your changes live by visiting `localhost:8000` from your browser
- Pro Tip: Explore scripts within `package.json` for more build options

3. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

```
$ git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```
$ git push
```

### Submit your PR

- After your changes are commited to your GitHub fork, submit a pull request (PR) to the `dev` branch of the `rintnetwork/front-end` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`
- Netlify (our hosting service) deploys all PRs to a publicly accessible preview URL, e.g.:
  ![Netlify deploy preview](./netlify-deploy-preview.png)
- _Confirm your Netlify preview deploy looks & functions as expected_
- Why not say hi and draw attention to your PR in [our discord server](https://discord.gg/9PR3gaGzdb)?

### Wait for review

- The website team reviews every PR
- See [how decisions are made on content changes](https://rint.network/en/contributing/#how-decisions-about-the-site-are-made)
- Acceptable PRs will be approved & merged into the `dev` branch

### Release

- `master` is continually synced to Netlify and will automatically deploy new commits to rint.network
- The [website team](https://rint.network/en/contributing/#how-decisions-about-the-site-are-made) will periodically merge `dev` into `master` (typically multiple times per week)
- You can [view the history of releases](https://github.com/rintnetwork/front-end/releases), which include PR highlights

<hr style="margin-top: 3em; margin-bottom: 3em;">

## The rint.network website stack

- [Node.js](https://nodejs.org/)
- [Yarn package manager](https://yarnpkg.com/cli/install)
- [Gatsby](https://www.gatsbyjs.org/)
  - Manages page builds and deployment
  - Configurable in `gatsby-node.js`, `gatsby-browser.js`, `gatsby-config.js`, and `gatsby-ssr.js`
  - [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/)
  - [Gatsby Docs](https://www.gatsbyjs.org/docs/)
- [React](https://reactjs.org/) - A JavaScript library for building component-based user interfaces
- [GraphQL](https://graphql.org/) - A query language for APIs
- [Algolia](https://www.algolia.com/) - Site indexing, rapid intra-site search results, and search analytics
  - Primary implementation: `/src/components/Search/index.js`
- [Crowdin](https://crowdin.com/) - crowdsourcing for our translation efforts (See "Translation initiative" below)
- [GitHub Actions](https://github.com/features/actions) - Manages CI/CD, and issue tracking
- [Netlify](https://yarnpkg.com/cli/install) - DNS management and primary host for `master` build. Also provides automatic preview deployments for all pull requests

### Code structure

| Folder                                   | Primary use                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/src`                                   | Main source folder for development                                                                                                                                                                                  |
| `/src/assets`                            | Image assets                                                                                                                                                                                                        |
| `/src/components`                        | React components that do not function as stand alone pages                                                                                                                                                          |
| `/src/content`                           | Markdown/MDX files for site content stored here. <br>For example: `rint.network/en/about/` is built from `src/content/about/index.md` <br>The markdown files are parsed and rendered by `src/templates/static.js`\* |
| `/src/content/developers/docs`           | \*Markdown files in here use the Docs template: `src/templates/docs.js`                                                                                                                                             |
| `/src/content/developers/tutorials`      | \*Markdown files in here use the Tutorial template: `src/templates/tutorial.js`                                                                                                                                     |
| `/src/data`                              | General data files importable by components                                                                                                                                                                         |
| `/src/hooks`                             | Custom React hooks                                                                                                                                                                                                  |
| `/src/intl`                              | Language translation JSON files                                                                                                                                                                                     |
| `/src/lambda`                            | Lambda function scripts for API calls                                                                                                                                                                               |
| `/src/pages`<br>`/src/pages-conditional` | React components that function as stand alone pages. <br>For example: `rint.network/en/wallets/find-wallet` is built from `src/pages/wallets/find-wallet.js`                                                        |
| `/src/scripts`<br>`/src/utils`           | Custom utility scripts                                                                                                                                                                                              |
| `/src/styles`                            | Stores `layout.css` which contains root level css styling                                                                                                                                                           |
| `/src/templates`                         | JSX templates that define layouts of differnt regions of the site                                                                                                                                                   |
| `/src/theme.js`                          | Declares site color themes, breakpoints and other constants (try to utilize these colors first)                                                                                                                     |

<hr style="margin-top: 3em; margin-bottom: 3em;">

## Website conventions / best practices

### ❗️ Translation initiative

_Please read carefully if adding or altering any written language content_

How to prepare your content for translation depends on whether you're working on a simple Markdown/MDX page or a React component page.

**- MDX pages (`/src/content/page/`)**

Markdown will be translated as whole pages of content, so no specific action is required. Simply create a new folder within `/src/content/` with the name of the page, then place index markdown file (ie. `index.md`) within new folder.

**- React component page**

- **English text should be placed into `/src/intl/en/page-CORRESPONDING-PAGE.json`**
- [Crowdin](https://crowdin.com/) is the platform we use to manage & crowdsource translation efforts. Please use the following conventions to help streamline this process.
- Use kebab casing (utilizing-dashes-between-words) for file names and JSON keys
- Use standard sentence casing for entry values
  - If capitalization styling required, it is preferable to style with CSS
    - Do this:
      ```
        JSON `"page-warning": "Be very careful"`
        CSS `text-transform: uppercase`
      ```
    - Not this:
      ```
        JSON `"page-warning": "BE VERY CAREFUL"`
      ```
  - This minimizes issues during translation, and allows consistent styling to all languages
- _Please avoid_ embedding links within a sentence. For a word/phrase to be a link, it requires a key/string in the intl JSON. If this is in the middle of another sentence, this results in the sentence being broken into multiple pieces, and requires coding the sentence structure into the JavaScript.

  - This results in significant challenges during translation process, as written syntax for each language will very in terms of ordering subjects/verbs/etc.
  - If you're wanting to link to something within your sentence, create a link at the end of the sentence or paragraph:

  ```
  <p>All Rint transactions require a fee, known as Gas, that gets paid to the miner. <Link to="link">More on Gas</Link></p>
  ```

  Once, you've addded your English content to the appropriate JSON file, the above code should look something more like:

  ```
   <p><Translation id="page-transactions" />{" "}<Link to="link"><Translation id="page-transactions-gas-link" /></Link></p>
  ```

  - _tl;dr Each individual JSON entry should be a complete phrase by itself_

- This is done using the `Translation` component. However there is an alternative method for regular JS: `gatsby-plugin-intl` with `/src/utils/translations.js`

  - **Method one: `<Translation />` component (preferred if only needed in JSX)**

    ```
    import { Translation } from "src/components/Translation"

    // Utilize in JSX using
    <Translation id="language-json-key" />
    ```

  - **Method two: `translateMessageId()`**

    ```
    import { useIntl } from "gatsby-plugin-intl"
    import { translateMessageId } from "src/utils/translations"

    // Utilize anywhere in JS using
    const intl = useIntl()
    translateMessageId("language-json-key", intl)
    ```

    ```
    const siteTitle = translateMessageId("site-title", intl)
    ```

## React Hooks

- Components and pages are written using arrow function syntax with React hooks in lieu of using class-based components

```
// Example
import React, { useState, useEffect } from 'react'

const ComponentName = props => {
  // useState hook for managing state variables
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    // useEffect hook for handling component lifecycle
    setGreeting('Hello world')
  }, [])

  return <div>{greeting}</div>
};

export default ComponentName;
```

## Styling

- `src/theme.js` - Declares site color themes, breakpoints and other constants (try to utilize these colors first)
- We use [styled-components](https://styled-components.com/)

  - Tagged template literals are used to style custom components

  ```
  // Example of styling syntax using styled-components

  import styled from "styled-components"

  const GenericButton = styled.div`
    width: 200px;
    height: 50px;
  `
  const PrimaryButton = styled(GenericButton)`
    background: blue;
  `
  const SecondaryButton = styled(GenericButton)`
    background: red;
  `

  // These are each components, capitalized by convention, and can be used within JSX code
  // ie: <PrimaryButton>Text</PrimaryButton>
  ```

  - Recommended VS Code Plugin: `vscode-styled-components` <br>To install: Open VS Code > `Ctrl+P` / `Cmd+P` > Run: <br>`ext install vscode-styled-components`

- Values from `src/theme.js` are automatically passed as a prop object to styled components

  ```
  // Example of theme.js usage

  import styled from "styled-components"

  const Container = styled.div`
    background: ${(props) => props.theme.colors.background};
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: #{(props) => props.theme.fontSized.s};
    }
  `
  ```

- [Framer Motion](https://www.framer.com/motion/) - An open source and production-ready motion library for React on the web, used for our animated designs
- **Emojis**: We use [Twemoji](https://twemoji.twitter.com/), an open-source emoji set created by Twitter. These are hosted by us, and used to provide a consistent experience across operating systems.

```
// Example of emoji use
import Emoji from "./Emoji"

// Within JSX:
<Emoji text=":star:" size={1} /> // sized in `em`
```

- **Icons**: We use [React Icons](https://react-icons.github.io/react-icons/)
  - `src/components/Icon.js` is the component used to import icons to be used
  - If an icon you want to use is not listed you will need to add it to this file

`src/components/Icon.js`:

```
// Example of how to add new icon not listed
import { ZzIconName } from "react-icons/zz"

// Then add to IconContect.Provider children:
{name === "alias" && <ZzIconName />}
```

From React component:

```
// Example of icon use
import Icon from "./Icon"

// Within JSX:
<Icon name="alias" />
```

## Image loading and API calls using GraphQL

- [Gatsby + GraphQL](https://www.gatsbyjs.com/docs/graphql/) used for loading of images and preferred for API calls (in lieu of REST, if possible/practical). Utilizes static page queries that run at build time, not at run time, optimizing performance
- Image loading example:

```
import { graphql } from "gatsby"

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "developers-eth-blocks.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// These query results get passed as an object `props.data` to your component
```

- API call example:

```
import { graphql } from "gatsby"

export const repoInfo = graphql`
  fragment repoInfo on GitHub_Repository {
    stargazerCount
    languages(orderBy: { field: SIZE, direction: DESC }, first: 2) {
      nodes {
        name
      }
    }
    url
  }
`
export const query = graphql`
  query {
    hardhatGitHub: github {
      repository(owner: "nomiclabs", name: "hardhat") {
        ...repoInfo
      }
    }
  }
`
// These query results get passed as an object `props.data` to your component
```

<hr style="margin-top: 3em; margin-bottom: 3em;">

![POAP Logo](src/assets/poap-logo.svg)

## Claim your POAP!

### What is POAP?

> The Proof of Attendance Protocol is a dapp that distributes badges in the form of ERC-721 tokens to prove you participated in an event. [More on POAPs](https://www.poap.xyz/).

### rint.network 2021 Contributor POAP

- If you have commited any changes in 2021 so far that were merged into our repo, you have a POAP waiting!
- This includes our dedicated translators on Crowdin

  [![Discord](https://img.shields.io/discord/714888181740339261?color=1C1CE1&label=Claim%20Your%20POAP!%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat)](https://discord.gg/9PR3gaGzdb)

- 👆 To claim your Contributor POAP, join our Discord server and paste a link to your contribution in the #poaps-🏆 channel

- A member of our team will verify the request and DM you with a peronalized link to claim your own freshly minted POAP collectible!

- To help with verification we request GitHub contributors connect their GitHub account with their Discord account (Discord > Settings > Connections > GitHub). Crowdin contributors will be verified directly through Crowdin by our team.

- If you haven't contributed yet and would like to earn a POAP to show your loyalty to the Rint space, head over to the [issues](https://github.com/rintnetwork/front-end/issues/) tab to get started!

### 2020 Contributor POAP

- If you commited any changes in 2020 that were merged into our repo, you also have a POAP waiting, and this again includes our dedicated translators on Crowdin
- See 2021 section above for how to claim

<hr style="margin-top: 3em; margin-bottom: 3em;">


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

### Join our Discord server

We have a space to discuss all things rint.network – share your ideas or just say hi over [on Discord](https://discord.gg/9PR3gaGzdb).
