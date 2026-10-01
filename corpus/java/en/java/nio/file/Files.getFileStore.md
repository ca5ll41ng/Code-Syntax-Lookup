---
id: "java-en-function-files-getfilestore"
language: "java"
lang: "en"
category: "function"
name: "Files.getFileStore"
signature: "public static FileStore getFileStore(Path path) throws IOException"
title: "Files.getFileStore"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.getFileStore

```java
public static FileStore getFileStore(Path path) throws IOException
```

Returns the `FileStore` representing the file store where a file
 is located.

 

 Once a reference to the `FileStore` is obtained it is
 implementation specific if operations on the returned `FileStore`,
 or `FileStoreAttributeView` objects obtained from it, continue
 to depend on the existence of the file. In particular the behavior is not
 defined for the case that the file is deleted or moved to a different
 file store.

**参数**

- **path** — the path to the file

**返回**

- the file store where the file is stored

**异常**

- **IOException** — if an I/O error occurs
