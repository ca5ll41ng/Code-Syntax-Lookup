---
id: "python-en-function-gettext-bindtextdomain"
language: "python"
lang: "en"
category: "function"
name: "bindtextdomain"
signature: "bindtextdomain(domain, localedir=None)"
directive: "function"
module: "gettext"
source_url: "https://docs.python.org/3/library/gettext.html#gettext.bindtextdomain"
license: "PSF"
updated: "2026-10-01"
---

# bindtextdomain

Bind the *domain* to the locale directory *localedir*.  More concretely,
`gettext` will look for binary `.mo` files for the given domain using
the path (on Unix): `{localedir}/{language}/LC_MESSAGES/{domain}.mo`, where
*language* is searched for in the environment variables `LANGUAGE`,
`LC_ALL`, `LC_MESSAGES`, and `LANG` respectively.

If *localedir* is omitted or `None`, then the current binding for *domain* is
returned. [#]_
