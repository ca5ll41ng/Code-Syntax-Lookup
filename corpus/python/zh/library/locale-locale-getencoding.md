---
id: "python-zh-function-locale-getencoding"
language: "python"
lang: "zh"
category: "function"
name: "getencoding"
signature: "getencoding()"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/zh-cn/3/library/locale.html#locale.getencoding"
license: "PSF"
updated: "2026-10-01"
---

# getencoding

获取当前的 :term:`locale encoding`:

* On Android and VxWorks, return `"utf-8"`.
* On Unix, return the encoding of the current `LC_CTYPE` locale.
  Return `"utf-8"` if `nl_langinfo(CODESET)` returns an empty string:
  for example, if the current LC_CTYPE locale is not supported.
* On Windows, return the ANSI code page.

The `Python preinitialization` configures the LC_CTYPE
locale. See also the `filesystem encoding and error handler`.

This function is similar to
`getpreferredencoding(False)` except this
function ignores the `Python UTF-8 Mode`.

> *Added in 3.11*
