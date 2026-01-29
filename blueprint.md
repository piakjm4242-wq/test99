# Project Blueprint: 이상형 남자 추천

## Overview

This project will transform the existing website into a "Dream Guy Recommendation" page. Users can enter three of their personality traits, and the page will recommend a random male celebrity with a picture.

## File Changes

### `index.html`

*   **Title and Header:** The page title and main `<h1>` heading will be changed to "이상형 남자 추천".
*   **Navigation:** The navigation will be simplified or removed, as it's a single-page application.
*   **Main Content:** The existing `<main>` content will be replaced with:
    *   A descriptive paragraph explaining what to do.
    *   A text `input` field for the user to enter their traits.
    *   A `button` to trigger the recommendation.
    *   A result `div` area (`id="result"`) where the celebrity's name and image will be displayed.

### `main.js`

*   **Cleanup:** Existing JavaScript for smooth scrolling and form handling will be removed.
*   **Celebrity Data:** An array of objects named `celebrities` will be created. Each object will contain:
    *   `name`: The celebrity's name (e.g., "공유").
    *   `imageUrl`: A direct URL to an image of the celebrity.
*   **Event Listener:** A `DOMContentLoaded` event listener will be set up.
*   **Button Click Handler:** An event listener will be attached to the recommendation button's `click` event.
    *   It will select a random celebrity from the `celebrities` array.
    *   It will generate HTML for the result, including the celebrity's name and an `<img>` tag.
    *   This HTML will be injected into the `result` div.

### `style.css`

*   **General Styling:** The page layout will be centered.
*   **Input and Button:** Styles will be added for the text input and the button to make them more visually appealing and user-friendly.
*   **Result Area:** The result container will be styled to present the celebrity's name and image clearly. The image will be styled to be responsive and have a maximum width to avoid being too large.
*   **Cleanup:** Unused styles related to articles, sidebars, etc., may be removed or commented out to keep the stylesheet clean.

## Plan for Current Change

1.  **Modify `index.html`:** Update the structure for the recommendation feature.
2.  **Modify `main.js`:** Implement the celebrity data and the random recommendation logic.
3.  **Modify `style.css`:** Adjust styles for the new layout and components.
4.  **Find Celebrity Images:** Search for and select a few male celebrity images to include in the `main.js` data array.
5.  **Test:** Ensure the button click correctly displays a random celebrity and their image.
