---
id: "java-en-function-files-newbufferedwriter"
language: "java"
lang: "en"
category: "function"
name: "Files.newBufferedWriter"
signature: "public static BufferedWriter newBufferedWriter(Path path, Charset cs, OpenOption... options) throws IOException"
title: "Files.newBufferedWriter"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.newBufferedWriter

```java
public static BufferedWriter newBufferedWriter(Path path, Charset cs, OpenOption... options) throws IOException
```

Opens or creates a file for writing, returning a `BufferedWriter`
 that may be used to write text to the file in an efficient manner.
 The `options` parameter specifies how the file is created or
 opened. If no options are present then this method works as if the `CREATE CREATE`, `TRUNCATE_EXISTING TRUNCATE_EXISTING`, and `WRITE WRITE` options are present. In other words, it
 opens the file for writing, creating the file if it doesn't exist, or
 initially truncating an existing `isRegularFile regular-file` to
 a size of `0` if it exists.

 

 The `Writer` methods to write text throw `IOException`
 if the text cannot be encoded using the specified charset. Due to
 buffering, an `IOException` caused by an encoding error
 (unmappable-character or malformed-input) may be thrown when `write(char[],int,int) writing`, `flush flushing`, or `close
 closing` the buffered writer.

**参数**

- **path** — the path to the file
- **cs** — the charset to use for encoding
- **options** — options specifying how the file is opened

**返回**

- a new buffered writer, with default buffer size, to write text to the file

**异常**

- **IllegalArgumentException** — if `options` contains an invalid combination of options
- **IOException** — if an I/O error occurs opening or creating the file
- **UnsupportedOperationException** — if an unsupported option is specified
- **FileAlreadyExistsException** — If the path locates an existing file and the `CREATE_NEW CREATE_NEW` option is specified (optional specific exception)

**参见**

- #write(Path,Iterable,Charset,OpenOption[])
