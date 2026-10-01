---
id: "java-en-function-encapsulatorspi-engineencapsulate"
language: "java"
lang: "en"
category: "function"
name: "EncapsulatorSpi.engineEncapsulate"
signature: "KEM.Encapsulated engineEncapsulate(int from, int to, String algorithm)"
title: "EncapsulatorSpi.engineEncapsulate"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEMSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncapsulatorSpi.engineEncapsulate

```java
KEM.Encapsulated engineEncapsulate(int from, int to, String algorithm)
```

The key encapsulation function.
 

 Each invocation of this method must generate a new secret key and key
 encapsulation message that is returned in an `KEM.Encapsulated` object.
 

 An implementation must support the case where `from` is 0,
 `to` is the same as the return value of `secretSize()`,
 and `algorithm` is "Generic".

**参数**

- **from** — the initial index of the shared secret byte array to be returned, inclusive
- **to** — the final index of the shared secret byte array to be returned, exclusive
- **algorithm** — the algorithm name for the secret key that is returned. See the SecretKey Algorithms section in the  Java Security Standard Algorithm Names Specification for information about standard secret key algorithm names. Specify "Generic" if the output will be used as the input keying material of a key derivation function (KDF).

**返回**

- an `KEM.Encapsulated` object containing a portion of the shared secret as a key with the specified algorithm, key encapsulation message, and optional parameters.

**异常**

- **IndexOutOfBoundsException** — if `from < 0`, `from > to`, or `to > secretSize()`
- **NullPointerException** — if `algorithm` is `null`
- **UnsupportedOperationException** — if the combination of `from`, `to`, and `algorithm` is not supported by the encapsulator

**参见**

- KEM.Encapsulated
- KEM.Encapsulator#encapsulate(int, int, String)
