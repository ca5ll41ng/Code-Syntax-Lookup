---
id: "python-en-function-shlex-join"
language: "python"
lang: "en"
category: "function"
name: "join"
signature: "join(split_command)"
directive: "function"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.join"
license: "PSF"
updated: "2026-10-01"
---

# join

Concatenate the tokens of the list *split_command* and return a string.
This function is the inverse of `split`.

   >>> from shlex import join
   >>> print(join(['echo', '-n', 'Multiple words']))
   echo -n 'Multiple words'

The returned value is shell-escaped to protect against injection
vulnerabilities (see `quote`).

> *Added in 3.8*
