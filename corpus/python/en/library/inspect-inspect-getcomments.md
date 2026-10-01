---
id: "python-en-function-inspect-getcomments"
language: "python"
lang: "en"
category: "function"
name: "getcomments"
signature: "getcomments(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getcomments"
license: "PSF"
updated: "2026-10-01"
---

# getcomments

Return in a single string any lines of comments immediately preceding the
object's source code (for a class, function, or method), or at the top of the
Python source file (if the object is a module).  If the object's source code
is unavailable, return `None`.  This could happen if the object has been
defined in C or the interactive shell.
