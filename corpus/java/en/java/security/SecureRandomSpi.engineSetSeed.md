---
id: "java-en-function-securerandomspi-enginesetseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandomSpi.engineSetSeed"
signature: "protected abstract void engineSetSeed(byte[] seed)"
title: "SecureRandomSpi.engineSetSeed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandomSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandomSpi.engineSetSeed

```java
protected abstract void engineSetSeed(byte[] seed)
```

Reseeds this random object with the given seed. The seed supplements,
 rather than replaces, the existing seed. Thus, repeated calls
 are guaranteed never to reduce randomness.

**参数**

- **seed** — the seed.
