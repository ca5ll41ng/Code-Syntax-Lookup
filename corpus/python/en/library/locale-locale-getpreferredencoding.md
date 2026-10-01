---
id: "python-en-function-locale-getpreferredencoding"
language: "python"
lang: "en"
category: "function"
name: "getpreferredencoding"
signature: "getpreferredencoding(do_setlocale=True)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.getpreferredencoding"
license: "PSF"
updated: "2026-10-01"
---

# getpreferredencoding

Return the `locale encoding` used for text data, according to user
preferences.  User preferences are expressed differently on different
systems, and might not be available programmatically on some systems, so
this function only returns a guess.

On some systems, it is necessary to invoke `setlocale` to obtain the
user preferences, so this function is not thread-safe. If invoking setlocale
is not necessary or desired, *do_setlocale* should be set to `False`.

On Android or if the `Python UTF-8 Mode` is enabled, always
return `'utf-8'`, the `locale encoding` and the *do_setlocale*
argument are ignored.

The `Python preinitialization` configures the LC_CTYPE
locale. See also the `filesystem encoding and error handler`.

> *Changed in 3.7*: The function now always returns ``"utf-8"`` on Android or if the :ref:`Python UTF-8 Mode <utf8-mode>` is enabled.
