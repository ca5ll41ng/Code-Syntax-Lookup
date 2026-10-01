---
id: "java-en-function-mappedbytebuffer-force"
language: "java"
lang: "en"
category: "function"
name: "MappedByteBuffer.force"
signature: "public final MappedByteBuffer force()"
title: "MappedByteBuffer.force"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/MappedByteBuffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MappedByteBuffer.force

```java
public final MappedByteBuffer force()
```

Forces any changes made to this buffer's content to be written to the
 storage device containing the mapped file.  The region starts at index
 zero in this buffer and is `capacity()` bytes.  An invocation of
 this method behaves in exactly the same way as the invocation
 `force(int,int) force(0,capacity())`.

 

 If the file mapped into this buffer resides on a local storage
 device then when this method returns it is guaranteed that all changes
 made to the buffer since it was created, or since this method was last
 invoked, will have been written to that device.

 

 If the file does not reside on a local device then no such guarantee
 is made.

 

 If this buffer was not mapped in read/write mode (`READ_WRITE`) then
 invoking this method may have no effect. In particular, the
 method has no effect for buffers mapped in read-only or private
 mapping modes. This method may or may not have an effect for
 implementation-specific mapping modes.

**返回**

- This buffer

**异常**

- **UncheckedIOException** — If an I/O error occurs writing the buffer's content to the storage device containing the mapped file
