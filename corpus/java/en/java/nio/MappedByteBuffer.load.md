---
id: "java-en-function-mappedbytebuffer-load"
language: "java"
lang: "en"
category: "function"
name: "MappedByteBuffer.load"
signature: "public final MappedByteBuffer load()"
title: "MappedByteBuffer.load"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/MappedByteBuffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MappedByteBuffer.load

```java
public final MappedByteBuffer load()
```

Loads this buffer's content into physical memory.

 

 This method makes a best effort to ensure that, when it returns,
 this buffer's content is resident in physical memory.  Invoking this
 method may cause some number of page faults and I/O operations to
 occur.

**返回**

- This buffer
