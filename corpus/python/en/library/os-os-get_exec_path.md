---
id: "python-en-function-os-get_exec_path"
language: "python"
lang: "en"
category: "function"
name: "get_exec_path"
signature: "get_exec_path(env=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.get_exec_path"
license: "PSF"
updated: "2026-10-01"
---

# get_exec_path

Returns the list of directories that will be searched for a named
executable, similar to a shell, when launching a process.
*env*, when specified, should be an environment variable dictionary
to lookup the PATH in.
By default, when *env* is `None`, `environ` is used.

> *Added in 3.2*
