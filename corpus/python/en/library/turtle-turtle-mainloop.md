---
id: "python-en-function-turtle-mainloop"
language: "python"
lang: "en"
category: "function"
name: "mainloop"
signature: "mainloop()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.mainloop"
license: "PSF"
updated: "2026-10-01"
---

# mainloop

Starts event loop - calling Tkinter's mainloop function.
Must be the last statement in a turtle graphics program.
Must *not* be used if a script is run from within IDLE in -n mode
(No subprocess) - for interactive use of turtle graphics. ::

   >>> screen.mainloop()
