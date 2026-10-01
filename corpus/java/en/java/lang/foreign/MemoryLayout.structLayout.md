---
id: "java-en-function-memorylayout-structlayout"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.structLayout"
signature: "static StructLayout structLayout(MemoryLayout... elements)"
title: "MemoryLayout.structLayout"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.structLayout

```java
static StructLayout structLayout(MemoryLayout... elements)
```

Creates a struct layout with the given member layouts.

          additional `PaddingLayout padding layout` elements. As such,
          the following struct layout creation will fail with an exception:

 {@snippet lang = java:
 structLayout(JAVA_SHORT, JAVA_INT);
 }

 To avoid the exception, clients can either insert additional padding layout
 elements:

 {@snippet lang = java:
 structLayout(JAVA_SHORT, MemoryLayout.paddingLayout(2), JAVA_INT);
 }

 Or, alternatively, they can use a member layout that features a smaller alignment
 constraint. This will result in a packed struct layout:

 {@snippet lang = java:
 structLayout(JAVA_SHORT, JAVA_INT.withByteAlignment(2));
 }

**参数**

- **elements** — The member layouts of the struct layout

**返回**

- a struct layout with the given member layouts

**异常**

- **IllegalArgumentException** — if the sum of the `byteSize() byte sizes` of the member layouts overflows
- **IllegalArgumentException** — if a member layout in `elements` occurs at an offset (relative to the start of the struct layout) which is not compatible with its alignment constraint
