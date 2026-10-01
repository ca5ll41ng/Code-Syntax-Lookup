---
id: "java-en-function-files-getowner"
language: "java"
lang: "en"
category: "function"
name: "Files.getOwner"
signature: "public static UserPrincipal getOwner(Path path, LinkOption... options) throws IOException"
title: "Files.getOwner"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.getOwner

```java
public static UserPrincipal getOwner(Path path, LinkOption... options) throws IOException
```

Returns the owner of a file.

 

 The `path` parameter is associated with a file system that
 supports `FileOwnerAttributeView`. This file attribute view provides
 access to a file attribute that is the owner of the file.

**参数**

- **path** — The path to the file
- **options** — options indicating how symbolic links are handled

**返回**

- A user principal representing the owner of the file

**异常**

- **UnsupportedOperationException** — if the associated file system does not support the `FileOwnerAttributeView`
- **IOException** — if an I/O error occurs
