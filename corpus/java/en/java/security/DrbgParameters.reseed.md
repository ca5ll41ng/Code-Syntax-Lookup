---
id: "java-en-function-drbgparameters-reseed"
language: "java"
lang: "en"
category: "function"
name: "DrbgParameters.reseed"
signature: "public static Reseed reseed( boolean predictionResistance, byte[] additionalInput)"
title: "DrbgParameters.reseed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DrbgParameters.reseed

```java
public static Reseed reseed( boolean predictionResistance, byte[] additionalInput)
```

Generates a `Reseed` object.

**参数**

- **predictionResistance** — prediction resistance requested
- **additionalInput** — additional input, can be `null`. The content of this byte array will be copied.

**返回**

- a new `Reseed` object
