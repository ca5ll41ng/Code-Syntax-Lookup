---
id: "python-en-function-readline-read_history_file"
language: "python"
lang: "en"
category: "function"
name: "read_history_file"
signature: "read_history_file([filename])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.read_history_file"
license: "PSF"
updated: "2026-10-01"
---

# read_history_file

Load a readline history file, and append it to the history list.
The default filename is `~/.history`.  This calls
:c`read_history` in the underlying library
and raises an `auditing event` `open` with the file
name if given and `"~/.history"` otherwise.

> *Changed in 3.14*: The auditing event was added.
