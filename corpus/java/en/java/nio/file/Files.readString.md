---
id: "java-en-function-files-readstring"
language: "java"
lang: "en"
category: "function"
name: "Files.readString"
signature: "public static String readString(Path path) throws IOException"
title: "Files.readString"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.readString

```java
public static String readString(Path path) throws IOException
```

Reads all content from a file into a string, decoding from bytes to characters
 using the `UTF_8 UTF-8` `Charset charset`.
 The method ensures that the file is closed when all content have been read
 or an I/O error, or other runtime exception, is thrown.

 

 This method is equivalent to: `readString(Path, Charset)
 readString(path, StandardCharsets.UTF_8)`.

**参数**

- **path** — the path to the file

**返回**

- a String containing the content read from the file

**异常**

- **IOException** — if an I/O error occurs reading from the file or a malformed or unmappable byte sequence is read
- **OutOfMemoryError** — if the file is extremely large, for example larger than `2GB`

> *Since 11*
