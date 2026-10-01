---
id: "python-en-function-gettext-install"
language: "python"
lang: "en"
category: "function"
name: "install"
signature: "install(domain, localedir=None, *, names=None)"
directive: "function"
module: "gettext"
source_url: "https://docs.python.org/3/library/gettext.html#gettext.install"
license: "PSF"
updated: "2026-10-01"
---

# install

This installs the function `_` in Python's builtins namespace, based on
*domain* and *localedir* which are passed to the function `translation`.

For the *names* parameter, please see the description of the translation
object's `~NullTranslations.install` method.

As seen below, you usually mark the strings in your application that are
candidates for translation, by wrapping them in a call to the `_`
function, like this::

   print(_('This string will be translated.'))

For convenience, you want the `_` function to be installed in Python's
builtins namespace, so it is easily accessible in all modules of your
application.

> *Changed in 3.11*: *names* is now a keyword-only parameter.
