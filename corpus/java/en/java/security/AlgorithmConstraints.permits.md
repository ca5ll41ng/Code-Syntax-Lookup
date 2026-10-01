---
id: "java-en-function-algorithmconstraints-permits"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmConstraints.permits"
signature: "boolean permits(Set<CryptoPrimitive> primitives, String algorithm, AlgorithmParameters parameters)"
title: "AlgorithmConstraints.permits"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmConstraints.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmConstraints.permits

```java
boolean permits(Set<CryptoPrimitive> primitives, String algorithm, AlgorithmParameters parameters)
```

Determines whether an algorithm is granted permission for the
 specified cryptographic primitives.

**参数**

- **primitives** — a set of cryptographic primitives
- **algorithm** — the algorithm name
- **parameters** — the algorithm parameters, or `null` if no additional parameters

**返回**

- `true` if the algorithm is permitted and can be used for all the specified cryptographic primitives

**异常**

- **IllegalArgumentException** — if primitives or algorithm is `null` or empty
