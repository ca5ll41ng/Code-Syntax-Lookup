---
id: "java-en-function-drbgparameters-nextbytes"
language: "java"
lang: "en"
category: "function"
name: "DrbgParameters.nextBytes"
signature: "public static NextBytes nextBytes(int strength, boolean predictionResistance, byte[] additionalInput)"
title: "DrbgParameters.nextBytes"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DrbgParameters.nextBytes

```java
public static NextBytes nextBytes(int strength, boolean predictionResistance, byte[] additionalInput)
```

Generates a `NextBytes` object.

**参数**

- **strength** — requested security strength in bits. If set to -1, the effective strength will be used.
- **predictionResistance** — prediction resistance requested
- **additionalInput** — additional input, can be `null`. The content of this byte array will be copied.

**返回**

- a new `NextBytes` object

**异常**

- **IllegalArgumentException** — if `strength` is less than -1
