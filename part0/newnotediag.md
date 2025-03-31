# Exercises 0.4: New Note Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

     Note right of browser: The browser sends a POST request to create a new note.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: The request causes the page to reload and return an empty html file new_note,
    Note right of browser:which indicates that this is a traditional multi-page appliction.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Javascript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"Venezuela","date":"2025-03-30T19:22:09.939Z"}, ... ]
    deactivate server

    Note right of browser: The browser processes the received JSON data and displays the notes
    
