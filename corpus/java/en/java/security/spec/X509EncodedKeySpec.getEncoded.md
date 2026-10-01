---
id: "java-en-function-x509encodedkeyspec-getencoded"
language: "java"
lang: "en"
category: "function"
name: "X509EncodedKeySpec.getEncoded"
signature: "public byte[] getEncoded()"
title: "X509EncodedKeySpec.getEncoded"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/X509EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509EncodedKeySpec.getEncoded

```java
public byte[] getEncoded()
```

Returns the key bytes, encoded according to the X.509 standard.

**返回**

- the X.509 encoding of the key. Returns a new array each time this method is called.
