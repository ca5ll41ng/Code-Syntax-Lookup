---
id: "java-en-function-memorysegment-force"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.force"
signature: "void force()"
title: "MemorySegment.force"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.force

```java
void force()
```

Forces any changes made to the contents of this mapped segment to be written to
 the storage device described by the mapped segment's file descriptor.
 

 If the file descriptor associated with this mapped segment resides on a local
 storage device then when this method returns it is guaranteed that all changes
 made to this segment since it was created, or since this method was last invoked,
 will have been written to that device.
 

 If the file descriptor associated with this mapped segment does not reside on
 a local device then no such guarantee is made.
 

 If this segment was not mapped in read/write mode
 (`READ_WRITE`) then invoking this
 method may have no effect. In particular, the method has no effect for segments
 mapped in read-only or private mapping modes. This method may or may not have an
 effect for implementation-specific mapping modes.
 

 This memory segment is `#keep-alive kept alive`
 during the invocation of this method.

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **UnsupportedOperationException** — if this segment is not a mapped memory segment, e.g. if `isMapped() == false`
- **UncheckedIOException** — if there is an I/O error writing the contents of this segment to the associated storage device
