---
id: "java-en-function-memorysegment-ofbuffer"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.ofBuffer"
signature: "static MemorySegment ofBuffer(Buffer buffer)"
title: "MemorySegment.ofBuffer"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.ofBuffer

```java
static MemorySegment ofBuffer(Buffer buffer)
```

Creates a memory segment that is backed by the same region of memory that backs
 the given `Buffer` instance. The segment starts relative to the buffer's
 position (inclusive) and ends relative to the buffer's limit (exclusive).
 

 If the buffer is `isReadOnly() read-only`, the resulting segment
 is also `isReadOnly() read-only`. Moreover, if the buffer
 is a `isDirect() direct buffer`, the returned segment is a
 native segment; otherwise, the returned memory segment is a heap segment.
 

 If the provided buffer has been obtained by calling `asByteBuffer` on a
 memory segment whose `Scope scope` is `S`, the returned segment
 will be associated with the same scope `S`. Otherwise, the scope of the
 returned segment is an automatic scope that keeps the provided buffer reachable.
 As such, if the provided buffer is a direct buffer, its backing memory region will
 not be deallocated as long as the returned segment, or any of its slices, are kept
 reachable.

**参数**

- **buffer** — the buffer instance to be turned into a new memory segment

**返回**

- a memory segment, derived from the given buffer instance

**异常**

- **IllegalArgumentException** — if the provided `buffer` is a heap buffer but is not backed by an array; For example, buffers directly or indirectly obtained via (`wrap` or `wrap` are not backed by an array.
