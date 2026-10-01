---
id: "python-zh-function-email-generator-fmt-none-policy-none"
language: "python"
lang: "zh"
category: "function"
name: "fmt=None, *, policy=None)"
directive: "class"
module: "email.generator"
source_url: "https://docs.python.org/zh-cn/3/library/email.generator.html#email.generator.fmt=None, *, policy=None)"
license: "PSF"
updated: "2026-10-01"
---

# fmt=None, *, policy=None)

Act like `Generator`, except that for any subpart of the message
passed to `Generator.flatten`, if the subpart is of main type
`text`, print the decoded payload of the subpart, and if the main
type is not `text`, instead of printing it fill in the string
*fmt* using information from the part and print the resulting
filled-in string.

To fill in *fmt*, execute `fmt % part_info`, where `part_info`
is a dictionary composed of the following keys and values:

* `type` -- Full MIME type of the non-\ `text` part

* `maintype` -- Main MIME type of the non-\ `text` part

* `subtype` -- Sub-MIME type of the non-\ `text` part

* `filename` -- Filename of the non-\ `text` part

* `description` -- Description associated with the non-\ `text` part

* `encoding` -- Content transfer encoding of the non-\ `text` part

如果 *fmt* 为 ``None``，则使用下列默认 *fmt*:

   "[Non-text (%(type)s) part of message omitted, filename %(filename)s]"

Optional *_mangle_from_* and *maxheaderlen* are as with the
`Generator` base class.
