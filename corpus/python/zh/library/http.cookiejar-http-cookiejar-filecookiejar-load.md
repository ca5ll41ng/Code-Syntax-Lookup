---
id: "python-zh-function-http-cookiejar-filecookiejar-load"
language: "python"
lang: "zh"
category: "function"
name: "FileCookieJar.load"
signature: "FileCookieJar.load(filename=None, ignore_discard=False, ignore_expires=False)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar.load"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar.load

从文件加载 cookie。

旧的 cookie 将被保留，除非是被新加载的 cookie 所覆盖。

其参数与 :meth:`save` 的相同。

The named file must be in the format understood by the class, or
`LoadError` will be raised.  Also, `OSError` may be raised, for
example if the file does not exist.

> *Changed in 3.3*: :exc:`IOError` used to be raised, it is now an alias of :exc:`OSError`.
