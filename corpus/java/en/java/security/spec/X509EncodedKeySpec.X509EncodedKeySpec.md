---
id: "java-en-function-x509encodedkeyspec-x509encodedkeyspec"
language: "java"
lang: "en"
category: "function"
name: "X509EncodedKeySpec.X509EncodedKeySpec"
signature: "public X509EncodedKeySpec(byte[] encodedKey)"
title: "X509EncodedKeySpec.X509EncodedKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/X509EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509EncodedKeySpec.X509EncodedKeySpec

```java
public X509EncodedKeySpec(byte[] encodedKey)
```

Creates a new `X509EncodedKeySpec` with the given encoded key.

**参数**

- **encodedKey** — the key, which is assumed to be encoded according to the X.509 standard. The contents of the array are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `encodedKey` is null.
