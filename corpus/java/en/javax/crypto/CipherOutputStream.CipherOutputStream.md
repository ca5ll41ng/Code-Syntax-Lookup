---
id: "java-en-function-cipheroutputstream-cipheroutputstream"
language: "java"
lang: "en"
category: "function"
name: "CipherOutputStream.CipherOutputStream"
signature: "public CipherOutputStream(OutputStream os, Cipher c)"
title: "CipherOutputStream.CipherOutputStream"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherOutputStream.CipherOutputStream

```java
public CipherOutputStream(OutputStream os, Cipher c)
```

Constructs a `CipherOutputStream` from an
 `OutputStream` and a `Cipher` object.
 
Note: if the specified output stream or cipher is
 `null`, `a NullPointerException` may be thrown later when
 they are used.

**参数**

- **os** — the `OutputStream` object
- **c** — an initialized `Cipher` object
