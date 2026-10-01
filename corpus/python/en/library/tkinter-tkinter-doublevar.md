---
id: "python-en-function-tkinter-doublevar"
language: "python"
lang: "en"
category: "function"
name: "DoubleVar"
signature: "DoubleVar(master=None, value=None, name=None)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.DoubleVar"
license: "PSF"
updated: "2026-10-01"
---

# DoubleVar

A `Variable` subclass that holds a float.
The default value is `0.0`.

method:: get()

.. _tkinter-numeric-locale:

> **Note**
>
> A floating-point value is always parsed with a period (`.`) as the
> decimal separator, but `Spinbox`, `Scale` and
> `ttk.Spinbox` format it according to the
> `LC_NUMERIC` locale.  Under a locale that uses a comma they produce a
> value that `get` cannot read, raising `TclError`.  Set
> `LC_NUMERIC` to a locale that uses a period (such as `'C'`) to avoid
> this.
>
