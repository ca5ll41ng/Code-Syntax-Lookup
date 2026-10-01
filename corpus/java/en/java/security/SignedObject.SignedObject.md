---
id: "java-en-function-signedobject-signedobject"
language: "java"
lang: "en"
category: "function"
name: "SignedObject.SignedObject"
signature: "public SignedObject(Serializable object, PrivateKey signingKey, Signature signingEngine) throws IOException, InvalidKeyException, SignatureException"
title: "SignedObject.SignedObject"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignedObject.SignedObject

```java
public SignedObject(Serializable object, PrivateKey signingKey, Signature signingEngine) throws IOException, InvalidKeyException, SignatureException
```

Constructs a `SignedObject` from any Serializable object.
 The given object is signed with the given signing key, using the
 designated signature engine.

**参数**

- **object** — the object to be signed.
- **signingKey** — the private key for signing.
- **signingEngine** — the signature signing engine.

**异常**

- **IOException** — if an error occurs during serialization
- **InvalidKeyException** — if the key is invalid.
- **SignatureException** — if signing fails.
