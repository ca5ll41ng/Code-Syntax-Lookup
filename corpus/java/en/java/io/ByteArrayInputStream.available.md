---
id: "java-en-function-bytearrayinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayInputStream.available"
signature: "public synchronized int available()"
title: "ByteArrayInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayInputStream.available

```java
public synchronized int available()
```

Returns the number of remaining bytes that can be read (or skipped over)
 from this input stream.
 

 The value returned is `count - pos`,
 which is the number of bytes remaining to be read from the input buffer.

**返回**

- the number of remaining bytes that can be read (or skipped over) from this input stream without blocking.
