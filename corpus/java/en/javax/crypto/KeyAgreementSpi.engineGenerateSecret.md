---
id: "java-en-function-keyagreementspi-enginegeneratesecret"
language: "java"
lang: "en"
category: "function"
name: "KeyAgreementSpi.engineGenerateSecret"
signature: "protected abstract byte[] engineGenerateSecret() throws IllegalStateException"
title: "KeyAgreementSpi.engineGenerateSecret"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyAgreementSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyAgreementSpi.engineGenerateSecret

```java
protected abstract byte[] engineGenerateSecret() throws IllegalStateException
```

Generates the shared secret and returns it in a new buffer.

 

This method resets this `KeyAgreementSpi` object to the state
 that it was in after the most recent call to one of the `init`
 methods. After a call to `generateSecret`, the object can be reused
 for further key agreement operations by calling `doPhase` to supply
 new keys, and then calling `generateSecret` to produce a new
 secret. In this case, the private information and algorithm parameters
 supplied to `init` will be used for multiple key agreement
 operations. The `init` method can be called after
 `generateSecret` to change the private information used in
 subsequent operations.

**返回**

- the new buffer with the shared secret

**异常**

- **IllegalStateException** — if this key agreement has not been initialized or if `doPhase` has not been called to supply the keys for all parties in the agreement
