---
id: "java-en-function-memorysegment-isloaded"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.isLoaded"
signature: "boolean isLoaded()"
title: "MemorySegment.isLoaded"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.isLoaded

```java
boolean isLoaded()
```

Determines whether all the contents of this mapped segment are resident in physical
 memory.
 

 A return value of `true` implies that it is highly likely
 that all the data in this segment is resident in physical memory and
 may therefore be accessed without incurring any virtual-memory page
 faults or I/O operations. A return value of `false` does not
 necessarily imply that this segment's contents are not resident in physical
 memory.
 

 The returned value is a hint, rather than a guarantee, because the
 underlying operating system may have paged out some of this segment's data
 by the time that an invocation of this method returns.
 

 This memory segment is `#keep-alive kept alive`
 during the invocation of this method.

**返回**

- `true` if it is likely that the contents of this segment are resident in physical memory

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **UnsupportedOperationException** — if this segment is not a mapped memory segment, e.g. if `isMapped() == false`
