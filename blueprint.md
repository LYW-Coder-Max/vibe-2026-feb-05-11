# Project Blueprint

## Overview

This project is a Toto number generator application. It allows users to generate random numbers for the Toto lottery game.

## Implemented Features

*   Initial HTML structure with a title.

## Current Plan

*   **Goal:** Convert the static `index.html` page into a functional Toto Number Generator.
*   **Steps:**
    1.  **Modify `index.html`**:
        *   Update the page title to "Toto Number Generator".
        *   Replace the current body with a custom web component `<toto-generator>`.
    2.  **Modify `main.js`**:
        *   Create a `TotoGenerator` class that extends `HTMLElement`.
        *   The component will include a button to generate numbers.
        *   It will display 6 random numbers between 1 and 49.
    3.  **Modify `style.css`**:
        *   Add styles for the generator, button, and the displayed numbers to make it visually appealing.
