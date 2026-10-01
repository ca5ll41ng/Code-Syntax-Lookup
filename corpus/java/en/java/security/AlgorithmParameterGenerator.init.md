---
id: "java-en-function-algorithmparametergenerator-init"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParameterGenerator.init"
signature: "public final void init(int size)"
title: "AlgorithmParameterGenerator.init"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameterGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameterGenerator.init

```java
public final void init(int size)
```

Initializes this parameter generator for a certain size.
 To create the parameters, the `SecureRandom`
 implementation of the highest-priority installed provider is used as
 the source of randomness.
 (If none of the installed providers supply an implementation of
 `SecureRandom`, a system-provided source of randomness is
 used.)

**参数**

- **size** — the size (number of bits).
