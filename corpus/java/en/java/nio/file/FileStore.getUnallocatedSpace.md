---
id: "java-en-function-filestore-getunallocatedspace"
language: "java"
lang: "en"
category: "function"
name: "FileStore.getUnallocatedSpace"
signature: "public abstract long getUnallocatedSpace() throws IOException"
title: "FileStore.getUnallocatedSpace"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.getUnallocatedSpace

```java
public abstract long getUnallocatedSpace() throws IOException
```

Returns the number of unallocated bytes in the file store.
 If the number of unallocated bytes is greater than
 `MAX_VALUE`, then `Long.MAX_VALUE` will be returned.

 

 The returned number of unallocated bytes is a hint, but not a
 guarantee, that it is possible to use most or any of these bytes.  The
 number of unallocated bytes is most likely to be accurate immediately
 after this method returns. It is likely to be
 made inaccurate by any external I/O operations including those made on
 the system outside of this virtual machine.

**返回**

- the current number of unallocated bytes

**异常**

- **IOException** — if an I/O error occurs
