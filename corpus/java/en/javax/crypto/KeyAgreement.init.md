---
id: "java-en-function-keyagreement-init"
language: "java"
lang: "en"
category: "function"
name: "KeyAgreement.init"
signature: "public final void init(Key key) throws InvalidKeyException"
title: "KeyAgreement.init"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyAgreement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyAgreement.init

```java
public final void init(Key key) throws InvalidKeyException
```

Initializes this key agreement with the given key, which is required to
 contain all the algorithm parameters required for this key agreement.

 

 If this key agreement requires any random bytes, it will get
 them using the
 `java.security.SecureRandom`
 implementation of the highest-priority
 installed provider as the source of randomness.
 (If none of the installed providers supply an implementation of
 `SecureRandom`, a system-provided source of randomness
 will be used.)

**参数**

- **key** — the party's private information. For example, in the case of the Diffie-Hellman key agreement, this would be the party's own Diffie-Hellman private key.

**异常**

- **InvalidKeyException** — if the given key is inappropriate for this key agreement, e.g., is of the wrong type or has an incompatible algorithm type.
