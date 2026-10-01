---
id: "java-en-function-mgf1parameterspec-mgf1parameterspec"
language: "java"
lang: "en"
category: "function"
name: "MGF1ParameterSpec.MGF1ParameterSpec"
signature: "public MGF1ParameterSpec(String mdName)"
title: "MGF1ParameterSpec.MGF1ParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/MGF1ParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MGF1ParameterSpec.MGF1ParameterSpec

```java
public MGF1ParameterSpec(String mdName)
```

Constructs a parameter set for mask generation function MGF1
 as defined in the PKCS #1 standard.

**参数**

- **mdName** — the algorithm name for the message digest used in this mask generation function MGF1.

**异常**

- **NullPointerException** — if `mdName` is null.
