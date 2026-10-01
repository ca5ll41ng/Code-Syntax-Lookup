---
id: "java-en-function-files-newbufferedreader"
language: "java"
lang: "en"
category: "function"
name: "Files.newBufferedReader"
signature: "public static BufferedReader newBufferedReader(Path path, Charset cs) throws IOException"
title: "Files.newBufferedReader"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.newBufferedReader

```java
public static BufferedReader newBufferedReader(Path path, Charset cs) throws IOException
```

Opens a file for reading, returning a `BufferedReader` that may be
 used to read text from the file in an efficient manner. Bytes from the
 file are decoded into characters using the specified charset. Reading
 commences at the beginning of the file.

 

 The `Reader` methods that read from the file throw `IOException` if a malformed or unmappable byte sequence is read.

**参数**

- **path** — the path to the file
- **cs** — the charset to use for decoding

**返回**

- a new buffered reader, with default buffer size, to read text from the file

**异常**

- **IOException** — if an I/O error occurs opening the file

**参见**

- #readAllLines
