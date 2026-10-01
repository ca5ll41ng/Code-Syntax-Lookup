---
id: "python-en-function-readline-write_history_file"
language: "python"
lang: "en"
category: "function"
name: "write_history_file"
signature: "write_history_file([filename])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.write_history_file"
license: "PSF"
updated: "2026-10-01"
---

# write_history_file

Save the history list to a readline history file, overwriting any
existing file.  The default filename is `~/.history`.  This calls
:c`write_history` in the underlying library and raises an
`auditing event` `open` with the file name if given and
`"~/.history"` otherwise.

> *Changed in 3.14*: The auditing event was added.
