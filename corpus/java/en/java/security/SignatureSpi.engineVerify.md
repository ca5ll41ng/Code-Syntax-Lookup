---
id: "java-en-function-signaturespi-engineverify"
language: "java"
lang: "en"
category: "function"
name: "SignatureSpi.engineVerify"
signature: "protected abstract boolean engineVerify(byte[] sigBytes) throws SignatureException"
title: "SignatureSpi.engineVerify"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi.engineVerify

```java
protected abstract boolean engineVerify(byte[] sigBytes) throws SignatureException
```

Verifies the passed-in signature.

**参数**

- **sigBytes** — the signature bytes to be verified.

**返回**

- `true` if the signature was verified, `false` if not.

**异常**

- **SignatureException** — if the engine is not initialized properly, the passed-in signature is improperly encoded or of the wrong type, if this signature algorithm is unable to process the input data provided, etc.
