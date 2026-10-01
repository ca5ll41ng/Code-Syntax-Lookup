---
id: "java-en-function-inputstream-marksupported"
language: "java"
lang: "en"
category: "function"
name: "InputStream.markSupported"
signature: "public boolean markSupported()"
title: "InputStream.markSupported"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.markSupported

```java
public boolean markSupported()
```

Tests if this input stream supports the `mark` and
 `reset` methods. Whether or not `mark` and
 `reset` are supported is an invariant property of a
 particular input stream instance.

 The `markSupported` method
 of `InputStream` returns `false`.

**返回**

- `true` if this stream instance supports the mark and reset methods; `false` otherwise.

**参见**

- java.io.InputStream#mark(int)
- java.io.InputStream#reset()
