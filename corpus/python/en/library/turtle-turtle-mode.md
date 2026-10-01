---
id: "python-en-function-turtle-mode"
language: "python"
lang: "en"
category: "function"
name: "mode"
signature: "mode(mode=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.mode"
license: "PSF"
updated: "2026-10-01"
---

# mode

:param mode: one of the strings "standard", "logo" or "world"

Set turtle mode ("standard", "logo" or "world") and perform reset.  If mode
is not given, current mode is returned.

Mode "standard" is compatible with old `turtle`.  Mode "logo" is
compatible with most Logo turtle graphics.  Mode "world" uses user-defined
"world coordinates". **Attention**: in this mode angles appear distorted if
`x/y` unit-ratio doesn't equal 1.

============ ========================= ===================
    Mode      Initial turtle heading     positive angles
============ ========================= ===================
 "standard"    to the right (east)       counterclockwise
   "logo"        upward    (north)         clockwise
============ ========================= ===================

```python
:skipif: _tkinter is None

>>> mode("logo")   # resets turtle heading to north
>>> mode()
'logo'
```
