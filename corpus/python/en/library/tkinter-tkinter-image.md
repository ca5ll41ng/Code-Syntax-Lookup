---
id: "python-en-function-tkinter-image"
language: "python"
lang: "en"
category: "function"
name: "Image"
signature: "Image(imgtype, name=None, cnf={}, master=None, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Image"
license: "PSF"
updated: "2026-10-01"
---

# Image

Base class for Tk images.
*imgtype* is the Tk image type, one of `'photo'` or `'bitmap'`.
An image is a named object that can be displayed by widgets through their
*image* option; deleting all references to the `Image` object
deletes the underlying Tk image.
Usually you create a `PhotoImage` or `BitmapImage` rather than
an `Image` directly.

The image's configuration options are given by *cnf* and *kw* and may be
queried and changed later with the mapping protocol (using `image[key]`)
or with the `configure` method.

method:: config(**kw)

method:: configure(**kw)

method:: height()

method:: width()

method:: type()
