---
id: "java-en-function-signaturespi-enginesign"
language: "java"
lang: "en"
category: "function"
name: "SignatureSpi.engineSign"
signature: "protected abstract byte[] engineSign() throws SignatureException"
title: "SignatureSpi.engineSign"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi.engineSign

```java
protected abstract byte[] engineSign() throws SignatureException
```

Returns the signature bytes of all the data
 updated so far.
 The format of the signature depends on the underlying
 signature scheme.

**返回**

- the signature bytes of the signing operation's result.

**异常**

- **SignatureException** — if the engine is not initialized properly or if this signature algorithm is unable to process the input data provided.
