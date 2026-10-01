---
id: "python-en-function-tkinter-canvas"
language: "python"
lang: "en"
category: "function"
name: "Canvas"
signature: "Canvas(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Canvas"
license: "PSF"
updated: "2026-10-01"
---

# Canvas

A `Canvas` widget implements structured graphics.
It displays any number of *items*, such as arcs, lines, ovals, polygons,
rectangles, text, bitmaps, images and embedded windows, which may be drawn,
moved, re-colored and bound to events.
Inherits from `Widget`, `XView` and `YView`, so the
view can be scrolled horizontally and vertically with `~XView.xview`
and `~YView.yview`.
Refer to the Tk `canvas` manual page for the full list of widget and item
options.

Each item has a unique integer *id*, assigned when it is created, and zero
or more string *tags*.
A tag is an arbitrary string that does not have the form of an integer; the
same tag may be shared by many items, which makes tags convenient for
grouping items.
The special tag `'all'` matches every item in the canvas, and
`'current'` matches the topmost item under the mouse pointer.
Most methods take a *tagOrId* argument that may be an integer id naming a
single item, or a tag naming zero or more items; as described in the Tk
`canvas` manual page, a tag may also be a logical expression of tags
combined with the operators `&&`, ``, `^`, `!` and parentheses.
When a method that operates on a single item is given a *tagOrId* matching
several items, it normally uses the lowest matching item in the display
list.

The items are kept in a *display list* that determines drawing order: items
later in the list are drawn on top of earlier ones.
A newly created item is placed at the top of the list; the order can be
changed with `tag_raise` and `tag_lower`.

method:: tk_print()

method:: create_arc(*args, **kw)

method:: coords(tagOrId)

method:: move(tagOrId, xAmount, yAmount, /)

method:: moveto(tagOrId, x='', y='')

method:: scale(tagOrId, xOrigin, yOrigin, xScale, yScale, /)

method:: rotate(tagOrId, xOrigin, yOrigin, angle, /)

method:: delete(*tagOrIds)

method:: dchars(tagOrId, first, /)

method:: insert(tagOrId, beforeThis, string, /)

method:: rchars(tagOrId, first, last, string, /)

method:: itemcget(tagOrId, option)

method:: itemconfig(tagOrId, cnf=None, **kw)

method:: itemconfigure(tagOrId, cnf=None, **kw)

method:: type(tagOrId)

method:: gettags(tagOrId, /)

method:: dtag(tagOrId, /)

method:: addtag(newtag, searchSpec, /, *args)

method:: addtag_above(newtag, tagOrId)

method:: addtag_all(newtag)

method:: addtag_below(newtag, tagOrId)

method:: addtag_closest(newtag, x, y, halo=None, start=None)

method:: addtag_enclosed(newtag, x1, y1, x2, y2)

method:: addtag_overlapping(newtag, x1, y1, x2, y2)

method:: addtag_withtag(newtag, tagOrId)

method:: find(searchSpec, /, *args)

method:: find_above(tagOrId)

method:: find_all()

method:: find_below(tagOrId)

method:: find_closest(x, y, halo=None, start=None)

method:: find_enclosed(x1, y1, x2, y2)

method:: find_overlapping(x1, y1, x2, y2)

method:: find_withtag(tagOrId)

method:: lift(tagOrId, aboveThis=None, /)

method:: tkraise(tagOrId, aboveThis=None, /)

method:: tag_raise(tagOrId, aboveThis=None, /)

method:: lower(tagOrId, belowThis=None, /)

method:: tag_lower(tagOrId, belowThis=None, /)

method:: tag_bind(tagOrId, sequence=None, func=None, add=None)

method:: tag_unbind(tagOrId, sequence, funcid=None)

method:: bbox(tagOrId, /, *tagOrIds)

method:: canvasx(screenx, gridspacing=None)

method:: canvasy(screeny, gridspacing=None)

method:: focus()

method:: icursor(tagOrId, index, /)

method:: index(tagOrId, index, /)

method:: select_adjust(tagOrId, index)

method:: select_clear()

method:: select_from(tagOrId, index)

method:: select_item()

method:: select_to(tagOrId, index)

method:: scan_mark(x, y)

method:: scan_dragto(x, y, gain=10)

method:: postscript(cnf={}, **kw)
