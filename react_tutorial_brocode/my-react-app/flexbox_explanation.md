# CSS Flexbox & React Component Layout Guide

This guide explains how CSS Flexbox works, why the cards are currently stacking vertically, and how to structure your React components to display them side-by-side in a row.

---

## 1. Understanding CSS Flexbox

Flexbox (Flexible Box Layout) is a 1-dimensional layout system. Its core rule is the **Parent-Child Relationship**:
* **Flex Container (Parent):** The element that has `display: flex;` applied to it.
* **Flex Items (Children):** The **immediate direct children** of that container.

```
+-------------------------------------------------------------+
| Flex Container (display: flex)                              |
|                                                             |
|  +-------------+  +-------------+  +-------------+          |
|  | Flex Item 1 |  | Flex Item 2 |  | Flex Item 3 |          |
|  +-------------+  +-------------+  +-------------+          |
+-------------------------------------------------------------+
```

### Core Flex Properties

1. **`display: flex;`**
   Turns an element into a flex container. Its direct children immediately become flex items.

2. **`flex-direction`**
   Determines the direction of the main axis along which the children are laid out:
   * `row` (default): Horizontal, left to right.
   * `column`: Vertical, top to bottom.

3. **`flex-wrap`**
   Controls whether children are forced onto a single line or can wrap onto multiple lines:
   * `nowrap` (default): All items will squeeze onto one line, even if they overflow.
   * `wrap`: Items will wrap onto new lines if there isn't enough horizontal space.

4. **`justify-content`**
   Aligns children along the main axis:
   * `center`: Centers the items.
   * `space-between`: Distributes items evenly (first item at start, last item at end).
   * `gap`: Sets the size of spacing between items.

---

## 2. Why the Current Code Stacks the Cards

Let's look at the DOM structure that your current code produces:

### The React Code Structure
In `App.jsx`:
```jsx
<>
  <Header />
  <Card />
  <Card />
  <Card />
  <Card />
  <Footer />
</>
```

In `Card.jsx`:
```jsx
<div className='cardContainer'>
    <div className="card"> ... </div>
</div>
```

### How the Browser Sees It (The DOM tree)
Since the React Fragment (`<>...</>`) does not create a real HTML element, the immediate children inside `#root` are:

```html
<div id="root"> <!-- Flex Container: flex-direction: column -->
  
  <header>...</header> <!-- Direct child #1 (stacks in column) -->
  
  <div class="cardContainer"> <!-- Direct child #2 (stacks in column) -->
      <div class="card">...</div>
  </div>

  <div class="cardContainer"> <!-- Direct child #3 (stacks in column) -->
      <div class="card">...</div>
  </div>

  <div class="cardContainer"> <!-- Direct child #4 (stacks in column) -->
      <div class="card">...</div>
  </div>

  <footer>...</footer> <!-- Direct child #5 (stacks in column) -->
  
</div>
```

### The Problem
1. **`#root`** has `display: flex; flex-direction: column;` in `index.css`.
2. Because of this, `#root` forces all of its direct children (`header`, each `.cardContainer`, and `footer`) to stack vertically on top of each other.
3. Defining `display: flex; flex-direction: row;` on `.cardContainer` only aligns whatever is *inside* that specific container. Since each `.cardContainer` contains only **one** card, it creates a row containing a single item, which does not help align the separate cards.

---

## 3. How to Fix It Step-by-Step

To align all cards in a single row, all the cards need to share a **single** parent container wrapper.

### Step 1: Revert `Card.jsx`
Remove the individual `cardContainer` wrapper from `Card.jsx` so it only renders the card:

```jsx
// src/Card.jsx
import './Card.css';
import profilePic from './assets/HM.jpg';

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="profile pic" id="profilePic" />
            <h2 className='cardTitle'>Hemonesh Maheshwari</h2>
            <p>I am a software engineer</p>
        </div>
    );
}

export default Card;
```

### Step 2: Wrap the Cards in `App.jsx`
Place a single wrapper div around all the card components:

```jsx
// src/App.jsx
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

function App() {
    return (
        <>
            <Header />
            <div className="cards-row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </>
    );
}

export default App;
```

### Step 3: Style the container in `Card.css`
Style `.cards-row` as a flex container with a horizontal layout:

```css
/* src/Card.css */
.cards-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Wraps elements if screen is too narrow */
    justify-content: center; /* Centers the cards horizontally */
    gap: 20px; /* Space between each card */
    padding: 20px;
}

.card {
    border: 3px solid hsl(0, 0%, 50%);
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 2px 2px hsl(249, 26%, 41%);
    width: 250px;
}
```
