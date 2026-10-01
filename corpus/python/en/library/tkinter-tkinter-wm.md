---
id: "python-en-function-tkinter-wm"
language: "python"
lang: "en"
category: "function"
name: "Wm"
signature: "Wm()"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Wm"
license: "PSF"
updated: "2026-10-01"
---

# Wm

The `Wm` mixin provides access to the window manager, allowing an
application to control such things as the title, geometry and icon of a
top-level window, the way it is resized, and how it responds to window
manager protocols.
It is mixed into `Tk` and `Toplevel`, so its methods are
available on every top-level window.
Each method has two equivalent spellings: a short name and a
`wm_`-prefixed name (for example, `title` and `wm_title`).
See also `tkinter-window-manager`.

method:: wm_aspect(minNumer=None, minDenom=None, maxNumer=None, maxDenom=None)

method:: aspect(minNumer=None, minDenom=None, maxNumer=None, maxDenom=None)

method:: wm_attributes(*args, return_python_dict=False, **kwargs)

method:: attributes(*args, return_python_dict=False, **kwargs)

method:: wm_client(name=None)

method:: client(name=None)

method:: wm_colormapwindows(*wlist)

method:: colormapwindows(*wlist)

method:: wm_command(value=None)

method:: command(value=None)

method:: wm_deiconify()

method:: deiconify()

method:: wm_focusmodel(model=None)

method:: focusmodel(model=None)

method:: wm_forget(window)

method:: forget(window)

method:: wm_frame()

method:: frame()

method:: wm_geometry(newGeometry=None)

method:: geometry(newGeometry=None)

method:: wm_grid(baseWidth=None, baseHeight=None, widthInc=None, heightInc=None)

method:: grid(baseWidth=None, baseHeight=None, widthInc=None, heightInc=None)

method:: wm_group(pathName=None)

method:: group(pathName=None)

method:: wm_iconbadge(badge)

method:: iconbadge(badge)

method:: wm_iconbitmap(bitmap=None, default=None)

method:: iconbitmap(bitmap=None, default=None)

method:: wm_iconify()

method:: iconify()

method:: wm_iconmask(bitmap=None)

method:: iconmask(bitmap=None)

method:: wm_iconname(newName=None)

method:: iconname(newName=None)

method:: wm_iconphoto(default=False, *images)

method:: iconphoto(default=False, *images)

method:: wm_iconposition(x=None, y=None)

method:: iconposition(x=None, y=None)

method:: wm_iconwindow(pathName=None)

method:: iconwindow(pathName=None)

method:: wm_manage(widget)

method:: manage(widget)

method:: wm_maxsize(width=None, height=None)

method:: maxsize(width=None, height=None)

method:: wm_minsize(width=None, height=None)

method:: minsize(width=None, height=None)

method:: wm_overrideredirect(boolean=None)

method:: overrideredirect(boolean=None)

method:: wm_positionfrom(who=None)

method:: positionfrom(who=None)

method:: wm_protocol(name=None, func=None)

method:: protocol(name=None, func=None)

method:: wm_resizable(width=None, height=None)

method:: resizable(width=None, height=None)

method:: wm_sizefrom(who=None)

method:: sizefrom(who=None)

method:: wm_stackorder(relation=None, window=None)

method:: stackorder(relation=None, window=None)

method:: wm_state(newstate=None)

method:: state(newstate=None)

method:: wm_title(string=None)

method:: title(string=None)

method:: wm_transient(master=None)

method:: transient(master=None)

method:: wm_withdraw()

method:: withdraw()
