---
id: "python-en-function-sqlite3-complete_statement"
language: "python"
lang: "en"
category: "function"
name: "complete_statement"
signature: "complete_statement(statement)"
directive: "function"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.complete_statement"
license: "PSF"
updated: "2026-10-01"
---

# complete_statement

Return `True` if the string *statement* appears to contain
one or more complete SQL statements.
No syntactic verification or parsing of any kind is performed,
other than checking that there are no unclosed string literals
and the statement is terminated by a semicolon.

For example:

```python

>>> sqlite3.complete_statement("SELECT foo FROM bar;")
True
>>> sqlite3.complete_statement("SELECT foo")
False
```

This function may be useful during command-line input
to determine if the entered text seems to form a complete SQL statement,
or if additional input is needed before calling `~Cursor.execute`.

See `runsource` in `Lib/sqlite3/__main__.py`
for real-world use.
