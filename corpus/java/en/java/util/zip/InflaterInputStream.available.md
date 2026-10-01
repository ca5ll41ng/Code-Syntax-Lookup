---
id: "java-en-function-inflaterinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "InflaterInputStream.available"
signature: "public int available() throws IOException"
title: "InflaterInputStream.available"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterInputStream.available

```java
public int available() throws IOException
```

Returns 0 after EOF has been reached, otherwise always return 1.
 

 Programs should not count on this method to return the actual number
 of bytes that could be read without blocking.

**返回**

- 1 before EOF and 0 after EOF.

**异常**

- **IOException** — if an I/O error occurs.
