---
id: "python-en-function-tkinter-tk_version_info"
language: "python"
lang: "en"
category: "function"
name: "TK_VERSION_INFO"
directive: "data"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.TK_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# TK_VERSION_INFO

The versions of the Tcl and Tk libraries that were used for building
the `_tkinter` module, as named tuples with the same five fields
as `sys.version_info`: *major*, *minor*, *micro*, *releaselevel*
and *serial*.
*releaselevel* is `'alpha'`, `'beta'` or `'final'`.
Converting them to a string gives the version in the usual Tcl/Tk notation,
for example `'9.0.3'` for a final release or `'9.1b2'` for a
pre-release.
These may be different from the libraries actually used at runtime,
which are available as `Misc.info_patchlevel` (the Tcl version)
and the `tk_patchLevel` Tcl variable.

> *Added in next*
