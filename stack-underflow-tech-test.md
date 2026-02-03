# Stack Underflow -- Frontend React Native Technical Test

Stack Underflow is a lightweight, frontend-only Q&A web application
inspired by Stack Overflow.

The app allows users to log in, browse questions, post new questions,
update their own content, and participate in discussions through
comments --- all within a single-page application. There is no backend;
all data is managed in memory.

## Functional Requirements

### 1. Login (Mocked)

-   Implement a simple login flow
-   User can enter any username and password
-   Logged-in state remains active until the page is refreshed
-   No real authentication or backend integration required

### 2. Questions (Posts)

Display a list of questions.

Each question includes: - Title - Description - Status (open, answered,
closed) - Created date/time

Users can: - Create a new question - Edit questions they created -
Change the status of their own questions

Initial questions should be pre-populated in memory on initial load.

### 3. Comments

Each question supports multiple comments.

Users can: - Add a comment - Edit their own comments

Comments should update the UI immediately without page reload.

### 4. Navigation & UI

-   Single Page Application
-   At minimum:
    -   Question list view
    -   Question detail view
-   Basic styling is sufficient
-   UI framework and styling approach are up to you

## Technical Constraints

-   Any frontend framework or library is allowed
-   TypeScript is optional but encouraged
-   AI tools are allowed; however, you must be able to clearly explain
    your implementation and decisions if asked during the interview.

## Project Guidelines

-   Code should be readable and easy to understand
-   Clear component structure
-   Reasonable separation of concerns
-   Sensible folder organization

## Deliverables

-   Source code repository (GitHub URL) with two commits:
    -   An initial commit after project setup
    -   A final commit after completing the implementation
-   README containing:
    -   Setup instructions
    -   Short explanation of your approach
    -   Any assumptions or known limitations

## Time Expectation

-   Approximately 4--8 hours
