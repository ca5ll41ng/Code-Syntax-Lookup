---
id: "java-en-function-memorysegment-address"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.address"
signature: "long address()"
title: "MemorySegment.address"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.address

```java
long address()
```

{@return the address of this memory segment}

          operation (e.g. a JNI function), clients must ensure that the segment is
          kept `#reachability reachable`
          for the entire duration of the operation. A failure to do so might result
          in the premature deallocation of the region of memory backing the memory
          segment, in case the segment has been allocated with an
          `ofAuto() automatic arena`.
