---
id: "python-en-function-gettext-ngettext"
language: "python"
lang: "en"
category: "function"
name: "ngettext"
signature: "ngettext(singular, plural, n, /)"
directive: "function"
module: "gettext"
source_url: "https://docs.python.org/3/library/gettext.html#gettext.ngettext"
license: "PSF"
updated: "2026-10-01"
---

# ngettext

Like `.gettext`, but consider plural forms. If a translation is found,
apply the plural formula to *n*, and return the resulting message (some
languages have more than two plural forms). If no translation is found, return
*singular* if *n* is 1; return *plural* otherwise.

The Plural formula is taken from the catalog header. It is a C or Python
expression that has a free variable *n*; the expression evaluates to the index
of the plural in the catalog. See
[the GNU gettext documentation](https://www.gnu.org/software/gettext/manual/gettext.html)
for the precise syntax to be used in `.po` files and the
formulas for a variety of languages.
