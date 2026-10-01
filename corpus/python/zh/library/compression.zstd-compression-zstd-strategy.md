---
id: "python-zh-function-compression-zstd-strategy"
language: "python"
lang: "zh"
category: "function"
name: "Strategy"
signature: "Strategy()"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/zh-cn/3/library/compression.zstd.html#compression.zstd.Strategy"
license: "PSF"
updated: "2026-10-01"
---

# Strategy

An `~enum.IntEnum` containing strategies for compression.
Higher-numbered strategies correspond to more complex and slower
compression.

> **Note**
>
> The values of attributes of `Strategy` are not necessarily stable
> across zstd versions. Only the ordering of the attributes may be relied
> upon. The attributes are listed below in order.
>

以下策略可用：

attribute:: fast

attribute:: dfast

attribute:: greedy

attribute:: lazy

attribute:: lazy2

attribute:: btlazy2

attribute:: btopt

attribute:: btultra

attribute:: btultra2
