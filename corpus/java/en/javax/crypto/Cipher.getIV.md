---
id: "java-en-function-cipher-getiv"
language: "java"
lang: "en"
category: "function"
name: "Cipher.getIV"
signature: "public final byte[] getIV()"
title: "Cipher.getIV"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.getIV

```java
public final byte[] getIV()
```

Returns the initialization vector (IV) in a new buffer.

 

This is useful in the case where a random IV was created,
 or in the context of password-based encryption or
 decryption, where the IV is derived from a user-supplied password.

**返回**

- the initialization vector in a new buffer, or `null` if this cipher does not use an IV, or if the IV has not yet been set.
