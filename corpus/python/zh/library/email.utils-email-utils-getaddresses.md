---
id: "python-zh-function-email-utils-getaddresses"
language: "python"
lang: "zh"
category: "function"
name: "getaddresses"
signature: "getaddresses(fieldvalues, *, strict=True)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/zh-cn/3/library/email.utils.html#email.utils.getaddresses"
license: "PSF"
updated: "2026-10-01"
---

# getaddresses

This method returns a list of 2-tuples of the form returned by `parseaddr()`.
*fieldvalues* is a sequence of header field values as might be returned by
`Message.get_all`.

如果 *strict* 为真值，将使用拒绝错误形式输入的严格解析器。

下面简单示例可获取一条消息的所有接收方::

   from email.utils import getaddresses

   tos = msg.get_all('to', [])
   ccs = msg.get_all('cc', [])
   resent_tos = msg.get_all('resent-to', [])
   resent_ccs = msg.get_all('resent-cc', [])
   all_recipients = getaddresses(tos + ccs + resent_tos + resent_ccs)

> *Changed in 3.13*: Add *strict* optional parameter and reject malformed inputs by default.
