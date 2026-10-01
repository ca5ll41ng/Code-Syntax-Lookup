---
id: "java-en-function-encryptedprivatekeyinfo-encrypt"
language: "java"
lang: "en"
category: "function"
name: "EncryptedPrivateKeyInfo.encrypt"
signature: "public static EncryptedPrivateKeyInfo encrypt(BinaryEncodable be, char[] password, String algorithm, AlgorithmParameterSpec params, Provider provider)"
title: "EncryptedPrivateKeyInfo.encrypt"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo.encrypt

```java
public static EncryptedPrivateKeyInfo encrypt(BinaryEncodable be, char[] password, String algorithm, AlgorithmParameterSpec params, Provider provider)
```

Creates an `EncryptedPrivateKeyInfo` by encrypting the specified
 `BinaryEncodable`.  A valid password-based encryption (PBE) algorithm
 and password must be specified.

 

The format of the PBE algorithm string is described in the
 
 Cipher Algorithms section of the Java Security Standard Algorithm Names
 Specification.

**参数**

- **be** — the `BinaryEncodable` to encrypt. Supported types include `PrivateKey`, `KeyPair`, and `PKCS8EncodedKeySpec`.
- **password** — the password used for PBE encryption. This array is cloned before use.
- **algorithm** — the PBE encryption algorithm
- **params** — the `AlgorithmParameterSpec` used for encryption. If `null`, the provider’s default parameters are applied.
- **provider** — the `Provider` for `SecretKeyFactory` and `Cipher` operations. If `null`, the default provider list is used.

**返回**

- an `EncryptedPrivateKeyInfo`

**异常**

- **NullPointerException** — if `be`, `password`, or `algorithm` is `null`
- **IllegalArgumentException** — if `be` is an unsupported `BinaryEncodable` or has no encoding
- **CryptoException** — if an error occurs while generating the PBE key, if `algorithm` or `params` are not supported by any provider, or if an error occurs during encryption

> *Since 28*
