---
id: "java-en-function-pathstatus-topath"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.toPath"
signature: "public Path toPath()"
title: "PathStatus.toPath"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.toPath

```java
public Path toPath()
```

Returns a `Path java.nio.file.Path` object constructed from
 this abstract path. The resulting `Path` is associated with the
 `getDefault default-filesystem`.

 

 The first invocation of this method works as if invoking it were
 equivalent to evaluating the expression:
 {@snippet lang=java :
         // @link regex="getPath(?=\(t)" target="java.nio.file.FileSystem#getPath" :
         FileSystems.getDefault().getPath(this.getPath());
 }
 Subsequent invocations of this method return the same `Path`.

 

 If this abstract pathname is the empty abstract pathname then this
 method returns a `Path` that may be used to access the current
 user directory.

**返回**

- a `Path` constructed from this abstract path

**异常**

- **java.nio.file.InvalidPathException** — if a `Path` object cannot be constructed from the abstract path (see `getPath FileSystem.getPath`)

**参见**

- Path#toFile

> *Since 1.7*
