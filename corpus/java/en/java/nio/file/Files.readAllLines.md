---
id: "java-en-function-files-readalllines"
language: "java"
lang: "en"
category: "function"
name: "Files.readAllLines"
signature: "public static List<String> readAllLines(Path path, Charset cs) throws IOException"
title: "Files.readAllLines"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.readAllLines

```java
public static List<String> readAllLines(Path path, Charset cs) throws IOException
```

Read all lines from a file. This method ensures that the file is
 closed when all bytes have been read or an I/O error, or other runtime
 exception, is thrown. Bytes from the file are decoded into characters
 using the specified charset.

 

 This method recognizes the following as line terminators:
 
   
-  &#92;u000D followed by &#92;u000A,
     CARRIAGE RETURN followed by LINE FEED 
   
-  &#92;u000A, LINE FEED 
   
-  &#92;u000D, CARRIAGE RETURN 
 

 

 Additional Unicode line terminators may be recognized in future
 releases.

 

 Note that this method is intended for simple cases where it is
 convenient to read all lines in a single operation. It is not intended
 for reading in large files.

**参数**

- **path** — the path to the file
- **cs** — the charset to use for decoding

**返回**

- the lines from the file as a `List`; whether the `List` is modifiable or not is implementation dependent and therefore not specified

**异常**

- **IOException** — if an I/O error occurs reading from the file or a malformed or unmappable byte sequence is read

**参见**

- #newBufferedReader
