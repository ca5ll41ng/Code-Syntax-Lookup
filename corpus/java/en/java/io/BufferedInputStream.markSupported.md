---
id: "java-en-function-bufferedinputstream-marksupported"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.markSupported"
signature: "public boolean markSupported()"
title: "BufferedInputStream.markSupported"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.markSupported

```java
public boolean markSupported()
```

Tests if this input stream supports the `mark`
 and `reset` methods. The `markSupported`
 method of `BufferedInputStream` returns
 `true`.

**返回**

- a `boolean` indicating if this stream type supports the `mark` and `reset` methods.

**参见**

- java.io.InputStream#mark(int)
- java.io.InputStream#reset()
