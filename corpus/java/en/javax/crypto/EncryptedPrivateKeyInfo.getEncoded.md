---
id: "java-en-function-encryptedprivatekeyinfo-getencoded"
language: "java"
lang: "en"
category: "function"
name: "EncryptedPrivateKeyInfo.getEncoded"
signature: "public byte[] getEncoded() throws IOException"
title: "EncryptedPrivateKeyInfo.getEncoded"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo.getEncoded

```java
public byte[] getEncoded() throws IOException
```

Returns the ASN.1 encoding of this object.

**返回**

- the ASN.1 encoding. Returns a new array each time this method is called.

**异常**

- **IOException** — if error occurs when constructing its ASN.1 encoding.
