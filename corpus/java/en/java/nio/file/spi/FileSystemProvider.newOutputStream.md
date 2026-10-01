---
id: "java-en-function-filesystemprovider-newoutputstream"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.newOutputStream"
signature: "public OutputStream newOutputStream(Path path, OpenOption... options) throws IOException"
title: "FileSystemProvider.newOutputStream"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.newOutputStream

```java
public OutputStream newOutputStream(Path path, OpenOption... options) throws IOException
```

Opens or creates a file, returning an output stream that may be used to
 write bytes to the file. This method works in exactly the manner
 specified by the `newOutputStream` method.

 

 The default implementation of this method opens a channel to the file
 as if by invoking the `newByteChannel` method and constructs a
 stream that writes bytes to the channel. This method should be overridden
 where appropriate.

**参数**

- **path** — the path to the file to open or create
- **options** — options specifying how the file is opened

**返回**

- a new output stream

**异常**

- **IllegalArgumentException** — if `options` contains an invalid combination of options
- **UnsupportedOperationException** — if an unsupported option is specified
- **IOException** — if an I/O error occurs
- **FileAlreadyExistsException** — If a file of that name already exists and the `CREATE_NEW CREATE_NEW` option is specified (optional specific exception)
