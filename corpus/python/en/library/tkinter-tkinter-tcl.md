---
id: "python-en-function-tkinter-tcl"
language: "python"
lang: "en"
category: "function"
name: "Tcl"
signature: "Tcl(screenName=None, baseName=None, className='Tk', useTk=False)"
directive: "function"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Tcl"
license: "PSF"
updated: "2026-10-01"
---

# Tcl

The `Tcl` function is a factory function which creates an object much
like that created by the `Tk` class, except that it does not
initialize the Tk subsystem.
This is most often useful when driving the Tcl interpreter in an environment
where one doesn't want to create extraneous toplevel windows, or where one
cannot (such as Unix/Linux systems without an X server).
An object created by the `Tcl` object can have a Toplevel window
created (and the Tk subsystem initialized) by calling its `~Tk.loadtk`
method.
