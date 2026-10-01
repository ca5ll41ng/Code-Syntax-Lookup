---
id: "java-en-function-decapsulator-decapsulate"
language: "java"
lang: "en"
category: "function"
name: "Decapsulator.decapsulate"
signature: "public SecretKey decapsulate(byte[] encapsulation) throws DecapsulateException"
title: "Decapsulator.decapsulate"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Decapsulator.decapsulate

```java
public SecretKey decapsulate(byte[] encapsulation) throws DecapsulateException
```

The key decapsulation function.
 

 This method is equivalent to
 `decapsulate(encapsulation, 0, secretSize(), "Generic")`. This
 combination of arguments must be supported by every implementation.
 

 The generated secret key is usually passed to a key derivation
 function (KDF) as the input keying material.

**参数**

- **encapsulation** — the key encapsulation message from the sender. The size must be equal to the value returned by `encapsulationSize`, or a `DecapsulateException` will be thrown.

**返回**

- the shared secret as a `SecretKey` with an algorithm name of "Generic"

**异常**

- **DecapsulateException** — if an error occurs during the decapsulation process
- **NullPointerException** — if `encapsulation` is `null`
