---
id: "java-en-function-encapsulator-encapsulate"
language: "java"
lang: "en"
category: "function"
name: "Encapsulator.encapsulate"
signature: "public Encapsulated encapsulate()"
title: "Encapsulator.encapsulate"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encapsulator.encapsulate

```java
public Encapsulated encapsulate()
```

The key encapsulation function.
 

 This method is equivalent to
 `encapsulate(0, secretSize(), "Generic")`. This combination
 of arguments must be supported by every implementation.
 

 The generated secret key is usually passed to a key derivation
 function (KDF) as the input keying material.

**返回**

- a `Encapsulated` object containing the shared secret, key encapsulation message, and optional parameters. The shared secret is a `SecretKey` containing all of the bytes of the secret, and an algorithm name of "Generic".
