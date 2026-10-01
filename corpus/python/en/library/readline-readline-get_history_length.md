---
id: "python-en-function-readline-get_history_length"
language: "python"
lang: "en"
category: "function"
name: "get_history_length"
signature: "get_history_length()"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.get_history_length"
license: "PSF"
updated: "2026-10-01"
---

# get_history_length

Set or return the desired number of lines to save in the history file.
The `write_history_file` function uses this value to truncate
the history file, by calling :c`history_truncate_file` in
the underlying library.  Negative values imply
unlimited history file size.
