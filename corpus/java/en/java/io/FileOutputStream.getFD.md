---
id: "java-en-function-fileoutputstream-getfd"
language: "java"
lang: "en"
category: "function"
name: "FileOutputStream.getFD"
signature: "public final FileDescriptor getFD() throws IOException"
title: "FileOutputStream.getFD"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOutputStream.getFD

```java
public final FileDescriptor getFD() throws IOException
```

Returns the file descriptor associated with this stream.

**返回**

- the `FileDescriptor` object that represents the connection to the file in the file system being used by this `FileOutputStream` object.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FileDescriptor
