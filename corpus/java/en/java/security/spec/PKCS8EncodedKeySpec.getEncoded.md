---
id: "java-en-function-pkcs8encodedkeyspec-getencoded"
language: "java"
lang: "en"
category: "function"
name: "PKCS8EncodedKeySpec.getEncoded"
signature: "public byte[] getEncoded()"
title: "PKCS8EncodedKeySpec.getEncoded"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/PKCS8EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKCS8EncodedKeySpec.getEncoded

```java
public byte[] getEncoded()
```

Returns the key bytes, encoded according to the PKCS #8 standard.

**返回**

- the PKCS #8 encoding of the key. Returns a new array each time this method is called.
