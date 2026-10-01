---
id: "python-en-function-typing-text"
language: "python"
lang: "en"
category: "function"
name: "Text"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Text"
license: "PSF"
updated: "2026-10-01"
---

# Text

Deprecated alias for `str`.

`Text` is provided to supply a forward
compatible path for Python 2 code: in Python 2, `Text` is an alias for
`unicode`.

Use `Text` to indicate that a value must contain a unicode string in
a manner that is compatible with both Python 2 and Python 3::

    def add_unicode_checkmark(text: Text) -> Text:
        return text + u' \u2713'

> *Added in 3.5.2*

> *Deprecated since 3.11*: Python 2 is no longer supported, and most type checkers also no longer support type checking Python 2 code. Removal of the alias is not currently planned, but users are encouraged to use :class:`str` instead of ``Text``.
