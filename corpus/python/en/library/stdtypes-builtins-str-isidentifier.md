---
id: "python-en-function-builtins-str-isidentifier"
language: "python"
lang: "en"
category: "function"
name: "str.isidentifier"
signature: "str.isidentifier()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isidentifier"
license: "PSF"
updated: "2026-10-01"
---

# str.isidentifier

Return `True` if the string is a valid identifier according to the language
definition, section `identifiers`.

`keyword.iskeyword` can be used to test whether string `s` is a reserved
identifier, such as `def` and `class`.

Example:
::

   >>> from keyword import iskeyword

   >>> 'hello'.isidentifier(), iskeyword('hello')
   (True, False)
   >>> 'def'.isidentifier(), iskeyword('def')
   (True, True)
