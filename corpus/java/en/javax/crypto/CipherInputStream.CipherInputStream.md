---
id: "java-en-function-cipherinputstream-cipherinputstream"
language: "java"
lang: "en"
category: "function"
name: "CipherInputStream.CipherInputStream"
signature: "public CipherInputStream(InputStream is, Cipher c)"
title: "CipherInputStream.CipherInputStream"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherInputStream.CipherInputStream

```java
public CipherInputStream(InputStream is, Cipher c)
```

Constructs a `CipherInputStream` from an
 `InputStream` and a `Cipher` object.
 
Note: if the specified input stream or cipher is
 `null`, a `NullPointerException` may be thrown later when
 they are used.

**参数**

- **is** — the to-be-processed input stream
- **c** — an initialized `Cipher` object
