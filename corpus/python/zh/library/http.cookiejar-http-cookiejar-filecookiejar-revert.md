---
id: "python-zh-function-http-cookiejar-filecookiejar-revert"
language: "python"
lang: "zh"
category: "function"
name: "FileCookieJar.revert"
signature: "FileCookieJar.revert(filename=None, ignore_discard=False, ignore_expires=False)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar.revert"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar.revert

清除所有 cookie 并从保存的文件重新加载 cookie。

`revert` can raise the same exceptions as `load`. If there is a
failure, the object's state will not be altered.
