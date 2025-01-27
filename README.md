# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` function: not properly unsubscribing from the listener.  Failure to unsubscribe can result in memory leaks and unexpected behavior, especially in React components.

## Problem

The provided `bug.js` file shows a typical implementation where the `onAuthStateChanged` listener is attached, but lacks proper cleanup.  This means the listener remains active even after the component is unmounted or the user navigates away, leading to potential issues.

## Solution

The solution (`bugSolution.js`) addresses this by using a cleanup function to unsubscribe from the listener. This ensures that resources are released when they are no longer needed, preventing memory leaks and improving application stability. 

## How to reproduce

1. Clone this repository
2. Install dependencies
3. Run the provided code (in a suitable environment for Firebase)
4. Observe the console output for listener changes before and after unmounting/navigating away (simulated).

## How to fix

Always ensure that you unsubscribe from Firebase listeners using the returned unsubscribe function when your component or relevant process unmounts or finishes. This crucial step is often overlooked.