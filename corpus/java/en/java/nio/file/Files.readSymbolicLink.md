---
id: "java-en-function-files-readsymboliclink"
language: "java"
lang: "en"
category: "function"
name: "Files.readSymbolicLink"
signature: "public static Path readSymbolicLink(Path link) throws IOException"
title: "Files.readSymbolicLink"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.readSymbolicLink

```java
public static Path readSymbolicLink(Path link) throws IOException
```

Reads the target of a symbolic link (optional operation).

 

 If the file system supports symbolic
 links then this method is used to read the target of the link, failing
 if the file is not a symbolic link. The target of the link need not exist.
 The returned `Path` object will be associated with the same file
 system as `link`.

**参数**

- **link** — the path to the symbolic link

**返回**

- a `Path` object representing the target of the link

**异常**

- **UnsupportedOperationException** — if the implementation does not support symbolic links
- **NotLinkException** — if the target could otherwise not be read because the file is not a symbolic link (optional specific exception)
- **IOException** — if an I/O error occurs
