---
id: "java-en-function-mappedbytebuffer-isloaded"
language: "java"
lang: "en"
category: "function"
name: "MappedByteBuffer.isLoaded"
signature: "public final boolean isLoaded()"
title: "MappedByteBuffer.isLoaded"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/MappedByteBuffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MappedByteBuffer.isLoaded

```java
public final boolean isLoaded()
```

Tells whether or not this buffer's content is resident in physical
 memory.

 

 A return value of `true` implies that it is highly likely
 that all of the data in this buffer is resident in physical memory and
 may therefore be accessed without incurring any virtual-memory page
 faults or I/O operations.  A return value of `false` does not
 necessarily imply that the buffer's content is not resident in physical
 memory.

 

 The returned value is a hint, rather than a guarantee, because the
 underlying operating system may have paged out some of the buffer's data
 by the time that an invocation of this method returns.

**返回**

- `true` if it is likely that this buffer's content is resident in physical memory
