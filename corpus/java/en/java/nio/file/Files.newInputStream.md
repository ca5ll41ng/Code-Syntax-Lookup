---
id: "java-en-function-files-newinputstream"
language: "java"
lang: "en"
category: "function"
name: "Files.newInputStream"
signature: "public static InputStream newInputStream(Path path, OpenOption... options) throws IOException"
title: "Files.newInputStream"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.newInputStream

```java
public static InputStream newInputStream(Path path, OpenOption... options) throws IOException
```

Opens a file, returning an input stream to read from the file. The stream
 will not be buffered, and is not required to support the `mark mark` or `reset reset` methods. The
 stream will be safe for access by multiple concurrent threads. Reading
 commences at the beginning of the file. Whether the returned stream is
 asynchronously closeable and/or interruptible is highly
 file system provider specific and therefore not specified.

 

 The `options` parameter determines how the file is opened.
 If no options are present then it is equivalent to opening the file with
 the `READ READ` option. In addition to the `READ` option, an implementation may also support additional implementation
 specific options.

**参数**

- **path** — the path to the file to open
- **options** — options specifying how the file is opened

**返回**

- a new input stream

**异常**

- **IllegalArgumentException** — if an invalid combination of options is specified
- **UnsupportedOperationException** — if an unsupported option is specified
- **IOException** — if an I/O error occurs
