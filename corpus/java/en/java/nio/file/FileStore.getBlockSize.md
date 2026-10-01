---
id: "java-en-function-filestore-getblocksize"
language: "java"
lang: "en"
category: "function"
name: "FileStore.getBlockSize"
signature: "public long getBlockSize() throws IOException"
title: "FileStore.getBlockSize"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.getBlockSize

```java
public long getBlockSize() throws IOException
```

Returns the number of bytes per block in this file store.

 

 File storage is typically organized into discrete sequences of bytes
 called blocks. A block is the smallest storage unit of a file store.
 Every read and write operation is performed on a multiple of blocks.

           `UnsupportedOperationException`.

**返回**

- a positive value representing the block size of this file store, in bytes

**异常**

- **IOException** — if an I/O error occurs
- **UnsupportedOperationException** — if the operation is not supported

> *Since 10*
