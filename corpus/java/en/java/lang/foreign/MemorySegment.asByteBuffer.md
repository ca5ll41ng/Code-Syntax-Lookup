---
id: "java-en-function-memorysegment-asbytebuffer"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.asByteBuffer"
signature: "ByteBuffer asByteBuffer()"
title: "MemorySegment.asByteBuffer"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.asByteBuffer

```java
ByteBuffer asByteBuffer()
```

Wraps this segment in a `ByteBuffer`. Some properties of the returned buffer
 are linked to the properties of this segment. More specifically, the resulting
 buffer has the following characteristics:
 
 
- It is `isReadOnly() read-only`, if this segment is a
 `isReadOnly() read-only segment`;
 
- Its `position() position` is set to zero;
 
- Its `capacity() capacity` and
 `limit() limit` are both set to this segment's
 `byteSize() size`. For this reason, a byte buffer cannot
 be returned if this segment's size is greater than `MAX_VALUE`;
 
- It is a `isDirect() direct buffer`, if this is a
 native segment.
 

 

 The life-cycle of the returned buffer is tied to that of this segment. That is,
 accessing the returned buffer after the scope associated with this segment is no
 longer `isAlive() alive`, will throw an
 `IllegalStateException`. Similarly, accessing the returned buffer from a
 thread `T` such that `isAccessible(T) == false` will throw a
 `WrongThreadException`.
 

 If this segment is `isAccessibleBy(Thread) accessible` from a single
 thread, calling read/write I/O operations on the resulting buffer might result in
 unspecified exceptions being thrown.
 

 Finally, the resulting buffer's byte order is
 `BIG_ENDIAN`; this can be changed using
 `order`.

**返回**

- a `ByteBuffer` view of this memory segment

**异常**

- **UnsupportedOperationException** — if this segment cannot be mapped onto a `ByteBuffer` instance, e.g. if it is a heap segment backed by an array other than `byte[]`), or if its size is greater than `MAX_VALUE`
