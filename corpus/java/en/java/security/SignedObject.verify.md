---
id: "java-en-function-signedobject-verify"
language: "java"
lang: "en"
category: "function"
name: "SignedObject.verify"
signature: "public boolean verify(PublicKey verificationKey, Signature verificationEngine) throws InvalidKeyException, SignatureException"
title: "SignedObject.verify"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignedObject.verify

```java
public boolean verify(PublicKey verificationKey, Signature verificationEngine) throws InvalidKeyException, SignatureException
```

Verifies that the signature in this `SignedObject` is the valid
 signature for the object stored inside, with the given
 verification key, using the designated verification engine.

**参数**

- **verificationKey** — the public key for verification.
- **verificationEngine** — the signature verification engine.

**返回**

- `true` if the signature is valid, `false` otherwise

**异常**

- **SignatureException** — if signature verification failed (an exception prevented the signature verification engine from completing normally).
- **InvalidKeyException** — if the verification key is invalid.
