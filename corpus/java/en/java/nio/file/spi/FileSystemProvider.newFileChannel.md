---
id: "java-en-function-filesystemprovider-newfilechannel"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.newFileChannel"
signature: "public FileChannel newFileChannel(Path path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException"
title: "FileSystemProvider.newFileChannel"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.newFileChannel

```java
public FileChannel newFileChannel(Path path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException
```

Opens or creates a file for reading and/or writing, returning a file
 channel to access the file. This method works in exactly the manner
 specified by the `open(Path,Set,FileAttribute[])
 FileChannel.open` method. A provider that does not support all the
 features required to construct a file channel throws `UnsupportedOperationException`. The default provider is required to
 support the creation of file channels. When not overridden, the default
 implementation throws `UnsupportedOperationException`.

**参数**

- **path** — the path of the file to open or create
- **options** — options specifying how the file is opened
- **attrs** — an optional list of file attributes to set atomically when creating the file

**返回**

- a new file channel

**异常**

- **IllegalArgumentException** — If the set contains an invalid combination of options
- **UnsupportedOperationException** — If this provider that does not support creating file channels, or an unsupported open option or file attribute is specified
- **FileAlreadyExistsException** — If a file of that name already exists and the `CREATE_NEW CREATE_NEW` option is specified and the file is being opened for writing (optional specific exception)
- **IOException** — If an I/O error occurs
