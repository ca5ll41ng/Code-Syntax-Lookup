---
id: "java-en-function-zipinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.available"
signature: "public int available() throws IOException"
title: "ZipInputStream.available"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.available

```java
public int available() throws IOException
```

Returns 0 when end of stream is detected for the current ZIP entry or
 `closeEntry` has been called on the current ZIP entry, otherwise
 returns 1.
 

 Programs should not count on this method to return the actual number
 of bytes that could be read without blocking.

**返回**

- 0 when end of stream is detected for the current ZIP entry or `closeEntry` has been called on the current ZIP entry, otherwise 1.

**异常**

- **IOException** — if an I/O error occurs.
