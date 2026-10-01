---
id: "java-en-function-filesystemprovider-newbytechannel"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.newByteChannel"
signature: "public abstract SeekableByteChannel newByteChannel(Path path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException"
title: "FileSystemProvider.newByteChannel"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.newByteChannel

```java
public abstract SeekableByteChannel newByteChannel(Path path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException
```

Opens or creates a file, returning a seekable byte channel to access the
 file. This method works in exactly the manner specified by the `newByteChannel` method.

**参数**

- **path** — the path to the file to open or create
- **options** — options specifying how the file is opened
- **attrs** — an optional list of file attributes to set atomically when creating the file

**返回**

- a new seekable byte channel

**异常**

- **IllegalArgumentException** — if the set contains an invalid combination of options
- **UnsupportedOperationException** — if an unsupported open option is specified or the array contains attributes that cannot be set atomically when creating the file
- **FileAlreadyExistsException** — If a file of that name already exists and the `CREATE_NEW CREATE_NEW` option is specified and the file is being opened for writing (optional specific exception)
- **IOException** — if an I/O error occurs
