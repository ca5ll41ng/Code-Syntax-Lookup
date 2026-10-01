---
id: "python-en-function-gettext-translation"
language: "python"
lang: "en"
category: "function"
name: "translation"
signature: "translation(domain, localedir=None, languages=None, class_=None, fallback=False)"
directive: "function"
module: "gettext"
source_url: "https://docs.python.org/3/library/gettext.html#gettext.translation"
license: "PSF"
updated: "2026-10-01"
---

# translation

Return a `*Translations` instance based on the *domain*, *localedir*,
and *languages*, which are first passed to `find` to get a list of the
associated `.mo` file paths.  Instances with identical `.mo` file
names are cached.  The actual class instantiated is *class_* if
provided, otherwise `GNUTranslations`.  The class's constructor must
take a single `file object` argument.

If multiple files are found, later files are used as fallbacks for earlier ones.
To allow setting the fallback, `copy.copy` is used to clone each
translation object from the cache; the actual instance data is still shared with
the cache.

If no `.mo` file is found, this function raises `OSError` if
*fallback* is false (which is the default), and returns a
`NullTranslations` instance if *fallback* is true.

> *Changed in 3.3*: :exc:`IOError` used to be raised, it is now an alias of :exc:`OSError`.

> *Changed in 3.11*: *codeset* parameter is removed.
