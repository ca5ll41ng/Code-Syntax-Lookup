---
id: "java-en-function-algorithmparametergeneratorspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParameterGeneratorSpi.engineInit"
signature: "protected abstract void engineInit(int size, SecureRandom random)"
title: "AlgorithmParameterGeneratorSpi.engineInit"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameterGeneratorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameterGeneratorSpi.engineInit

```java
protected abstract void engineInit(int size, SecureRandom random)
```

Initializes this parameter generator for a certain size
 and source of randomness.

**参数**

- **size** — the size (number of bits).
- **random** — the source of randomness.
