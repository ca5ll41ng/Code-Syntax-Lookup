---
id: "java-en-function-dsagenparameterspec-dsagenparameterspec"
language: "java"
lang: "en"
category: "function"
name: "DSAGenParameterSpec.DSAGenParameterSpec"
signature: "public DSAGenParameterSpec(int primePLen, int subprimeQLen)"
title: "DSAGenParameterSpec.DSAGenParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/DSAGenParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DSAGenParameterSpec.DSAGenParameterSpec

```java
public DSAGenParameterSpec(int primePLen, int subprimeQLen)
```

Creates a domain parameter specification for DSA parameter
 generation using `primePLen` and `subprimeQLen`.
 The value of `subprimeQLen` is also used as the default
 length of the domain parameter seed in bits.

**参数**

- **primePLen** — the desired length of the prime P in bits.
- **subprimeQLen** — the desired length of the sub-prime Q in bits.

**异常**

- **IllegalArgumentException** — if `primePLen` or `subprimeQLen` is illegal per the specification of FIPS 186-3.
