# CSS Positioning Guide

The `position` property in CSS defines how an element is positioned in the document flow. Combined with offset properties (`top`, `bottom`, `left`, `right`), it gives you precise control over layouts.

---

## 1. Positioning Types

There are five values for the `position` property:

### A. `position: static`
*   **Default Behavior:** Every element is static by default. It follows the natural flow of the page.
*   **Offsets:** The `top`, `bottom`, `left`, and `right` properties have **no effect** on static elements.
```css
#static-box {
    position: static;
}
```

### B. `position: relative`
*   **Behavior:** The element is positioned relative to its **normal/original position** in the document flow.
*   **Document Flow:** It **still occupies its original space** in the layout. Other elements do not move to fill the gap.
*   **Offsets:** Offsets shift the element visually from where it would normally sit.
```css
#relative-box {
    position: relative;
    top: 10px;  /* Pushes the box 10px down from its normal position */
    left: 20px; /* Pushes the box 20px right from its normal position */
}
```
*Note: A relative parent is commonly used to establish a positioning boundary/context for absolute children.*

### C. `position: absolute`
*   **Behavior:** The element is positioned relative to its **nearest positioned ancestor** (any ancestor element with a position other than `static`). If no positioned ancestor exists, it is positioned relative to the initial containing block (usually `<html>`).
*   **Document Flow:** The element is **completely removed from the normal document flow**. It leaves no space in the page layout, and other elements will behave as if it doesn't exist.
```css
/* Parent element establishes the coordinate context */
#parent-container {
    position: relative;
    width: 300px;
    height: 300px;
}

/* Child element is placed relative to the parent */
#absolute-child {
    position: absolute;
    top: 50px;
    left: 110px; /* Positioned exactly 50px from top and 110px from left of #parent-container */
}
```

### D. `position: fixed`
*   **Behavior:** The element is positioned relative to the **viewport** (the browser window).
*   **Document Flow:** It is **completely removed from the normal flow** and stays fixed in the exact same place even when the page is scrolled.
```css
#fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; /* Stays pinned to the top of the screen as you scroll */
}
```

### E. `position: sticky`
*   **Behavior:** A hybrid of `relative` and `fixed`. The element behaves like `relative` until the page is scrolled to a specific threshold (e.g., `top: 0`), at which point it "sticks" and behaves like `fixed`.
*   **Container Boundary:** The sticky element is only sticky **within its parent container**. Once the parent container scrolls out of view, the sticky element scrolls out of view with it.
```css
#sticky-header {
    position: sticky;
    top: 0; /* Sticks to the top of the viewport once scrolled to */
}
```

---

## 2. Quick Reference Comparison

| Positioning Type | Positioned Relative To... | Removed from Flow? | Responds to Offsets? |
| :--- | :--- | :--- | :--- |
| **`static`** | Normal document flow | No | No |
| **`relative`** | Its own normal position | No (space is preserved) | Yes |
| **`absolute`** | Nearest positioned ancestor | Yes (no space left) | Yes |
| **`fixed`** | Viewport (screen window) | Yes (no space left) | Yes |
| **`sticky`** | Viewport scroll threshold | No (acts relative/fixed) | Yes |
