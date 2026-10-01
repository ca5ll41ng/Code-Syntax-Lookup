---
id: "java-en-function-filesystemprovider-readattributes"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.readAttributes"
signature: "public abstract <A extends BasicFileAttributes> A readAttributes(Path path, Class<A> type, LinkOption... options) throws IOException"
title: "FileSystemProvider.readAttributes"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.readAttributes

```java
public abstract <A extends BasicFileAttributes> A readAttributes(Path path, Class<A> type, LinkOption... options) throws IOException
```

Reads a file's attributes as a bulk operation. This method works in
 exactly the manner specified by the `readAttributes` method.

**参数**

- **The** — `BasicFileAttributes` type
- **path** — the path to the file
- **type** — the `Class` of the file attributes required to read
- **options** — options indicating how symbolic links are handled

**返回**

- the file attributes

**异常**

- **UnsupportedOperationException** — if an attributes of the given type are not supported
- **IOException** — if an I/O error occurs
