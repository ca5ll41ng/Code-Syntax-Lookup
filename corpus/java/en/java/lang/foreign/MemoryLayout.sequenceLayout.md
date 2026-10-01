---
id: "java-en-function-memorylayout-sequencelayout"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.sequenceLayout"
signature: "static SequenceLayout sequenceLayout(long elementCount, MemoryLayout elementLayout)"
title: "MemoryLayout.sequenceLayout"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.sequenceLayout

```java
static SequenceLayout sequenceLayout(long elementCount, MemoryLayout elementLayout)
```

Creates a sequence layout with the given element layout and element count.

**参数**

- **elementCount** — the sequence element count
- **elementLayout** — the sequence element layout

**返回**

- the new sequence layout with the given element layout and size

**异常**

- **IllegalArgumentException** — if `elementCount` is negative
- **IllegalArgumentException** — if `elementLayout.byteSize() * elementCount` overflows
- **IllegalArgumentException** — if `elementLayout.byteSize() % elementLayout.byteAlignment() != 0`
