---
id: "python-en-function-locale-setlocale"
language: "python"
lang: "en"
category: "function"
name: "setlocale"
signature: "setlocale(category, locale=None)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.setlocale"
license: "PSF"
updated: "2026-10-01"
---

# setlocale

If *locale* is given and not `None`, `setlocale` modifies the locale
setting for the *category*. The available categories are listed in the data
description below. *locale* may be a `string`, or a pair,
language code and encoding. An empty string specifies the user's
default settings. If the modification of the locale fails, the exception
`Error` is raised. If successful, the new locale setting is returned.

If *locale* is a pair, it is converted to a locale name using
the locale aliasing engine.
The language code has the same format as a `locale name`,
but without encoding.
The language code and encoding can be `None`.

If *locale* is omitted or `None`, the current setting for *category* is
returned.

Example::

   >>> import locale
   >>> loc = locale.setlocale(locale.LC_ALL)  # get current locale
   # use German locale; name and availability varies with platform
   >>> locale.setlocale(locale.LC_ALL, 'de_DE.UTF-8')
   >>> locale.strcoll('f\xe4n', 'foo')  # compare a string containing an umlaut
   >>> locale.setlocale(locale.LC_ALL, '')   # use user's preferred locale
   >>> locale.setlocale(locale.LC_ALL, 'C')  # use default (C) locale
   >>> locale.setlocale(locale.LC_ALL, loc)  # restore saved locale

`setlocale` is not thread-safe on most systems. Applications typically
start with a call of::

   import locale
   locale.setlocale(locale.LC_ALL, '')

This sets the locale for all categories to the user's default setting (typically
specified in the `LANG` environment variable).  If the locale is not
changed thereafter, using multithreading should not cause problems.

> *Changed in 3.15*: Support language codes with ``@``-modifiers.
