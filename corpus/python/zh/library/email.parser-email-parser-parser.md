---
id: "python-zh-function-email-parser-parser"
language: "python"
lang: "zh"
category: "function"
name: "Parser"
signature: "Parser(_class=None, *, policy=policy.compat32)"
directive: "class"
module: "email.parser"
source_url: "https://docs.python.org/zh-cn/3/library/email.parser.html#email.parser.Parser"
license: "PSF"
updated: "2026-10-01"
---

# Parser

这个类与 :class:`BytesParser` 一样，但是处理字符串输入。

> *Changed in 3.3*: Removed the *strict* argument.  Added the *policy* keyword.

> *Changed in 3.6 *_class* defaults to the policy ``message_factory``.*

method:: parse(fp, headersonly=False)

method:: parsestr(text, headersonly=False)
