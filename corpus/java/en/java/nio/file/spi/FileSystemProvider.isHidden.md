---
id: "java-en-function-filesystemprovider-ishidden"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.isHidden"
signature: "public abstract boolean isHidden(Path path) throws IOException"
title: "FileSystemProvider.isHidden"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.isHidden

```java
public abstract boolean isHidden(Path path) throws IOException
```

Tells whether or not a file is considered hidden. This method
 works in exactly the manner specified by the `isHidden`
 method.

 

 This method is invoked by the `isHidden isHidden` method.

**参数**

- **path** — the path to the file to test

**返回**

- `true` if the file is considered hidden

**异常**

- **IOException** — if an I/O error occurs
