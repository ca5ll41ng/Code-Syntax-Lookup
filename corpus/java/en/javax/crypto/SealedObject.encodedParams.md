---
id: "java-en-function-sealedobject-encodedparams"
language: "java"
lang: "en"
category: "function"
name: "SealedObject.encodedParams"
signature: "protected byte[] encodedParams = null"
title: "SealedObject.encodedParams"
directive: "field"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SealedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SealedObject.encodedParams

```java
protected byte[] encodedParams = null
```

The cryptographic parameters used by the sealing `Cipher` object,
 encoded in the default format.
 

 That is, `Cipher.getParameters().getEncoded()`.
