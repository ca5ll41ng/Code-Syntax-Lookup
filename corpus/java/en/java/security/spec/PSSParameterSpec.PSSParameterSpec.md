---
id: "java-en-function-pssparameterspec-pssparameterspec"
language: "java"
lang: "en"
category: "function"
name: "PSSParameterSpec.PSSParameterSpec"
signature: "public PSSParameterSpec(String mdName, String mgfName, AlgorithmParameterSpec mgfSpec, int saltLen, int trailerField)"
title: "PSSParameterSpec.PSSParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/PSSParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PSSParameterSpec.PSSParameterSpec

```java
public PSSParameterSpec(String mdName, String mgfName, AlgorithmParameterSpec mgfSpec, int saltLen, int trailerField)
```

Creates a new `PSSParameterSpec` as defined in
 the PKCS #1 standard using the specified message digest,
 mask generation function, parameters for mask generation
 function, salt length, and trailer field values.

**参数**

- **mdName** — the algorithm name of the hash function. See the PSSParameterSpec section of the  Java Security Standard Algorithm Names Specification for information about standard names for the hash function.
- **mgfName** — the algorithm name of the mask generation function. See the PSSParameterSpec section of the  Java Security Standard Algorithm Names Specification for information about standard names for the mask generation function.
- **mgfSpec** — the parameters for the mask generation function. If null is specified, null will be returned by getMGFParameters().
- **saltLen** — the length of salt in bytes
- **trailerField** — the value of the trailer field

**异常**

- **NullPointerException** — if `mdName`, or `mgfName` is null
- **IllegalArgumentException** — if `saltLen` or `trailerField` is less than 0

> *Since 1.5*
