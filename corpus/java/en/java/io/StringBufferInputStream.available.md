---
id: "java-en-function-stringbufferinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "StringBufferInputStream.available"
signature: "public synchronized int available()"
title: "StringBufferInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringBufferInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBufferInputStream.available

```java
public synchronized int available()
```

Returns the number of bytes that can be read from the input
 stream without blocking.

**返回**

- the value of `count - pos`, which is the number of bytes remaining to be read from the input buffer.
