---
id: "java-en-function-filestore-gettotalspace"
language: "java"
lang: "en"
category: "function"
name: "FileStore.getTotalSpace"
signature: "public abstract long getTotalSpace() throws IOException"
title: "FileStore.getTotalSpace"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.getTotalSpace

```java
public abstract long getTotalSpace() throws IOException
```

Returns the size, in bytes, of the file store. If the total number of
 bytes in the file store is greater than `MAX_VALUE`, then
 `Long.MAX_VALUE` will be returned.

**返回**

- the size of the file store, in bytes

**异常**

- **IOException** — if an I/O error occurs
