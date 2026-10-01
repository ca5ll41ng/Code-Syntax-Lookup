---
id: "python-en-function-shlex-shlex-get_token"
language: "python"
lang: "en"
category: "function"
name: "shlex.get_token"
signature: "shlex.get_token()"
directive: "method"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.get_token"
license: "PSF"
updated: "2026-10-01"
---

# shlex.get_token

Return a token.  If tokens have been stacked using `push_token`, pop a
token off the stack.  Otherwise, read one from the input stream.  If reading
encounters an immediate end-of-file, `eof` is returned (the empty
string (`''`) in non-POSIX mode, and `None` in POSIX mode).
