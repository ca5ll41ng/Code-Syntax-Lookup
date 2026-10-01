---
id: "java-en-function-files-newoutputstream"
language: "java"
lang: "en"
category: "function"
name: "Files.newOutputStream"
signature: "public static OutputStream newOutputStream(Path path, OpenOption... options) throws IOException"
title: "Files.newOutputStream"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.newOutputStream

```java
public static OutputStream newOutputStream(Path path, OpenOption... options) throws IOException
```

Opens or creates a file, returning an output stream that may be used to
 write bytes to the file. The resulting stream will not be buffered. The
 stream will be safe for access by multiple concurrent threads. Whether
 the returned stream is asynchronously closeable and/or
 interruptible is highly file system provider specific and
 therefore not specified.

 

 This method opens or creates a file in exactly the manner specified
 by the `newByteChannel(Path,Set,FileAttribute[]) newByteChannel`
 method with the exception that the `READ READ`
 option may not be present in the array of options. If no options are
 present then this method works as if the `CREATE
 CREATE`, `TRUNCATE_EXISTING TRUNCATE_EXISTING`,
 and `WRITE WRITE` options are present. In other
 words, it opens the file for writing, creating the file if it doesn't
 exist, or initially truncating an existing `isRegularFile
 regular-file` to a size of `0` if it exists.

 

 **Usage Examples:**
 {@snippet lang=java :
     Path path = ...

     // truncate and overwrite an existing file, or create the file if
     // it doesn't initially exist
     OutputStream out = Files.newOutputStream(path);

     // append to an existing file, fail if the file does not exist
     out = Files.newOutputStream(path, APPEND);

     // append to an existing file, create file if it doesn't initially exist
     out = Files.newOutputStream(path, CREATE, APPEND);

     // always create new file, failing if it already exists
     out = Files.newOutputStream(path, CREATE_NEW);
 }

**参数**

- **path** — the path to the file to open or create
- **options** — options specifying how the file is opened

**返回**

- a new output stream

**异常**

- **IllegalArgumentException** — if `options` contains an invalid combination of options
- **UnsupportedOperationException** — if an unsupported option is specified
- **FileAlreadyExistsException** — If the path locates an existing file and the `CREATE_NEW CREATE_NEW` option is specified (optional specific exception)
- **IOException** — if an I/O error occurs
