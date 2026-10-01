---
id: "java-en-function-memorysegment-isnative"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.isNative"
signature: "boolean isNative()"
title: "MemorySegment.isNative"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.isNative

```java
boolean isNative()
```

{@return `true` if this segment is a native segment}
 

 A native segment is created e.g. using the `allocate`
 (and related) factory, or by `ofBuffer(Buffer) wrapping` a
 `allocateDirect(int) direct buffer`.
