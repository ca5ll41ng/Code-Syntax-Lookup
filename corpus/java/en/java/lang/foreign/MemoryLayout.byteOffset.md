---
id: "java-en-function-memorylayout-byteoffset"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.byteOffset"
signature: "long byteOffset(PathElement... elements)"
title: "MemoryLayout.byteOffset"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.byteOffset

```java
long byteOffset(PathElement... elements)
```

Computes the offset, in bytes, of the layout selected by the given layout path,
 where the initial layout in the path is this layout.

**参数**

- **elements** — the layout path elements

**返回**

- The offset, in bytes, of the layout selected by the layout path in `elements`

**异常**

- **IllegalArgumentException** — if the layout path is not well-formed for this layout
- **IllegalArgumentException** — if the layout path contains one or more open path elements
- **IllegalArgumentException** — if the layout path contains one or more dereference path elements
