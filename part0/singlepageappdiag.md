# Exercises 0.5: New Sequence Diagram

This is a sequence diagram illustrating the browser-server interaction:

```mermaid
sequenceDiagram
    participant browser
    participant server

    %% The browser requests the notes from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    %% The browser requests the CSS file to style the page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    %% The browser requests the JavaScript file to handle page functionality

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Javascript file
    deactivate server

    %% The browser requests the JSON data containing the notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"hey!","date":"2025-03-30T19:33:46.434Z"}, ... ]

    %% The browser processes the received JSON data and displays the notes

    deactivate server
