# CSS Basics, Selectors, and Typography Guide

This guide covers the core CSS concepts, selectors, combinators, pseudo-elements, pseudo-classes, and typography properties used in this folder.

---

## 1. Selectors and Combinators
Selectors determine which HTML elements your CSS styles apply to. Combinators show the relationship between selectors.

### A. Basic Selectors
*   **Element Selector:** Targets all elements of a specific HTML tag.
    ```css
    h1 {
        color: brown;
    }
    ```
*   **ID Selector (`#`):** Targets a single element with a matching `id` attribute. IDs must be unique within a page.
    ```css
    #Disabled {
        background-color: black;
    }
    ```
*   **Class Selector (`.`):** Targets all elements with a matching `class` attribute. Multiple elements can share the same class.
    ```css
    .tag {
        color: blue;
    }
    ```

### B. Combinators
*   **Descendant Selector (Space ` `):** Targets any element nested inside another element, regardless of how deep it is.
    ```css
    /* Targets any <a> tag inside a <span> tag */
    span a {
        color: chocolate;
    }
    ```
*   **Child Selector (`>`):** Targets only the direct children of a parent element.
    ```css
    /* Targets only <a> tags that are DIRECT children of a <footer> */
    footer > a {
        font-weight: 700;
    }
    ```
*   **Adjacent Sibling Selector (`+`):** Targets an element that is directly next to another element at the same hierarchy level.
    ```css
    /* Targets a <p> tag ONLY if it immediately follows a <button> */
    button + p {
        color: darkblue;
    }
    ```

### C. Attribute Selectors
Targets elements based on the presence or value of an HTML attribute.
```css
/* Targets <button> elements whose 'type' attribute is exactly 'reset' */
button[type=reset] {
    background-color: brown;
}
```

---

## 2. Pseudo-classes
Pseudo-classes style elements based on their state or relationship within the document tree.

*   **`:hover`:** Applies styles when the user points to an element (e.g., with a mouse).
    ```css
    button:hover {
        background-color: black;
        color: white;
    }
    ```
*   **`:active`:** Applies styles while an element is being activated by the user (e.g., during a click).
    ```css
    button:active {
        background-color: red;
    }
    ```
*   **`:nth-child(An+B)`:** (Note: written as `:nth(2n)` in some test code, but standard CSS uses `:nth-child()`). It targets elements based on their index among sibling elements.
    ```css
    /* Targets every second (even) <a> tag among its siblings */
    a:nth-child(2n) {
        color: chartreuse;
    }
    ```

---

## 3. Pseudo-elements
Pseudo-elements are used to style specific parts of an element.

*   **`::first-letter`:** Targets the first letter of the first line of a block-level element.
    ```css
    p::first-letter {
        font-size: 150%;
    }
    ```
*   **`::first-line`:** Targets the first line of a block-level element.
    ```css
    p::first-line {
        font-size: 125%;
    }
    ```
*   **`::selection`:** Styles the portion of the document that has been selected/highlighted by the user.
    ```css
    p::selection {
        background-color: tomato;
    }
    ```

---

## 4. Typography and Formatting Properties
*   **`color`:** Sets the foreground text color of an element.
*   **`text-align`:** Sets horizontal alignment of inline/text content (e.g., `left`, `right`, `center`, `justify`).
*   **`font-weight`:** Sets the weight/thickness of the text (e.g., `lighter`, `normal`, `bold`, `bolder`, or numbers like `400`, `700`).
*   **`font-size`:** Sets the size of the text (e.g., `100px`, `1.5em`, `120%`).
*   **`font-family`:** Specifies a prioritized list of font family names or generic family names.
*   **`line-height`:** Controls the height of a line box, commonly used to set spacing between lines of text (e.g., `130%` or `1.5`).
*   **`text-decoration` Shorthand:** Sets the appearance of decorative lines on text.
    ```css
    /* Syntax order: color | line-type | style | thickness */
    text-decoration: rgb(90, 1, 16) underline wavy 1px;
    ```

---

## 5. CSS Specificity and `!important`
Specificity is the algorithm browsers use to determine which CSS rule wins when multiple rules target the same element.

### A. Specificity Hierarchy (From lowest to highest)
1.  **Element/Pseudo-element Selectors** (e.g., `p`, `div`, `::first-line`) - Specificity weight: `0, 0, 1`
2.  **Class/Attribute/Pseudo-class Selectors** (e.g., `.tag`, `[type=reset]`, `:hover`) - Specificity weight: `0, 1, 0`
3.  **ID Selectors** (e.g., `#mainH`) - Specificity weight: `1, 0, 0`
4.  **Inline Styles** (e.g., `<p style="color: red;">`) - Specificity weight: `1, 0, 0, 0`

### B. The `!important` Rule
When an `!important` rule is added to a CSS declaration, it overrides any other declarations, bypassing the normal specificity hierarchy.
```css
#mainH {
    color: brown !important; /* This wins over any inline styles or higher selectors without !important */
}
```
> [!WARNING]
> Use `!important` sparingly. Overusing it makes debugging stylesheets very difficult because it breaks the natural cascade of CSS.

---

## 6. Inheritance (`inherit`)
Inheritance allows children to inherit styling from their parent elements. Using `inherit` forces an element to take the computed value of its parent's property, even if that element has a different browser default.
```css
button, input {
    color: inherit; /* Forces buttons and inputs to use the color set on the parent form or body */
}
```
