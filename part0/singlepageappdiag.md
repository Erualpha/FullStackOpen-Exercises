# Exercises 0.5: Single Page App Diagram

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

    Note right of browser: Same process of retrieving and rendering the data with the given example diagram in exerciss 0.4
    Note right of browser: The differnce is within the content of html and js file from the exercise 0.4. 
    Note right of browser: From the name itself SPA, hence it is a modern, dynamic web app.
    
