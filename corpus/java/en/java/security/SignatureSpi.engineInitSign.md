---
id: "java-en-function-signaturespi-engineinitsign"
language: "java"
lang: "en"
category: "function"
name: "SignatureSpi.engineInitSign"
signature: "protected abstract void engineInitSign(PrivateKey privateKey) throws InvalidKeyException"
title: "SignatureSpi.engineInitSign"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi.engineInitSign

```java
protected abstract void engineInitSign(PrivateKey privateKey) throws InvalidKeyException
```

Initializes this `Signature` object with the specified
 private key for signing operations.

**参数**

- **privateKey** — the private key of the identity whose signature will be generated.

**异常**

- **InvalidKeyException** — if the key is improperly encoded, parameters are missing, and so on.
