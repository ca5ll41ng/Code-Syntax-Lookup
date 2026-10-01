---
id: "java-en-function-secretkeyfactoryspi-enginegeneratesecret"
language: "java"
lang: "en"
category: "function"
name: "SecretKeyFactorySpi.engineGenerateSecret"
signature: "protected abstract SecretKey engineGenerateSecret(KeySpec keySpec) throws InvalidKeySpecException"
title: "SecretKeyFactorySpi.engineGenerateSecret"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SecretKeyFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeyFactorySpi.engineGenerateSecret

```java
protected abstract SecretKey engineGenerateSecret(KeySpec keySpec) throws InvalidKeySpecException
```

Generates a `SecretKey` object from the
 provided key specification (key material).

**参数**

- **keySpec** — the specification (key material) of the secret key

**返回**

- the secret key

**异常**

- **InvalidKeySpecException** — if the given key specification is inappropriate for this secret key factory to produce a secret key.
