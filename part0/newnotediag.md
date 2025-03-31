# Exercises 0.4: New Sequence Diagram

This is a sequence diagram illustrating the browser-server interaction:

```mermaid
sequenceDiagram
    participant browser
    participant server

    %% The browser sends a POST request to create a new note
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server

    %% The browser requests the notes from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    %% The browser requests the CSS file to style the page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    %% The browser requests the JavaScript file to handle page functionality

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Javascript file
    deactivate server

    %% The browser requests the JSON data containing the notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"Venezuela","date":"2025-03-30T19:22:09.939Z"}, ... ]

    %% The browser processes the received JSON data and displays the notes

    deactivate server
