---
id: "python-en-function-tkinter-text"
language: "python"
lang: "en"
category: "function"
name: "Text"
signature: "Text(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Text"
license: "PSF"
updated: "2026-10-01"
---

# Text

A `Text` widget displays and edits multi-line text.
Portions of the text may be styled with **tags**, particular positions may
be annotated with floating **marks**, and arbitrary images and other widgets
may be embedded in the text.
The widget also provides an unlimited undo/redo mechanism and supports peer
widgets that share the same underlying data.
Inherits from `Widget`, `XView` and `YView`, so the
view can be scrolled horizontally and vertically with `~XView.xview`
and `~YView.yview`.
Refer to the Tk `text` manual page for the full list of options.

Most of the methods take one or more *index* arguments that identify a
position within the text.
As described in the Tk `text` manual page, an index is a string consisting
of a base, optionally followed by one or more modifiers.
The base may be `'line.char'` (line *line*, character *char*, where lines
are counted from 1 and characters within a line from 0; `'line.end'`
refers to the newline ending the line), `'end'` (the position just after
the last newline), the name of a mark, `'tag.first'` or `'tag.last'`
(the first character tagged with *tag*, or the position just after the last
such character), the name of an embedded image or window, or `@x,y` (the
character covering pixel coordinates *x*, *y* in the widget).
A modifier such as `'+5 chars'`, `'-3 lines'`, `'linestart'`,
`'lineend'`, `'wordstart'` or `'wordend'` adjusts the index relative
to its base; several modifiers may be combined and are applied from left to
right, for example `'insert wordstart - 1 c'`.

method:: tk_print()

method:: insert(index, chars, *args)

method:: delete(index1, index2=None)

method:: replace(index1, index2, chars, *args)

method:: get(index1, index2=None)

method:: index(index)

method:: compare(index1, op, index2)

method:: count(index1, index2, *options, return_ints=False)

method:: see(index)

method:: bbox(index)

method:: dlineinfo(index)

method:: mark_set(markName, index)

method:: mark_unset(*markNames)

method:: mark_names()

method:: mark_gravity(markName, direction=None)

method:: mark_next(index)

method:: mark_previous(index)

method:: tag_add(tagName, index1, *args)

method:: tag_remove(tagName, index1, index2=None)

method:: tag_delete(*tagNames)

method:: tag_config(tagName, cnf=None, **kw)

method:: tag_configure(tagName, cnf=None, **kw)

method:: tag_cget(tagName, option)

method:: tag_names(index=None)

method:: tag_ranges(tagName)

method:: tag_nextrange(tagName, index1, index2=None)

method:: tag_prevrange(tagName, index1, index2=None)

method:: tag_raise(tagName, aboveThis=None)

method:: tag_lower(tagName, belowThis=None)

method:: tag_bind(tagName, sequence, func, add=None)

method:: tag_unbind(tagName, sequence, funcid=None)

method:: image_create(index, cnf={}, **kw)

method:: image_cget(index, option)

method:: image_configure(index, cnf=None, **kw)

method:: image_names()

method:: window_create(index, cnf={}, **kw)

method:: window_cget(index, option)

method:: window_config(index, cnf=None, **kw)

method:: window_configure(index, cnf=None, **kw)

method:: window_names()

method:: edit(*args)

method:: edit_modified(arg=None)

method:: edit_canundo()

method:: edit_canredo()

method:: edit_undo()

method:: edit_redo()

method:: edit_reset()

method:: edit_separator()

method:: search(pattern, index, stopindex=None, forwards=None, backwards=None, exact=None, regexp=None, nocase=None, count=None, elide=None, *, nolinestop=None, strictlimits=None)

method:: search_all(pattern, index, stopindex=None, *, forwards=None, backwards=None, exact=None, regexp=None, nocase=None, count=None, elide=None, nolinestop=None, overlap=None, strictlimits=None)

method:: scan_mark(x, y)

method:: scan_dragto(x, y)

method:: debug(boolean=None)

method:: dump(index1, index2=None, command=None, **kw)

method:: peer_create(newPathName, cnf={}, **kw)

method:: peer_names()

method:: sync(command=None)

method:: pendingsync()

method:: yview_pickplace(*what)
