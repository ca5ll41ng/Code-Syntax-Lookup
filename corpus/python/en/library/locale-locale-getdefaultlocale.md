---
id: "python-en-function-locale-getdefaultlocale"
language: "python"
lang: "en"
category: "function"
name: "getdefaultlocale"
signature: "getdefaultlocale([envvars])"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.getdefaultlocale"
license: "PSF"
updated: "2026-10-01"
---

# getdefaultlocale

Tries to determine the default locale settings and returns them as a tuple of
the form `(language code, encoding)`.

According to POSIX, a program which has not called `setlocale(LC_ALL, '')`
runs using the portable `'C'` locale.  Calling `setlocale(LC_ALL, '')` lets
it use the default locale as defined by the `LANG` variable.  Since we
do not want to interfere with the current locale setting we thus emulate the
behavior in the way described above.

To maintain compatibility with other platforms, not only the `LANG`
variable is tested, but a list of variables given as envvars parameter.  The
first found to be defined will be used.  *envvars* defaults to the search
path used in GNU gettext; it must always contain the variable name
`'LANG'`.  The GNU gettext search path contains `'LC_ALL'`,
`'LC_CTYPE'`, `'LANG'` and `'LANGUAGE'`, in that order.

The language code has the same format as a `locale name`,
but without encoding and `@`-modifier.
The language code and encoding may be `None` if their values cannot be
determined.
The "C" locale is represented as `(None, None)`.
