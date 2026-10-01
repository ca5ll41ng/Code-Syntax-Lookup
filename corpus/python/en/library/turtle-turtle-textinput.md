---
id: "python-en-function-turtle-textinput"
language: "python"
lang: "en"
category: "function"
name: "textinput"
signature: "textinput(title, prompt)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.textinput"
license: "PSF"
updated: "2026-10-01"
---

# textinput

:param title: string
:param prompt: string

Pop up a dialog window for input of a string. Parameter title is
the title of the dialog window, prompt is a text mostly describing
what information to input.
Return the string input. If the dialog is canceled, return `None`. ::

   >>> screen.textinput("NIM", "Name of first player:")
