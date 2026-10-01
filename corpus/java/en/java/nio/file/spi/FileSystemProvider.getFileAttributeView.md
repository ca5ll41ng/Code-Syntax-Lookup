---
id: "java-en-function-filesystemprovider-getfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.getFileAttributeView"
signature: "public abstract <V extends FileAttributeView> V getFileAttributeView(Path path, Class<V> type, LinkOption... options)"
title: "FileSystemProvider.getFileAttributeView"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.getFileAttributeView

```java
public abstract <V extends FileAttributeView> V getFileAttributeView(Path path, Class<V> type, LinkOption... options)
```

Returns a file attribute view of a given type. This method works in
 exactly the manner specified by the `getFileAttributeView`
 method.

**参数**

- **The** — `FileAttributeView` type
- **path** — the path to the file
- **type** — the `Class` object corresponding to the file attribute view
- **options** — options indicating how symbolic links are handled

**返回**

- a file attribute view of the specified type, or `null` if the attribute view type is not available
