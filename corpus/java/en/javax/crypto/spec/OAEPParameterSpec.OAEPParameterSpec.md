---
id: "java-en-function-oaepparameterspec-oaepparameterspec"
language: "java"
lang: "en"
category: "function"
name: "OAEPParameterSpec.OAEPParameterSpec"
signature: "public OAEPParameterSpec(String mdName, String mgfName, AlgorithmParameterSpec mgfSpec, PSource pSrc)"
title: "OAEPParameterSpec.OAEPParameterSpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/OAEPParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OAEPParameterSpec.OAEPParameterSpec

```java
public OAEPParameterSpec(String mdName, String mgfName, AlgorithmParameterSpec mgfSpec, PSource pSrc)
```

Constructs a parameter set for OAEP padding as defined in
 the PKCS #1 standard using the specified message digest
 algorithm `mdName`, mask generation function
 algorithm `mgfName`, parameters for the mask
 generation function `mgfSpec`, and source of
 the encoding input P `pSrc`.

**参数**

- **mdName** — the algorithm name for the message digest
- **mgfName** — the algorithm name for the mask generation function
- **mgfSpec** — the parameters for the mask generation function; if `null` is specified, `null` will be returned by `getMGFParameters`
- **pSrc** — the source of the encoding input P

**异常**

- **NullPointerException** — if `mdName`, `mgfName`, or `pSrc` is `null`
