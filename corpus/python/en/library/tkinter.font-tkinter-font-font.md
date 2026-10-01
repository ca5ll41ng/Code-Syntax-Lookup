---
id: "python-en-function-tkinter-font-font"
language: "python"
lang: "en"
category: "function"
name: "Font"
signature: "Font(root=None, font=None, name=None, exists=False, **options)"
directive: "class"
module: "tkinter.font"
source_url: "https://docs.python.org/3/library/tkinter.font.html#tkinter.font.Font"
license: "PSF"
updated: "2026-10-01"
---

# Font

The `Font` class represents a font used by Tk widgets.
It either creates a new *named font* or refers to an existing font.
A named font is Tk's way of identifying a font as a single object that can
be referred to by name and reconfigured in place,
rather than respecifying its attributes at each use.

With *exists* false (the default), a new named font is created.
Its attributes are taken from the font description *font* if it is given,
overridden by any keyword *options*.
The new font is named *name*, or a generated unique name if *name* is
omitted.

With *exists* true, an existing font is referred to instead of being
created.
If *name* is given, it is the name of the font,
which is reconfigured by *font* and *options* if either is given.
If *name* is omitted, the font description *font* is wrapped as is,
without creating a named font,
so that it is used without loss of precision by `actual`,
`measure` and `metrics`.
In this case no keyword options are accepted,
and the `name` attribute is the description itself rather than a
string.

The font description *font* is a tuple of the family name, the size and
zero or more styles,
or any other form accepted by Tk, such as the name of a named font.

The keyword *options* are:

    *family* - font family, for example, Courier, Times
    *size* - font size
        If *size* is positive it is interpreted as size in points.
        If *size* is a negative number its absolute value is treated
        as size in pixels.
    *weight* - font emphasis (NORMAL, BOLD)
    *slant* - ROMAN, ITALIC
    *underline* - font underlining (0 - none, 1 - underline)
   | *overstrike* - font strikeout (0 - none, 1 - strikeout)

> *Changed in 3.10*: Two fonts now compare equal (``==``) only when both are :class:`Font` instances with the same name belonging to the same Tcl interpreter.

> *Changed in next*: A font description can now be wrapped without creating a new named font, and keyword options now override the attributes of the specified *font*.

method:: actual(option=None, displayof=None)

method:: cget(option)

method:: config(**options)

method:: configure(**options)

method:: copy()

method:: measure(text, displayof=None)

method:: metrics(*options, **kw)
