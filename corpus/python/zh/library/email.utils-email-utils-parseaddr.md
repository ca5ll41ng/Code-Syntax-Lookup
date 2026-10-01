---
id: "python-zh-function-email-utils-parseaddr"
language: "python"
lang: "zh"
category: "function"
name: "parseaddr"
signature: "parseaddr(address, *, strict=True)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/zh-cn/3/library/email.utils.html#email.utils.parseaddr"
license: "PSF"
updated: "2026-10-01"
---

# parseaddr

Parse address -- which should be the value of some address-containing field such
as `To` or `Cc` -- into its constituent *realname* and
*email address* parts.  Returns a tuple of that information, unless the parse
fails, in which case a 2-tuple of `('', '')` is returned.

如果 *strict* 为真值，将使用拒绝错误形式输入的严格解析器。

> *Changed in 3.13*: Add *strict* optional parameter and reject malformed inputs by default.
