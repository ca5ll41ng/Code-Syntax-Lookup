---
id: "python-en-function-turtle-numinput"
language: "python"
lang: "en"
category: "function"
name: "numinput"
signature: "numinput(title, prompt, default=None, minval=None, maxval=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.numinput"
license: "PSF"
updated: "2026-10-01"
---

# numinput

:param title: string
:param prompt: string
:param default: number (optional)
:param minval: number (optional)
:param maxval: number (optional)

Pop up a dialog window for input of a number. title is the title of the
dialog window, prompt is a text mostly describing what numerical information
to input. default: default value, minval: minimum value for input,
maxval: maximum value for input.
The number input must be in the range minval .. maxval if these are
given. If not, a hint is issued and the dialog remains open for
correction.
Return the number input. If the dialog is canceled,  return `None`. ::

   >>> screen.numinput("Poker", "Your stakes:", 1000, minval=10, maxval=10000)
