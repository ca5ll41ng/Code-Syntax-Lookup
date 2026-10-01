---
id: "java-en-function-deflaterinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "DeflaterInputStream.available"
signature: "public int available() throws IOException"
title: "DeflaterInputStream.available"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterInputStream.available

```java
public int available() throws IOException
```

Returns 0 after EOF has been reached, otherwise always return 1.
 

 Programs should not count on this method to return the actual number
 of bytes that could be read without blocking

**返回**

- zero after the end of the underlying input stream has been reached, otherwise always returns 1

**异常**

- **IOException** — if an I/O error occurs or if this stream is already closed
