---
id: "python-en-function-tkinter-photoimage"
language: "python"
lang: "en"
category: "function"
name: "PhotoImage"
signature: "PhotoImage(name=None, cnf={}, master=None, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.PhotoImage"
license: "PSF"
updated: "2026-10-01"
---

# PhotoImage

A full-color image (the Tk `photo` image type), stored internally with a
varying degree of transparency per pixel.
It can read and write GIF, PPM/PGM and (in Tk 8.6 and later) PNG files, read
SVG files (in Tk 9.0 and later), and be drawn in widgets.
Inherits from `Image`.

The configuration options include *data* (the image contents as a string),
*file* (the name of a file to read the contents from), *format* (the name of
the file format handler), *width* and *height* (the size of the image, used
when building it up piece by piece), *gamma* and *palette*.

method:: blank()

method:: redither()

method:: cget(option)

method:: copy(*, from_coords=None, zoom=None, subsample=None)

method:: copy_replace(sourceImage, *, from_coords=None, to=None, \

method:: data(format=None, *, from_coords=None, background=None, \

method:: get(x, y, *, withalpha=False)

method:: put(data, to=None, *, format=None, metadata=None)

method:: read(filename, format=None, *, from_coords=None, to=None, \

method:: subsample(x, y='', *, from_coords=None)

method:: transparency_get(x, y)

method:: transparency_set(x, y, boolean)

method:: write(filename, format=None, from_coords=None, *, \

method:: zoom(x, y='', *, from_coords=None)
