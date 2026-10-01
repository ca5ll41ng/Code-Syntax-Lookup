---
id: "python-en-function-tkinter-systray-systrayicon"
language: "python"
lang: "en"
category: "function"
name: "SysTrayIcon"
signature: "SysTrayIcon(master=None, *, exists=False, **options)"
directive: "class"
module: "tkinter.systray"
source_url: "https://docs.python.org/3/library/tkinter.systray.html#tkinter.systray.SysTrayIcon"
license: "PSF"
updated: "2026-10-01"
---

# SysTrayIcon

The class implementing the system tray icon.

With *exists* false (the default), a new icon is created;
creating a second one raises `~tkinter.TclError`.
With *exists* true, the instance refers to the already-existing icon
instead of creating one, reconfiguring it with any given options.

The supported configuration options are:

* *image* --- the image displayed in the system tray
  (required when creating an icon).
  On Windows, it must be a `PhotoImage`.
* *text* --- the text displayed in the tooltip of the icon.
* *button1* --- a callback that is called without arguments
  when the icon is clicked with the left mouse button.
* *button3* --- a callback that is called without arguments
  when the icon is clicked with the right mouse button.

method:: configure(**options)

method:: cget(option)

method:: exists()

method:: destroy()

method:: notify(title, message)
