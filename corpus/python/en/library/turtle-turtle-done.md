---
id: "python-en-function-turtle-done"
language: "python"
lang: "en"
category: "function"
name: "done"
signature: "done()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.done"
license: "PSF"
updated: "2026-10-01"
---

# done

Starts event loop - calling Tkinter's mainloop function.
Must be the last statement in a turtle graphics program.
Must *not* be used if a script is run from within IDLE in -n mode
(No subprocess) - for interactive use of turtle graphics. ::

   >>> screen.mainloop()
