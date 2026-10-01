---
id: "java-en-function-encryptedprivatekeyinfo-getkeypair"
language: "java"
lang: "en"
category: "function"
name: "EncryptedPrivateKeyInfo.getKeyPair"
signature: "public KeyPair getKeyPair(char[] password) throws NoSuchAlgorithmException, InvalidKeyException"
title: "EncryptedPrivateKeyInfo.getKeyPair"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo.getKeyPair

```java
public KeyPair getKeyPair(char[] password) throws NoSuchAlgorithmException, InvalidKeyException
```

Extracts and returns the enclosed `KeyPair` using the specified
 password. If the encoded data does not contain both a public and private
 key, an `InvalidKeyException` is thrown.

**参数**

- **password** — the password used for PBE decryption. The array is cloned before use.

**返回**

- a decrypted `KeyPair`

**异常**

- **NullPointerException** — if `password` is `null`
- **NoSuchAlgorithmException** — if the decryption algorithm is unsupported
- **InvalidKeyException** — if the encoded data lacks a public key, or if an error occurs during parsing, decryption, or key generation

> *Since 28*
