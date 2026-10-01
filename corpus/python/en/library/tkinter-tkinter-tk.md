---
id: "python-en-function-tkinter-tk"
language: "python"
lang: "en"
category: "function"
name: "Tk"
signature: "Tk(screenName=None, baseName=None, className='Tk', useTk=True, sync=False, use=None)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Tk"
license: "PSF"
updated: "2026-10-01"
---

# Tk

Construct a toplevel Tk widget, which is usually the main window of an
application, and initialize a Tcl interpreter for this widget.  Each
instance has its own associated Tcl interpreter.
Inherits from `Misc` and `Wm`.

To create a Tcl interpreter without initializing the Tk subsystem, use the
`Tcl` factory function instead.

The `Tk` class is typically instantiated using all default values.
However, the following keyword arguments are currently recognized:

*screenName*
   When given (as a string), sets the `DISPLAY` environment
   variable. (X11 only)
*baseName*
   Name of the profile file.  By default, *baseName* is derived from the
   program name (`sys.argv[0]`).
*className*
   Name of the widget class.  Used as a profile file and also as the name
   with which Tcl is invoked (*argv0* in *interp*).
*useTk*
   If `True`, initialize the Tk subsystem.  The `tkinter.Tcl()`
   function sets this to `False`.
*sync*
   If `True`, execute all X server commands synchronously, so that errors
   are reported immediately.  Can be used for debugging. (X11 only)
*use*
   Specifies the *id* of the window in which to embed the application,
   instead of it being created as an independent toplevel window. *id* must
   be specified in the same way as the value for the -use option for
   toplevel widgets (that is, it has a form like that returned by
   `~Misc.winfo_id`).

   Note that on some platforms this will only work correctly if *id* refers
   to a Tk frame or toplevel that has its -container option enabled.

`Tk` reads and interprets profile files, named
`.{className}.tcl` and `.{baseName}.tcl`, into the Tcl
interpreter and calls `exec` on the contents of
`.{className}.py` and `.{baseName}.py`.  The path for the
profile files is the `HOME` environment variable or, if that
isn't defined, then `os.curdir`.

> **Note**
>
> On Windows, creating a Tcl interpreter (by instantiating `Tk` or
> calling `Tcl`) sets the `HOME` environment variable for
> the process, if it is not already set, to `%HOMEDRIVE%%HOMEPATH%` (or
> `USERPROFILE`, or `c:\`).  This is done by Tcl and can affect
> other code that reads `HOME`.
>

attribute:: tk

attribute:: master

attribute:: children

method:: destroy()

method:: loadtk()

method:: readprofile(baseName, className)

method:: report_callback_exception(exc, val, tb)
