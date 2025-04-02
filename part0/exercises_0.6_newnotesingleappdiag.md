# Exercises 0.5: New Note in Single Page App Diagram


```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Javascript file
    deactivate server    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"hey!","date":"2025-03-30T19:33:46.434Z"}, ... ]
    deactivate server

    Note right of browser: Given that the above contents are already loaded in the browser.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Rendered the new created note.  
    deactivate server

    Note right of browser: Post request was made, no reload happened to the whole page.
    Note right of browser: In response, new json file was created, and dynamically rendered the new note...
    Note right of browser: without the need to reaload the whole page.
