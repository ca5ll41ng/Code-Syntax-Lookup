---
id: "java-en-function-memorysegment-unload"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.unload"
signature: "void unload()"
title: "MemorySegment.unload"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.unload

```java
void unload()
```

Unloads the contents of this mapped segment from physical memory.
 

 This method makes a best effort to ensure that the contents of this segment
 are no longer resident in physical memory. Accessing this segment's contents
 after invoking this method may cause some number of page faults and I/O operations
 to occur (as this segment's contents might need to be paged back in).
 

 This memory segment is `#keep-alive kept alive`
 during the invocation of this method.

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **UnsupportedOperationException** — if this segment is not a mapped memory segment, e.g. if `isMapped() == false`
