---
id: "python-en-function-tkinter-listbox"
language: "python"
lang: "en"
category: "function"
name: "Listbox"
signature: "Listbox(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Listbox"
license: "PSF"
updated: "2026-10-01"
---

# Listbox

A `Listbox` widget displays a list of single-line text items, one
per line, of which the user can select one or more.
The way the selection behaves is governed by the *selectmode* option, which
is one of `browse` (the default; at most one item, which may be dragged
with the mouse), `single` (at most one item), `multiple` (any number of
items, toggled individually), or `extended` (any number of items,
including discontiguous ranges, selected by clicking and dragging).
Inherits from `Widget`, `XView` and `YView`, so the
view can be scrolled horizontally and vertically with `~XView.xview`
and `~YView.yview`.
Refer to the Tk `listbox` manual page for the full list of options.

Many of the methods take an *index* argument identifying a particular item.
As described in the Tk `listbox` manual page, *index* may be a numeric
index (counting from 0 at the top), `'active'` (the item with the location
cursor, set with `activate`), `'anchor'` (the selection anchor, set
with `selection_anchor`), `'end'` (the last item, or for
`index` and `insert` the position just after it), or `@x,y`
(the item covering pixel coordinates *x*, *y* in the listbox window).
Arguments named *first* and *last* are indices of the same forms.

method:: insert(index, *elements)

method:: delete(first, last=None)

method:: get(first, last=None)

method:: size()

method:: index(index)

method:: bbox(index)

method:: nearest(y)

method:: see(index)

method:: activate(index)

method:: curselection()

method:: select_anchor(index)

method:: selection_anchor(index)

method:: select_clear(first, last=None)

method:: selection_clear(first, last=None)

method:: select_includes(index)

method:: selection_includes(index)

method:: select_set(first, last=None)

method:: selection_set(first, last=None)

method:: itemcget(index, option)

method:: itemconfig(index, cnf=None, **kw)

method:: itemconfigure(index, cnf=None, **kw)

method:: scan_mark(x, y)

method:: scan_dragto(x, y)
