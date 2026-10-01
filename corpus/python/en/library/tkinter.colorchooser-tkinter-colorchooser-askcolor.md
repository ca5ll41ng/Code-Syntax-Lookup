---
id: "python-en-function-tkinter-colorchooser-askcolor"
language: "python"
lang: "en"
category: "function"
name: "askcolor"
signature: "askcolor(color=None, **options)"
directive: "function"
module: "tkinter.colorchooser"
source_url: "https://docs.python.org/3/library/tkinter.colorchooser.html#tkinter.colorchooser.askcolor"
license: "PSF"
updated: "2026-10-01"
---

# askcolor

Show a modal color-choosing dialog and return the chosen color.
*color* is the color selected when the dialog opens.
The return value is a tuple `((r, g, b), hexstr)`, where `r`, `g` and
`b` are the red, green and blue components as integers in the range 0–255
and *hexstr* is the equivalent Tk color string, such as `'#ff8000'`.
If the user cancels the dialog, `(None, None)` is returned.

> *Changed in 3.10*: The RGB values in the returned color are now integers in the range 0–255 instead of floats.
