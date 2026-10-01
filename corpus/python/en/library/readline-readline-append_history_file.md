---
id: "python-en-function-readline-append_history_file"
language: "python"
lang: "en"
category: "function"
name: "append_history_file"
signature: "append_history_file(nelements[, filename])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.append_history_file"
license: "PSF"
updated: "2026-10-01"
---

# append_history_file

Append the last *nelements* items of history to a file.  The default filename is
`~/.history`.  The file must already exist.  This calls
:c`append_history` in the underlying library.  This function
only exists if Python was compiled for a version of the library
that supports it. It raises an `auditing event` `open`
with the file name if given and `"~/.history"` otherwise.

> *Added in 3.5*

> *Changed in 3.14*: The auditing event was added.
