---
id: "java-en-function-mappedbytebuffer-slice"
language: "java"
lang: "en"
category: "function"
name: "MappedByteBuffer.slice"
signature: "public abstract MappedByteBuffer slice()"
title: "MappedByteBuffer.slice"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/MappedByteBuffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MappedByteBuffer.slice

```java
public abstract MappedByteBuffer slice()
```

{@inheritDoc}

 

 Reading bytes into physical memory by invoking `load()` on the
 returned buffer, or writing bytes to the storage device by invoking
 `force()` on the returned buffer, will only act on the sub-range
 of this buffer that the returned buffer represents, namely
 `[position(),limit())`.

> *Since 17*
