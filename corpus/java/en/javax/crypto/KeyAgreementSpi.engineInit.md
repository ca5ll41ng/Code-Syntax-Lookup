---
id: "java-en-function-keyagreementspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "KeyAgreementSpi.engineInit"
signature: "protected abstract void engineInit(Key key, SecureRandom random) throws InvalidKeyException"
title: "KeyAgreementSpi.engineInit"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyAgreementSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyAgreementSpi.engineInit

```java
protected abstract void engineInit(Key key, SecureRandom random) throws InvalidKeyException
```

Initializes this key agreement with the given key and source of
 randomness. The given key is required to contain all the algorithm
 parameters required for this key agreement.

 

 If the key agreement algorithm requires random bytes, it gets them
 from the given source of randomness, `random`.
 However, if the underlying
 algorithm implementation does not require any random bytes,
 `random` is ignored.

**参数**

- **key** — the party's private information. For example, in the case of the Diffie-Hellman key agreement, this would be the party's own Diffie-Hellman private key.
- **random** — the source of randomness

**异常**

- **InvalidKeyException** — if the given key is inappropriate for this key agreement, e.g., is of the wrong type or has an incompatible algorithm type.
