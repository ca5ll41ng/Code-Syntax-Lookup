---
id: "java-en-function-memorylayout-withbytealignment"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.withByteAlignment"
signature: "MemoryLayout withByteAlignment(long byteAlignment)"
title: "MemoryLayout.withByteAlignment"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.withByteAlignment

```java
MemoryLayout withByteAlignment(long byteAlignment)
```

{@return a memory layout with the same characteristics as this layout, but with
          the given alignment constraint (in bytes)}

**参数**

- **byteAlignment** — the layout alignment constraint, expressed in bytes

**异常**

- **IllegalArgumentException** — if `byteAlignment` is not a power of two
