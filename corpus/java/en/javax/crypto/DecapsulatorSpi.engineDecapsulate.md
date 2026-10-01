---
id: "java-en-function-decapsulatorspi-enginedecapsulate"
language: "java"
lang: "en"
category: "function"
name: "DecapsulatorSpi.engineDecapsulate"
signature: "SecretKey engineDecapsulate(byte[] encapsulation, int from, int to, String algorithm) throws DecapsulateException"
title: "DecapsulatorSpi.engineDecapsulate"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KEMSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecapsulatorSpi.engineDecapsulate

```java
SecretKey engineDecapsulate(byte[] encapsulation, int from, int to, String algorithm) throws DecapsulateException
```

The key decapsulation function.
 

 An invocation of this method recovers the secret key from the key
 encapsulation message.
 

 An implementation must support the case where `from` is 0,
 `to` is the same as the return value of `secretSize()`,
 and `algorithm` is "Generic".

**参数**

- **encapsulation** — the key encapsulation message from the sender. The size must be equal to the value returned by `engineEncapsulationSize` ()}, or a `DecapsulateException` must be thrown.
- **from** — the initial index of the shared secret byte array to be returned, inclusive
- **to** — the final index of the shared secret byte array to be returned, exclusive
- **algorithm** — the algorithm name for the secret key that is returned. See the SecretKey Algorithms section in the  Java Security Standard Algorithm Names Specification for information about standard secret key algorithm names. Specify "Generic" if the output will be used as the input keying material of a key derivation function (KDF).

**返回**

- a portion of the shared secret as a `SecretKey` with the specified algorithm

**异常**

- **DecapsulateException** — if an error occurs during the decapsulation process
- **IndexOutOfBoundsException** — if `from < 0`, `from > to`, or `to > secretSize()`
- **NullPointerException** — if `encapsulation` or `algorithm` is `null`
- **UnsupportedOperationException** — if the combination of `from`, `to`, and `algorithm` is not supported by the decapsulator

**参见**

- KEM.Decapsulator#decapsulate(byte[], int, int, String)
