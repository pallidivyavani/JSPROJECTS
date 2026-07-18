# Assistant Prompt Template — Create IQ Note

Use this template when asking the assistant to create a Markdown note in the `IQ_Notes` folder.

Template (copy & paste and fill placeholders):

```
Create a Markdown file in folder IQ_Notes with filename: <FILENAME>.md
Title: <TITLE>
Concept: <SHORT CONCEPT DESCRIPTION>
Example file (optional): <relative/path/to/example.js>

Requirements:
- Provide a concise explanation of the concept.
- Add a short comparison table (columns: Term, What it is, Example, Produced by / Run on).
- Include an example code block (use the provided example file if given).
- Add commands to inspect runtime bytecode (if applicable).
- Save the file in IQ_Notes and return the path.

If `<FILENAME>` is omitted, generate a safe filename from the title.
```

Example prompt (ready-to-send):

```
Create a Markdown file in folder IQ_Notes with filename: source_code_Byte_code_Binary_code_TQ.md
Title: Source code, Bytecode, Binary code — Comparison
Concept: Explain the difference between source code, bytecode, and binary code using the example from learningplaywright/Helloworld.js
Example file (optional): learningplaywright/Helloworld.js
Requirements:
- Short explanation + one table comparing the three terms (use the Helloworld.js example).
- Show commands to inspect V8 bytecode with Node.js.
- Save the file and return the saved path.
```

Notes:
- This template tells the assistant exactly what to include and where to save it.
- If you also want a quick local helper to scaffold notes from the terminal, see `create_note.js` in this folder.
