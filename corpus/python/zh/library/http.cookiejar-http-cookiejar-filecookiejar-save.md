---
id: "python-zh-function-http-cookiejar-filecookiejar-save"
language: "python"
lang: "zh"
category: "function"
name: "FileCookieJar.save"
signature: "FileCookieJar.save(filename=None, ignore_discard=False, ignore_expires=False)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar.save"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar.save

将 cookie 保存到文件。

This base class raises `NotImplementedError`.  Subclasses may leave this
method unimplemented.

*filename* is the name of file in which to save cookies.  If *filename* is not
specified, `self.filename` is used (whose
default is the value passed to the constructor, if any); if
`self.filename` is `None`,
`ValueError` is raised.

*ignore_discard*: save even cookies set to be discarded. *ignore_expires*: save
even cookies that have expired

The file is overwritten if it already exists, thus wiping all the cookies it
contains.  Saved cookies can be restored later using the `load` or
`revert` methods.
