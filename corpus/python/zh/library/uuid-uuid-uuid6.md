---
id: "python-zh-function-uuid-uuid6"
language: "python"
lang: "zh"
category: "function"
name: "uuid6"
signature: "uuid6(node=None, clock_seq=None)"
directive: "function"
module: "uuid"
source_url: "https://docs.python.org/zh-cn/3/library/uuid.html#uuid.uuid6"
license: "PSF"
updated: "2026-10-01"
---

# uuid6

Generate a UUID from a sequence number and the current time according to
RFC RFC 9562, §5.6 <9562#section-5.6>.

这是 :func:`uuid1` 的替代方案，可以提高数据库的本地性。

When *node* is not specified, `getnode` is used to obtain the hardware
address as a 48-bit positive integer. When a sequence number *clock_seq* is
not specified, a pseudo-random 14-bit positive integer is generated.

If *node* or *clock_seq* exceed their expected bit count,
only their least significant bits are kept.

> *Added in 3.14*
