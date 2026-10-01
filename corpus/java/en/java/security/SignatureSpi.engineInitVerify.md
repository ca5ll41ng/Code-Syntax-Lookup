---
id: "java-en-function-signaturespi-engineinitverify"
language: "java"
lang: "en"
category: "function"
name: "SignatureSpi.engineInitVerify"
signature: "protected abstract void engineInitVerify(PublicKey publicKey) throws InvalidKeyException"
title: "SignatureSpi.engineInitVerify"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi.engineInitVerify

```java
protected abstract void engineInitVerify(PublicKey publicKey) throws InvalidKeyException
```

Initializes this `Signature` object with the specified
 public key for verification operations.

**参数**

- **publicKey** — the public key of the identity whose signature is going to be verified.

**异常**

- **InvalidKeyException** — if the key is improperly encoded, parameters are missing, and so on.
