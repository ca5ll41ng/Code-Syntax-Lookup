---
id: "python-en-function-readline-read_init_file"
language: "python"
lang: "en"
category: "function"
name: "read_init_file"
signature: "read_init_file([filename])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.read_init_file"
license: "PSF"
updated: "2026-10-01"
---

# read_init_file

Execute a readline initialization file. The default filename is the last filename
used. This calls :c`rl_read_init_file` in the underlying library.
It raises an `auditing event` `open` with the file name
if given, and `"` otherwise, regardless of
which file the library resolves.

> *Changed in 3.14*: The auditing event was added.
