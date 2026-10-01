---
id: "java-en-function-signaturespi-engineupdate"
language: "java"
lang: "en"
category: "function"
name: "SignatureSpi.engineUpdate"
signature: "protected abstract void engineUpdate(byte b) throws SignatureException"
title: "SignatureSpi.engineUpdate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi.engineUpdate

```java
protected abstract void engineUpdate(byte b) throws SignatureException
```

Updates the data to be signed or verified
 using the specified byte.

**参数**

- **b** — the byte to use for the update.

**异常**

- **SignatureException** — if the engine is not initialized properly.
