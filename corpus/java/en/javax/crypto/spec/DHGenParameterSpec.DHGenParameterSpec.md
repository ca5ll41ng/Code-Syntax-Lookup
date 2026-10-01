---
id: "java-en-function-dhgenparameterspec-dhgenparameterspec"
language: "java"
lang: "en"
category: "function"
name: "DHGenParameterSpec.DHGenParameterSpec"
signature: "public DHGenParameterSpec(int primeSize, int exponentSize)"
title: "DHGenParameterSpec.DHGenParameterSpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/DHGenParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DHGenParameterSpec.DHGenParameterSpec

```java
public DHGenParameterSpec(int primeSize, int exponentSize)
```

Constructs a parameter set for the generation of Diffie-Hellman
 (system) parameters. The constructed parameter set can be used to
 initialize an
 `java.security.AlgorithmParameterGenerator AlgorithmParameterGenerator`
 object for the generation of Diffie-Hellman parameters.

**参数**

- **primeSize** — the size (in bits) of the prime modulus.
- **exponentSize** — the size (in bits) of the random exponent.
