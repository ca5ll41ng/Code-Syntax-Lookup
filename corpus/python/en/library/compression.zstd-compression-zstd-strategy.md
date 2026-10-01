---
id: "python-en-function-compression-zstd-strategy"
language: "python"
lang: "en"
category: "function"
name: "Strategy"
signature: "Strategy()"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.Strategy"
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

The following strategies are available:

attribute:: fast

attribute:: dfast

attribute:: greedy

attribute:: lazy

attribute:: lazy2

attribute:: btlazy2

attribute:: btopt

attribute:: btultra

attribute:: btultra2
