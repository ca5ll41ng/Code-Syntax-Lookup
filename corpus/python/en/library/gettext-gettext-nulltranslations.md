---
id: "python-en-function-gettext-nulltranslations"
language: "python"
lang: "en"
category: "function"
name: "NullTranslations"
signature: "NullTranslations(fp=None)"
directive: "class"
module: "gettext"
source_url: "https://docs.python.org/3/library/gettext.html#gettext.NullTranslations"
license: "PSF"
updated: "2026-10-01"
---

# NullTranslations

Takes an optional `file object` *fp*, which is ignored by the base class.
Initializes "protected" instance variables *_info* and *_charset* which are set
by derived classes, as well as *_fallback*, which is set through
`add_fallback`.  It then calls `self._parse(fp)` if *fp* is not
`None`.

method:: _parse(fp)

method:: add_fallback(fallback)

method:: gettext(message, /)

method:: ngettext(singular, plural, n, /)

method:: pgettext(context, message, /)

method:: npgettext(context, singular, plural, n, /)

method:: info()

method:: charset()

method:: install(names=None)
