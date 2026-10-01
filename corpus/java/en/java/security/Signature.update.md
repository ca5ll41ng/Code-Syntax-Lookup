---
id: "java-en-function-signature-update"
language: "java"
lang: "en"
category: "function"
name: "Signature.update"
signature: "public final void update(byte b) throws SignatureException"
title: "Signature.update"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.update

```java
public final void update(byte b) throws SignatureException
```

Updates the data to be signed or verified by a byte.

**参数**

- **b** — the byte to use for the update.

**异常**

- **SignatureException** — if this `Signature` object is not initialized properly.
