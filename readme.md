# Vandebron Take-Home Assignment - Consumption Calculator

## Table of Contents

1. [Overview](#overview)
2. [Screenshots](#screenshots)
3. [Tech Stack](#tech-stack)
4. [Features and Implementation Details](#features-and-implementation-details)
5. [Decisions, Trade-Offs, and Alternative Considerations](#decisions-trade-offs-and-alternative-considerations)
6. [What I’d Do Differently / Future Improvements and Real-World Considerations](#what-id-do-differently--future-improvements-and-real-world-considerations)
7. [Original Assignment Instructions](#original-assignment-instructions)

## Overview

This React + TypeScript application was developed as part of the Vandebron take-home assignment. The app implements a consumption calculator that estimates household energy usage based on the selected house type, number of residents, chosen product type, and the presence of solar panels.

Out of the four assignment areas, I decided to focus on a mix of UI improvements, bug fixes, and moving the app closer to a production-ready state, including accessibility, component structure, and code maintainability. The original assignment instructions can be found at the bottom of this README.

## Screenshots

![Screenshot 2026-02-17 at 13.08.19.png](./web/react-example/assets/screenshot-consumption-calculator.png)

## Tech Stack

The project follows the initial setup provided in the assignment and intentionally keeps the technology choice unchanged:

- **React + TypeScript** – for component-based UI development with strong type safety.
- **CSS Modules** – for scoped, maintainable styling.
- **React Testing Library + Vitest** – for unit and component testing.

The application also uses **lucide-react**, as included in the original project setup, for consistent icon usage.

## Features and Implementation Details

- Household configuration inputs.
- The close and submit (”Ok”) buttons are non-functional.
- Verified quality with Lighthouse: a Lighthouse report has been run on the application, showing positive (green) scores for accessibility, best practices, and SEO.

In terms of development assistance, GitHub Copilot and ChatGPT were used to support coding and problem-solving, while all final implementation details were made independently.

Note: this app does not contain the underlying logic for calculating the energy consumption.

## Decisions, Trade-Offs, and Alternative Considerations

- **State management**: No additional state management libraries were introduced as React’s built-in state management was sufficient for the scope of this assignment.

- **Flexbox vs. Grid**: To bring the app’s exact layout, rows, and columns closer to the goal image, I considered using CSS Grid. Ultimately, I chose to stick closely to the code that was implemented as part of the setup, instead of spending the limited time on a CSS refactor (especially considering the context of a tech assignment).

## What I’d Do Differently / Future Improvements and Real-World Considerations

While this project focuses on improvements to UI and production-readiness, there are several areas where the application could be enhanced with additional time and/or resources. The list of items below specifies potential improvements and refinements that could make the calculator more complete, robust, and user-friendly.

- Implement the actual **consumption calculation logic**.
- Add **loading states** for components that rely on async data fetching.
- **CSS variables** – As the app scales, I would propose using CSS variables (e.g., for colors, spacing, typography, etc.).
- **Component abstraction and reusability** – Make the icon button that is used for the household type, resident count, and product its own component.
- **UI improvements** – There are minor visual inconsistencies in the implementation surrounding the layout and colors. In a real-world scenario, a Figma file with design specs would help erase these inconsistencies.
- **Folder structure** – As the app scales, I would implement an improved folder structure in which each folder holds its own component, styles, and tests, instead of having multiples of these files co-exist in one folder.
- **Improved responsiveness** – I would refactor the header so that on smaller viewport widths, the “Ik weet mijn verbruik” link would move underneath the header instead of remaining inline for better usability.
- **User experience refinements**:
  - The “Ik weet mijn verbruik” link would likely live elsewhere in the wider application or be positioned elsewhere within the calculator, depending on the usage and context of the consumption calculator component.
  - The info icon would reveal a tooltip on hover, with information about solar panels.
  - Reconsider the UI if a household has more than 5 residents.
- **Performance**: The Lighthouse report’s performance section shows that improvements can be made to the network dependency tree, minifying JavaScript, and reducing unused JavaScript.

Some action items that could be done to bring the implementation closer to a combination of Vandebron’s and my way of working are:

- Using **conventional commits**
- **Annotating PRs**: if the logic or implementation had been more complicated, I would’ve liked to annotate the code in a PR (as opposed to using this README to share thoughts 🙂)

**Happy reviewing!**

---

## Vandebron Frontend Developer Take-home Assessment

Thanks for applying to Vandebron!! If you've made it this far we already think you're pretty great. Your assignment is below.

## Setup

- Clone the project - At the end of this you'll be asked to send us a zip file including your `.git` folder. We ask that you please not create a pull request with your changes (as this will show other candidates your solutions)
- and decide on a framework you'd like to complete the project in (currently only React).
- Start the project by following the "Getting Started" instructions in the framework-specific readme (e.g. [web/react-example/readme.md](web/react-example/readme.md)) Compare what your app looks like now with the desired app shown below.

<table>
  <thead>
    <tr>
      <th>Example Starter App</th>
      <th>Goal App</th>
    </tr>
  </thead>
  <tr>
    <td><img src="./web/starter-app.png" alt="Starter app" width="500"/></td>
    <td><img src="./web/goal-app.png" alt="Goal app" width="500"/></td>
  </tr>
</table>

There are several areas you can focus on. Pick what you'd like to focus on and implement those. Please don't take more than 4 hours on this.

## Before we get started

- You do not need to spend any time implementing components/features that aren't visible in the goal app.
- You're welcome to switch the approach for styling (use a library you're familiar with) if you'd like.
- The "OK →" button doesn't do anything... that's fine, you can leave it as-is.

## Todo

- [ ] Update styling of the app to make it look like the goal app above.
- [ ] There are a few bugs in the app - feel free to fix any that you find.
- [ ] Calculate the estimated usage based on the inputs provided - there are no strict rules here but generally the "bigger" the house, the higher your consumption, same for amount of people, etc. Should return a type of `{ electricity: number, gas?: number }`.
- [ ] For several reasons, the app isn't production-ready. Make changes so that we can be confident the app will run without issue once we're ready to release.

Happy coding 😃!!

## All Done?

Once you're done, zip up your solution (with the `.git` folder included,) and send it back to us via your favorite file share: Google Drive, Dropbox, etc. During your in-person interview, we'll review the PR so be ready to discuss the changes you've made. Remember to _not_ create a pull request with your changes.

## After the Interview

If you created a fork as part of this process, make sure you delete the fork (or otherwise ensure it's not visible to anyone other than yourself)
