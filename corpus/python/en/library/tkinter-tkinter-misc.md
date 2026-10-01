---
id: "python-en-function-tkinter-misc"
language: "python"
lang: "en"
category: "function"
name: "Misc"
signature: "Misc()"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Misc"
license: "PSF"
updated: "2026-10-01"
---

# Misc

The `Misc` class is a mix-in inherited by `Tk` and, through
`BaseWidget`, by every widget.
It provides the large set of methods common to all Tk objects: querying
window information, managing event bindings and the event loop, controlling
the keyboard focus and pointer grabs, accessing the selection, clipboard and
option database, and assorted utility and introspection services.
Because they are inherited, these methods are available on every widget and
on the `Tk` application object, and are documented here once rather
than repeated for each widget.

method:: cget(key)

method:: config(cnf=None, **kw)

method:: configure(cnf=None, **kw)

method:: keys()

method:: getboolean(s)

method:: getdouble(s)

method:: getint(s)

method:: getvar(name)

method:: setvar(name, value)

method:: register(func, subst=None, needcleanup=1)

method:: deletecommand(name)

method:: nametowidget(name)

method:: send(interp, cmd, *args)

method:: destroy()

method:: lift(aboveThis=None)

method:: tkraise(aboveThis=None)

method:: lower(belowThis=None)

method:: image_names()

method:: image_types()

method:: anchor(anchor=None)

method:: grid_anchor(anchor=None)

method:: bbox(column=None, row=None, col2=None, row2=None)

method:: grid_bbox(column=None, row=None, col2=None, row2=None)

method:: columnconfigure(index, cnf={}, **kw)

method:: grid_columnconfigure(index, cnf={}, **kw)

method:: rowconfigure(index, cnf={}, **kw)

method:: grid_rowconfigure(index, cnf={}, **kw)

method:: grid_location(x, y)

method:: grid_propagate()

method:: size()

method:: grid_size()

method:: grid_slaves(row=None, column=None)

method:: grid_content(row=None, column=None)

method:: propagate()

method:: pack_propagate()

method:: slaves()

method:: pack_slaves()

method:: content()

method:: pack_content()

method:: place_slaves()

method:: place_content()

The methods with the `bind` and `unbind` prefixes associate event
patterns with callbacks and remove those associations.

method:: bind(sequence=None, func=None, add=None)

method:: bind_class(className, sequence=None, func=None, add=None)

method:: bind_all(sequence=None, func=None, add=None)

method:: unbind(sequence, funcid=None)

method:: unbind_class(className, sequence)

method:: unbind_all(sequence)

method:: bindtags(tagList=None)

The methods with the `event_` prefix define virtual events and generate
events programmatically.

method:: event_add(virtual, *sequences)

method:: event_delete(virtual, *sequences)

method:: event_generate(sequence, **kw)

method:: event_info(virtual=None)

The methods with the `after` prefix schedule callbacks to run after a
delay or when the application is idle.

method:: after(ms, func=None, *args, **kw)

method:: after_cancel(id)

method:: after_idle(func, *args, **kw)

method:: after_info(id=None)

method:: mainloop(n=0)

method:: quit()

method:: update()

method:: update_idletasks()

method:: waitvar(name)

method:: wait_variable(name)

method:: wait_window(window=None)

method:: wait_visibility(window=None)

The methods with the `focus_` prefix manage the keyboard focus.

method:: focus_set()

method:: focus()

method:: focus_force()

method:: focus_get()

method:: focus_displayof()

method:: focus_lastfor()

method:: tk_focusFollowsMouse()

method:: tk_focusNext()

method:: tk_focusPrev()

The methods with the `grab_` prefix set and query the input grab, which
directs all input events to a single widget.

method:: grab_set()

method:: grab_set_global()

method:: grab_release()

method:: grab_current()

method:: grab_status()

The methods with the `selection_` prefix retrieve and manage the X
selection.

method:: selection_clear(**kw)

method:: selection_get(**kw)

method:: selection_handle(command, **kw)

method:: selection_own(**kw)

method:: selection_own_get(**kw)

The methods with the `clipboard_` prefix manage the clipboard.

method:: clipboard_append(string, **kw)

method:: clipboard_clear(**kw)

method:: clipboard_get(**kw)

The methods with the `option_` prefix query and modify the Tk option
database.

method:: option_add(pattern, value, priority=None)

method:: option_clear()

method:: option_get(name, className)

method:: option_readfile(fileName, priority=None)

method:: bell(displayof=0)

method:: tk_setPalette(background, /)

method:: tk_bisque()

method:: tk_strictMotif(boolean=None)

method:: tk_appname(name=None)

method:: tk_useinputmethods(boolean=None, *, displayof=0)

method:: tk_caret(*, x=None, y=None, height=None)

method:: tk_scaling(number=None, *, displayof=0)

method:: tk_inactive(reset=False, *, displayof=0)

The methods with the `busy_` prefix manage the busy state of a window,
which shows a busy cursor and ignores user input.

method:: busy(**kw)

method:: busy_hold(**kw)

method:: tk_busy(**kw)

method:: tk_busy_hold(**kw)

method:: busy_configure(cnf=None, **kw)

method:: busy_config(cnf=None, **kw)

method:: tk_busy_config(cnf=None, **kw)

method:: tk_busy_configure(cnf=None, **kw)

method:: busy_cget(option)

method:: tk_busy_cget(option)

method:: busy_forget()

method:: tk_busy_forget()

method:: busy_status()

method:: tk_busy_status()

method:: busy_current(pattern=None)

method:: tk_busy_current(pattern=None)

The methods with the `winfo_` prefix retrieve information about windows
managed by Tk.

method:: winfo_atom(name, displayof=0)

method:: winfo_atomname(id, displayof=0)

method:: winfo_cells()

method:: winfo_children()

method:: winfo_class()

method:: winfo_colormapfull()

method:: winfo_containing(rootX, rootY, displayof=0)

method:: winfo_depth()

method:: winfo_exists()

method:: winfo_fpixels(number)

method:: winfo_geometry()

method:: winfo_height()

method:: winfo_id()

method:: winfo_interps(displayof=0)

method:: winfo_isdark()

method:: winfo_ismapped()

method:: winfo_manager()

method:: winfo_name()

method:: winfo_parent()

method:: winfo_pathname(id, displayof=0)

method:: winfo_pixels(number)

method:: winfo_pointerx()

method:: winfo_pointerxy()

method:: winfo_pointery()

method:: winfo_reqheight()

method:: winfo_reqwidth()

method:: winfo_rgb(color)

method:: winfo_rootx()

method:: winfo_rooty()

method:: winfo_screen()

method:: winfo_screencells()

method:: winfo_screendepth()

method:: winfo_screenheight()

method:: winfo_screenmmheight()

method:: winfo_screenmmwidth()

method:: winfo_screenvisual()

method:: winfo_screenwidth()

method:: winfo_server()

method:: winfo_toplevel()

method:: winfo_viewable()

method:: winfo_visual()

method:: winfo_visualid()

method:: winfo_visualsavailable(includeids=False)

method:: winfo_vrootheight()

method:: winfo_vrootwidth()

method:: winfo_vrootx()

method:: winfo_vrooty()

method:: winfo_width()

method:: winfo_x()

method:: winfo_y()

method:: info_patchlevel()
