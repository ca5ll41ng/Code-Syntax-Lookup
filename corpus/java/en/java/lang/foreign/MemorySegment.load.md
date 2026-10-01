---
id: "java-en-function-memorysegment-load"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.load"
signature: "void load()"
title: "MemorySegment.load"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.load

```java
void load()
```

Loads the contents of this mapped segment into physical memory.
 

 This method makes a best effort to ensure that, when it returns,
 the contents of this segment are resident in physical memory.  Invoking this
 method may cause some number of page faults and I/O operations to
 occur.
 

 This memory segment is `#keep-alive kept alive`
 during the invocation of this method.

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **UnsupportedOperationException** — if this segment is not a mapped memory segment, e.g. if `isMapped() == false`
