---
id: "java-en-function-inputstream-nullinputstream"
language: "java"
lang: "en"
category: "function"
name: "InputStream.nullInputStream"
signature: "public static InputStream nullInputStream()"
title: "InputStream.nullInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.nullInputStream

```java
public static InputStream nullInputStream()
```

Returns a new `InputStream` that reads no bytes. The returned
 stream is initially open.  The stream is closed by calling the
 `close()` method.  Subsequent calls to `close()` have no
 effect.

 

 While the stream is open, the `available()`, `read()`,
 `read(byte[])`, `read(byte[], int, int)`,
 `readAllBytes()`, `readNBytes(byte[], int, int)`,
 `readNBytes(int)`, `skip(long)`, `skipNBytes(long)`,
 and `transferTo()` methods all behave as if end of stream has been
 reached.  After the stream has been closed, these methods all throw
 `IOException`.

 

 The `markSupported()` method returns `false`.  The
 `mark()` method does nothing, and the `reset()` method
 throws `IOException`.

**返回**

- an `InputStream` which contains no bytes

> *Since 11*
