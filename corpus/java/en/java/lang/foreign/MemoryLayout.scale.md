---
id: "java-en-function-memorylayout-scale"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.scale"
signature: "long scale(long offset, long index)"
title: "MemoryLayout.scale"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.scale

```java
long scale(long offset, long index)
```

{@return `offset + (byteSize() * index)`}

**参数**

- **offset** — the base offset
- **index** — the index to be scaled by the byte size of this layout

**异常**

- **IllegalArgumentException** — if `offset` or `index` is negative
- **ArithmeticException** — if either the addition or multiplication overflows
