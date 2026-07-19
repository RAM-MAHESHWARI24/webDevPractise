# CSS Box Model and Sizing Guide

Every HTML element is considered a rectangular box by the browser. This guide explains how the CSS Box Model works, how properties like padding, borders, and margins behave, and the styling properties used in this folder.

---

## 1. The Core Box Model
The box model consists of four layers: **Content**, **Padding**, **Border**, and **Margin**.

```
+---------------------------------------+
|                MARGIN                 |
|   +-------------------------------+   |
|   |            BORDER             |   |
|   |   +-----------------------+   |   |
|   |   |        PADDING        |   |   |
|   |   |   +---------------+   |   |   |
|   |   |   |    CONTENT    |   |   |   |
|   |   |   +---------------+   |   |   |
|   |   +-----------------------+   |   |
|   +-------------------------------+   |
+---------------------------------------+
```

*   **Content:** The actual text, images, or child elements. Its size is controlled by `width` and `height`.
*   **Padding:** Transparent space *inside* the border, surrounding the content.
*   **Border:** A line surrounding the padding and content.
*   **Margin:** Transparent space *outside* the border, separating the element from other elements.

---

## 2. Box Model Properties and Shorthand

### A. Border Shorthand
The `border` property is a shorthand for three properties: width, style, and color.
```css
border: 5px solid red;
/* Equivalent to:
   border-width: 5px;
   border-style: solid;
   border-color: red; */
```

### B. Padding & Margin Shorthand
Margins and paddings can be written in shorthand formats depending on the number of values supplied:
*   **1 Value:** Applies to all four sides (Top, Right, Bottom, Left).
    ```css
    padding: 10px; /* 10px on all sides */
    ```
*   **2 Values:** Applies `[Top/Bottom] [Left/Right]`.
    ```css
    padding: 0 2em; /* 0 top/bottom, 2em left/right */
    ```
*   **3 Values:** Applies `[Top] [Left/Right] [Bottom]`.
    ```css
    padding: 10px 20px 30px; /* 10px top, 20px left/right, 30px bottom */
    ```
*   **4 Values:** Applies clockwise `[Top] [Right] [Bottom] [Left]`.
    ```css
    padding: 5px 10px 15px 20px; /* 5px top, 10px right, 15px bottom, 20px left */
    ```

---

## 3. Display Behavior: `inline-block` vs Others
The `display` property determines how an element is laid out relative to others.

| Feature | `display: inline` | `display: block` | `display: inline-block` |
| :--- | :--- | :--- | :--- |
| **New Line?** | No (stays on same line) | Yes (starts on a new line) | No (stays on same line) |
| **Width & Height?** | Ignored (determined by content) | Respected (stretches to 100% of parent by default) | Respected |
| **Vertical Margin/Padding?** | Does not affect layout flow | Respected | Respected |

```css
span {
    display: inline-block;
    width: 200px;
    height: 200px;
    padding: 100px;
    border: 5px solid black;
    margin: 10px;
}
```
*By changing a `<span>` (which is naturally `inline`) to `inline-block`, we can apply custom width, height, margins, and paddings while keeping it inline with other text or elements.*

---

## 4. Understanding the `em` Unit
The `em` unit is relative, but **what it is relative to depends on where it is used**:

### A. When used on `font-size`
`1em` is relative to the **parent element's font-size**.
```css
article {
    font-size: 20px; /* Parent */
}
p {
    font-size: 2em; /* 2 * 20px = 40px */
}
```

### B. When used on layout properties (`margin`, `padding`, `border-radius`, etc.)
`1em` is relative to the **current element's font-size**.
```css
p {
    font-size: 2em; /* 40px */
    margin: 1em;    /* 1 * 40px = 40px margin */
}

button {
    font-size: 16px; 
    padding: 0 2em;      /* 0 top/bottom, 32px left/right */
    border-radius: 1em;  /* 16px border-radius */
}
```
This behavior makes `em` extremely useful for creating modular components (like buttons) that scale proportionally when their font size is adjusted.

---

## 5. Property Inheritance
Most box model properties (like `border`, `margin`, and `padding`) **do not inherit** by default. A child element will not automatically get its parent's border. 

However, you can force inheritance using the `inherit` value:
```css
p {
    border: inherit;  /* Forces <p> to take its parent's border style and width */
    padding: inherit; /* Forces <p> to take its parent's padding */
}
```
