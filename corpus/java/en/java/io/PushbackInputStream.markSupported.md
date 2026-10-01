---
id: "java-en-function-pushbackinputstream-marksupported"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.markSupported"
signature: "public boolean markSupported()"
title: "PushbackInputStream.markSupported"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.markSupported

```java
public boolean markSupported()
```

Tests if this input stream supports the `mark` and
 `reset` methods, which it does not.

**返回**

- `false`, since this class does not support the `mark` and `reset` methods.

**参见**

- java.io.InputStream#mark(int)
- java.io.InputStream#reset()
