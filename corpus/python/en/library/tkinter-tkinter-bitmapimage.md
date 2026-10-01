---
id: "python-en-function-tkinter-bitmapimage"
language: "python"
lang: "en"
category: "function"
name: "BitmapImage"
signature: "BitmapImage(name=None, cnf={}, master=None, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.BitmapImage"
license: "PSF"
updated: "2026-10-01"
---

# BitmapImage

A two-color image (the Tk `bitmap` image type) created from an X11 bitmap.
Each pixel displays a foreground color, a background color, or nothing
(producing a transparent effect).
Inherits from `Image`.

The configuration options are *data* or *file* (the source bitmap, given as
a string in X11 bitmap format or as the name of a file in that format),
*maskdata* or *maskfile* (the mask bitmap, in the same forms), and
*foreground* and *background* (the two colors).
For pixels where the mask is zero the image displays nothing; for other
pixels it displays the foreground color where the source is one and the
background color where the source is zero.
If *background* is set to an empty string, the background pixels are
transparent.

`BitmapImage` has no methods of its own beyond those inherited from
`Image`.
