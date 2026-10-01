---
id: "java-en-function-filesystemprovider-getpath"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.getPath"
signature: "public abstract Path getPath(URI uri)"
title: "FileSystemProvider.getPath"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.getPath

```java
public abstract Path getPath(URI uri)
```

Return a `Path` object by converting the given `URI`. The
 resulting `Path` is associated with a `FileSystem` that
 already exists or is constructed automatically.

 

 The exact form of the URI is file system provider dependent. In the
 case of the default provider, the URI scheme is `"file"` and the
 given URI has a non-empty path component, and undefined query, and
 fragment components. The resulting `Path` is associated with the
 default `getDefault default` `FileSystem`.

**参数**

- **uri** — The URI to convert

**返回**

- The resulting `Path`

**异常**

- **IllegalArgumentException** — If the URI scheme does not identify this provider or other preconditions on the uri parameter do not hold
- **FileSystemNotFoundException** — The file system, identified by the URI, does not exist and cannot be created automatically
