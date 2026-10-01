---
id: "java-en-function-outputstream-nulloutputstream"
language: "java"
lang: "en"
category: "function"
name: "OutputStream.nullOutputStream"
signature: "public static OutputStream nullOutputStream()"
title: "OutputStream.nullOutputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStream.nullOutputStream

```java
public static OutputStream nullOutputStream()
```

Returns a new `OutputStream` which discards all bytes.  The
 returned stream is initially open.  The stream is closed by calling
 the `close()` method.  Subsequent calls to `close()` have
 no effect.

 

 While the stream is open, the `write(int)`, `write(byte[])`, and `write(byte[], int, int)` methods do nothing.
 After the stream has been closed, these methods all throw `IOException`.

 

 The `flush()` method does nothing.

**返回**

- an `OutputStream` which discards all bytes

> *Since 11*
