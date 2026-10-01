---
id: "java-en-function-cipherinputstream-marksupported"
language: "java"
lang: "en"
category: "function"
name: "CipherInputStream.markSupported"
signature: "public boolean markSupported()"
title: "CipherInputStream.markSupported"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherInputStream.markSupported

```java
public boolean markSupported()
```

Tests if this input stream supports the `mark`
 and `reset` methods, which it does not.

**返回**

- `false`, since this class does not support the `mark` and `reset` methods.

**参见**

- java.io.InputStream#mark(int)
- java.io.InputStream#reset()
