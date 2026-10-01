---
id: "java-en-function-pkcs8encodedkeyspec-pkcs8encodedkeyspec"
language: "java"
lang: "en"
category: "function"
name: "PKCS8EncodedKeySpec.PKCS8EncodedKeySpec"
signature: "public PKCS8EncodedKeySpec(byte[] encodedKey)"
title: "PKCS8EncodedKeySpec.PKCS8EncodedKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/PKCS8EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKCS8EncodedKeySpec.PKCS8EncodedKeySpec

```java
public PKCS8EncodedKeySpec(byte[] encodedKey)
```

Creates a new `PKCS8EncodedKeySpec` with the given encoded key.

**参数**

- **encodedKey** — the key, which is assumed to be encoded according to the PKCS #8 standard. The contents of the array are copied to protect against subsequent modification.

**异常**

- **NullPointerException** — if `encodedKey` is null.
