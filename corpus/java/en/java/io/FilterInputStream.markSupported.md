---
id: "java-en-function-filterinputstream-marksupported"
language: "java"
lang: "en"
category: "function"
name: "FilterInputStream.markSupported"
signature: "public boolean markSupported()"
title: "FilterInputStream.markSupported"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream.markSupported

```java
public boolean markSupported()
```

Tests if this input stream supports the `mark`
 and `reset` methods.

 This method simply performs `in.markSupported()`.

**返回**

- `true` if this stream type supports the `mark` and `reset` method; `false` otherwise.

**参见**

- java.io.FilterInputStream#in
- java.io.InputStream#mark(int)
- java.io.InputStream#reset()
