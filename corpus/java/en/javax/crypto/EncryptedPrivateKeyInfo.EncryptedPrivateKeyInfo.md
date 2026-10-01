---
id: "java-en-function-encryptedprivatekeyinfo-encryptedprivatekeyinfo"
language: "java"
lang: "en"
category: "function"
name: "EncryptedPrivateKeyInfo.EncryptedPrivateKeyInfo"
signature: "public EncryptedPrivateKeyInfo(byte[] encoded) throws IOException"
title: "EncryptedPrivateKeyInfo.EncryptedPrivateKeyInfo"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo.EncryptedPrivateKeyInfo

```java
public EncryptedPrivateKeyInfo(byte[] encoded) throws IOException
```

Constructs an `EncryptedPrivateKeyInfo` from a given encrypted
 PKCS#8 ASN.1 encoding.

**参数**

- **encoded** — the ASN.1 encoding of this object. The contents of the array are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `encoded` is `null`.
- **IOException** — if error occurs when parsing the ASN.1 encoding.
