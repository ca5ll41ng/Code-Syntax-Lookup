---
id: "java-en-function-filelock-size"
language: "java"
lang: "en"
category: "function"
name: "FileLock.size"
signature: "public final long size()"
title: "FileLock.size"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.size

```java
public final long size()
```

Returns the size of the locked region in bytes.

 

 A locked region need not be contained within, or even overlap, the
 actual underlying file, so the value returned by this method may exceed
 the file's current size.

**返回**

- The size of the locked region
