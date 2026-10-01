---
id: "java-en-function-files-readallbytes"
language: "java"
lang: "en"
category: "function"
name: "Files.readAllBytes"
signature: "public static byte[] readAllBytes(Path path) throws IOException"
title: "Files.readAllBytes"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.readAllBytes

```java
public static byte[] readAllBytes(Path path) throws IOException
```

Reads all the bytes from a file. The method ensures that the file is
 closed when all bytes have been read or an I/O error, or other runtime
 exception, is thrown.

 

 Note that this method is intended for simple cases where it is
 convenient to read all bytes into a byte array. It is not intended for
 reading in large files.

**参数**

- **path** — the path to the file

**返回**

- a byte array containing the bytes read from the file

**异常**

- **IOException** — if an I/O error occurs reading from the stream
- **OutOfMemoryError** — if an array of the required size cannot be allocated, for example the file is larger that `2GB`
