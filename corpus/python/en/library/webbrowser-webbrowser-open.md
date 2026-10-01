---
id: "python-en-function-webbrowser-open"
language: "python"
lang: "en"
category: "function"
name: "open"
signature: "open(url, new=0, autoraise=True)"
directive: "function"
module: "webbrowser"
source_url: "https://docs.python.org/3/library/webbrowser.html#webbrowser.open"
license: "PSF"
updated: "2026-10-01"
---

# open

Display *url* using the default browser. If *new* is 0, the *url* is opened
in the same browser window if possible.  If *new* is 1, a new browser window
is opened if possible.  If *new* is 2, a new browser page ("tab") is opened
if possible.  If *autoraise* is `True`, the window is raised if possible
(note that under many window managers this will occur regardless of the
setting of this variable).

Returns `True` if a browser was successfully launched, `False` otherwise.

Note that on some platforms, trying to open a filename using this function,
may work and start the operating system's associated program.  However, this
is neither supported nor portable.

audit-event:: webbrowser.open url webbrowser.open
