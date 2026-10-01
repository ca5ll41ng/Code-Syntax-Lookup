---
id: "java-en-function-drbgparameters-instantiation"
language: "java"
lang: "en"
category: "function"
name: "DrbgParameters.instantiation"
signature: "public static Instantiation instantiation(int strength, Capability capability, byte[] personalizationString)"
title: "DrbgParameters.instantiation"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DrbgParameters.instantiation

```java
public static Instantiation instantiation(int strength, Capability capability, byte[] personalizationString)
```

Generates a `DrbgParameters.Instantiation` object.

**参数**

- **strength** — security strength in bits, -1 for default strength if used in `getInstance`.
- **capability** — capability
- **personalizationString** — personalization string as a byte array, can be `null`. The content of this byte array will be copied.

**返回**

- a new `Instantiation` object

**异常**

- **NullPointerException** — if `capability` is `null`
- **IllegalArgumentException** — if `strength` is less than -1
