---
id: "java-en-function-files-write"
language: "java"
lang: "en"
category: "function"
name: "Files.write"
signature: "public static Path write(Path path, byte[] bytes, OpenOption... options) throws IOException"
title: "Files.write"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.write

```java
public static Path write(Path path, byte[] bytes, OpenOption... options) throws IOException
```

Writes bytes to a file. The `options` parameter specifies how
 the file is created or opened. If no options are present then this method
 works as if the `CREATE CREATE`, `TRUNCATE_EXISTING TRUNCATE_EXISTING`, and `WRITE WRITE` options are present. In other words, it
 opens the file for writing, creating the file if it doesn't exist, or
 initially truncating an existing `isRegularFile regular-file` to
 a size of `0`. All bytes in the byte array are written to the file.
 The method ensures that the file is closed when all bytes have been
 written (or an I/O error or other runtime exception is thrown). If an I/O
 error occurs then it may do so after the file has been created or
 truncated, or after some bytes have been written to the file.

 

 **Usage example**: By default the method creates a new file or
 overwrites an existing file. Suppose you instead want to append bytes
 to an existing file:
 {@snippet lang=java :
     Path path = ...
     byte[] bytes = ...
     Files.write(path, bytes, StandardOpenOption.APPEND);
 }

**参数**

- **path** — the path to the file
- **bytes** — the byte array with the bytes to write
- **options** — options specifying how the file is opened

**返回**

- the path

**异常**

- **IllegalArgumentException** — if `options` contains an invalid combination of options
- **IOException** — if an I/O error occurs writing to or creating the file
- **UnsupportedOperationException** — if an unsupported option is specified
- **FileAlreadyExistsException** — If the path locates an existing file and the `CREATE_NEW CREATE_NEW` option is specified (optional specific exception)
