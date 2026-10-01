---
id: "java-en-function-filesystemprovider-newinputstream"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.newInputStream"
signature: "public InputStream newInputStream(Path path, OpenOption... options) throws IOException"
title: "FileSystemProvider.newInputStream"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.newInputStream

```java
public InputStream newInputStream(Path path, OpenOption... options) throws IOException
```

Opens a file, returning an input stream to read from the file. This
 method works in exactly the manner specified by the `newInputStream` method.

 

 The default implementation of this method opens a channel to the file
 as if by invoking the `newByteChannel` method and constructs a
 stream that reads bytes from the channel. This method should be overridden
 where appropriate.

**参数**

- **path** — the path to the file to open
- **options** — options specifying how the file is opened

**返回**

- a new input stream

**异常**

- **IllegalArgumentException** — if an invalid combination of options is specified
- **UnsupportedOperationException** — if an unsupported option is specified
- **IOException** — if an I/O error occurs
