---
id: "java-en-function-pemencoder-withencryption"
language: "java"
lang: "en"
category: "function"
name: "PEMEncoder.withEncryption"
signature: "public PEMEncoder withEncryption(char[] password)"
title: "PEMEncoder.withEncryption"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMEncoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMEncoder.withEncryption

```java
public PEMEncoder withEncryption(char[] password)
```

Returns a copy of this `PEMEncoder` configured to encrypt and
 encode using the specified password and the default encryption algorithm.

 

 Only `PrivateKey`, `KeyPair`, and
 `PKCS8EncodedKeySpec` objects can be encoded with this newly
 configured instance. Attempting to encode other `BinaryEncodable`
 objects will throw an `IllegalArgumentException`.

 

 To use non-default encryption parameters or a different provider, use
 an `encrypt` method in `EncryptedPrivateKeyInfo`, then pass
 the resulting object to `encode`.

 defines the default encryption algorithm. The `AlgorithmParameterSpec`
 defaults are determined by the provider.

**参数**

- **password** — the encryption password.  The array is cloned and stored in the new instance.

**返回**

- a new `PEMEncoder` instance configured for encryption

**异常**

- **NullPointerException** — if `password` is `null`
- **CryptoException** — if generating the encryption key fails
