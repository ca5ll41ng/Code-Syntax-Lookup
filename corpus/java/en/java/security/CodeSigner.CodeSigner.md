---
id: "java-en-function-codesigner-codesigner"
language: "java"
lang: "en"
category: "function"
name: "CodeSigner.CodeSigner"
signature: "public CodeSigner(CertPath signerCertPath, Timestamp timestamp)"
title: "CodeSigner.CodeSigner"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSigner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSigner.CodeSigner

```java
public CodeSigner(CertPath signerCertPath, Timestamp timestamp)
```

Constructs a `CodeSigner` object.

**参数**

- **signerCertPath** — The signer's certificate path. It must not be `null`.
- **timestamp** — A signature timestamp. If `null` then no timestamp was generated for the signature.

**异常**

- **NullPointerException** — if `signerCertPath` is `null`.
