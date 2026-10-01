---
id: "python-en-function-curses-typeahead"
language: "python"
lang: "en"
category: "function"
name: "typeahead"
signature: "typeahead(fd)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.typeahead"
license: "PSF"
updated: "2026-10-01"
---

# typeahead

Specify that the file descriptor *fd* be used for typeahead checking.  If *fd*
is `-1`, then no typeahead checking is done.

The curses library does "line-breakout optimization" by looking for typeahead
periodically while updating the screen.  If input is found, and it is coming
from a tty, the current update is postponed until `~window.refresh` or
`doupdate` is called again, allowing faster response to commands typed
in advance. This function allows specifying a different file descriptor for
typeahead checking.
