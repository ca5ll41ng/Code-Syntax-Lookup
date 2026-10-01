---
id: "java-en-function-encryptedprivatekeyinfo-getkey"
language: "java"
lang: "en"
category: "function"
name: "EncryptedPrivateKeyInfo.getKey"
signature: "public PrivateKey getKey(char[] password) throws NoSuchAlgorithmException, InvalidKeyException"
title: "EncryptedPrivateKeyInfo.getKey"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo.getKey

```java
public PrivateKey getKey(char[] password) throws NoSuchAlgorithmException, InvalidKeyException
```

Extracts and returns the enclosed `PrivateKey` using the
 specified password.

**参数**

- **password** — the password used for PBE decryption. The array is cloned before use.

**返回**

- the decrypted `PrivateKey`

**异常**

- **NullPointerException** — if `password` is `null`
- **NoSuchAlgorithmException** — if the decryption algorithm is unsupported
- **InvalidKeyException** — if an error occurs during parsing, decryption, or key generation

> *Since 28*
