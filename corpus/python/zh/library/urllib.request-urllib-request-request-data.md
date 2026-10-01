---
id: "python-zh-function-urllib-request-request-data"
language: "python"
lang: "zh"
category: "function"
name: "Request.data"
directive: "attribute"
module: "urllib.request"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.request.html#urllib.request.Request.data"
license: "PSF"
updated: "2026-10-01"
---

# Request.data

请求的数据体，未给出则为 ``None`` 。

> *Changed in 3.4*: Changing value of :attr:`Request.data` now deletes "Content-Length" header if it was previously set or calculated.
