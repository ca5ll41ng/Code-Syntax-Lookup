---
id: "python-en-function-os-get_terminal_size"
language: "python"
lang: "en"
category: "function"
name: "get_terminal_size"
signature: "get_terminal_size(fd=STDOUT_FILENO, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.get_terminal_size"
license: "PSF"
updated: "2026-10-01"
---

# get_terminal_size

Return the size of the terminal window as `(columns, lines)`,
tuple of type `terminal_size`.

The optional argument `fd` (default `STDOUT_FILENO`, or standard
output) specifies which file descriptor should be queried.

If the file descriptor is not connected to a terminal, an `OSError`
is raised.

`shutil.get_terminal_size` is the high-level function which
should normally be used, `os.get_terminal_size` is the low-level
implementation.

availability:: Unix, Windows.
