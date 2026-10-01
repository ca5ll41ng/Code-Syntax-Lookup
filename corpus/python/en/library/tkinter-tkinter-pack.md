---
id: "python-en-function-tkinter-pack"
language: "python"
lang: "en"
category: "function"
name: "Pack"
signature: "Pack()"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Pack"
license: "PSF"
updated: "2026-10-01"
---

# Pack

Geometry manager that arranges widgets by packing them against the sides of
their container.
The `Pack` mix-in is inherited by all widgets (through
`Widget`) and provides the methods for managing a widget with the
*pack* geometry manager.
See also `tkinter-geometry-management`.

> **Note**
>
> `Pack`, `Place` and `Grid` all define the short
> method names `forget`, `info`, `slaves`,
> `content` and `propagate`.
> On a widget the bare names resolve to the *pack* manager's versions,
> since `Pack` and `Misc` precede `Place` and
> `Grid` in the method resolution order,
> whatever manager actually manages the widget;
> and `configure`/`config` configure the widget's options,
> not its geometry.
> Use the explicit `pack_*`, `grid_*` and `place_*` methods
> (and `pack`, `grid`, `place` for geometry configuration)
> to act on a specific geometry manager.
>

method:: configure(cnf={}, **kw)

method:: config(cnf={}, **kw)

method:: pack_configure(cnf={}, **kw)

method:: forget()

method:: pack_forget()

method:: info()

method:: pack_info()

method:: propagate()

method:: pack_propagate()

method:: slaves()

method:: pack_slaves()

method:: content()

method:: pack_content()
