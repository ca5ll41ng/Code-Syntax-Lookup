---
id: "python-en-function-dis-hasfree"
language: "python"
lang: "en"
category: "function"
name: "hasfree"
directive: "data"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.hasfree"
license: "PSF"
updated: "2026-10-01"
---

# hasfree

Sequence of bytecodes that access a `free (closure) variable`.
'free' in this context refers to names in the current scope that are
referenced by inner scopes or names in outer scopes that are referenced
from this scope.  It does *not* include references to global or builtin scopes.
