---
id: "java-en-function-memorysegment-ismapped"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.isMapped"
signature: "boolean isMapped()"
title: "MemorySegment.isMapped"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.isMapped

```java
boolean isMapped()
```

{@return `true` if this segment is a mapped segment}

 A mapped memory segment is created e.g. using the
 `map` factory, or by
 `ofBuffer(Buffer) wrapping` a
 `java.nio.MappedByteBuffer mapped byte buffer`.
