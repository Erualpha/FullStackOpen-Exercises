# Example Mermaid Diagram

This is a simple flowchart:

```mermaid
graph TD;
  A[Start] --> B{Is it working?};
  B -- Yes --> C[Continue];
  B -- No --> D[Fix it];
  C --> E[End];
  D --> B;
