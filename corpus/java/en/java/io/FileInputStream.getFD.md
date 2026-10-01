---
id: "java-en-function-fileinputstream-getfd"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.getFD"
signature: "public final FileDescriptor getFD() throws IOException"
title: "FileInputStream.getFD"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.getFD

```java
public final FileDescriptor getFD() throws IOException
```

Returns the `FileDescriptor`
 object  that represents the connection to
 the actual file in the file system being
 used by this `FileInputStream`.

**返回**

- the file descriptor object associated with this stream.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FileDescriptor
