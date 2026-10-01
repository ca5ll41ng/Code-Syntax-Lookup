---
id: "java-en-function-memorylayout-paddinglayout"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.paddingLayout"
signature: "static PaddingLayout paddingLayout(long byteSize)"
title: "MemoryLayout.paddingLayout"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.paddingLayout

```java
static PaddingLayout paddingLayout(long byteSize)
```

Creates a padding layout with the given byte size. The alignment constraint of the
 returned layout is 1. As such, regardless of its size, in the absence of an
 `withByteAlignment(long) explicit` alignment constraint, a padding
 layout does not affect the natural alignment of the group or sequence layout it is
 nested into.

**参数**

- **byteSize** — the padding size (expressed in bytes)

**返回**

- the new selector layout

**异常**

- **IllegalArgumentException** — if `byteSize <= 0`
