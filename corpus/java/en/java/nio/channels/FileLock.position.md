---
id: "java-en-function-filelock-position"
language: "java"
lang: "en"
category: "function"
name: "FileLock.position"
signature: "public final long position()"
title: "FileLock.position"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.position

```java
public final long position()
```

Returns the position within the file of the first byte of the locked
 region.

 

 A locked region need not be contained within, or even overlap, the
 actual underlying file, so the value returned by this method may exceed
 the file's current size.

**返回**

- The position
