import { useState } from "react"

import Counting from "./Counting";


function Card() {

  const [cards, setCard] = useState(['A', 'B', 'C']) ;

  function handleCardIncrement() {
    setCard(['D', ...cards]) ;
  }

  return (
    <>
      <button onClick={handleCardIncrement}>Card Increment</button>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap'}}>
        {
          cards.map((card) => <Counting key={card} card={card}/>)
        }
      </div>
      
    </>
  )
}


export default Card ;


/*
🔹 1. What is Reconciliation?

👉 Reconciliation = process React uses to update the DOM efficiently

When state/props change → React creates a new Virtual DOM
Compares it with previous Virtual DOM
Updates only the changed parts
✅ Example
<h1>Hello</h1>

Changes to:

<h1>Hello Brijesh</h1>

👉 React updates only text, not whole <h1>

🔥 2. Diffing Algorithm

👉 React uses a diffing algorithm to compare old vs new Virtual DOM

🔹 Key Rules (VERY IMPORTANT)
1. Different element types → Replace whole node
<div>Hello</div>

➡️

<p>Hello</p>

👉 React destroys <div> and creates <p> ❌ reuse not possible

2. Same element type → Update only changed attributes
<h1 className="red">Hello</h1>

➡️

<h1 className="blue">Hello</h1>

👉 Only className updated ✅

3. Lists → Use Keys
{items.map(item => <li key={item.id}>{item.name}</li>)}

👉 Keys help React:

Identify which item changed
Avoid unnecessary re-renders
❌ Without keys:
React re-renders everything
Performance issue
🔥 3. What is Fiber?

👉 Fiber = new React architecture (React 16+)

It improves:

Performance
Rendering control
🔹 Why Fiber was introduced?

Old React:

Rendering was blocking ❌
Big UI → UI freeze
🔹 Fiber solves this:

👉 Breaks work into small units (fibers)

Can pause work
Can resume later
Can prioritize tasks
🔥 Example

👉 User typing vs heavy UI update

Fiber:

Prioritizes typing (high priority)
Delays heavy rendering
🔹 4. Key Concepts of Fiber
✅ Incremental Rendering
Work split into chunks
✅ Scheduling
Decide which update first
✅ Prioritization
Important tasks first
🔥 5. How It All Works Together
State changes
New Virtual DOM created
Diffing compares old vs new
Fiber schedules updates
Only necessary DOM updates happen
🔥 6. Real Example
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

👉 When count changes:

New Virtual DOM created
Diffing finds only <h1> text changed
Fiber schedules update
DOM updates efficiently
🔥 7. Interview One-Liner

👉 Reconciliation is the process of updating the DOM by comparing Virtual DOMs using a diffing algorithm, and Fiber is the internal engine that optimizes and schedules these updates efficiently.

🔥 8. Common Interview Questions
❓ Why keys are important?

👉 Help React identify elements efficiently

❓ What happens if no keys?

👉 Re-render entire list

❓ Fiber vs old React?

👉 Fiber allows:

Async rendering
Better performance
🔥 Final Quick Summary
Reconciliation → process
Diffing → comparison algorithm
Fiber → engine behind scheduling

If you want next:
👉 Virtual DOM deep explanation (with diagrams)
👉 OR React rendering lifecycle (very important)
*/