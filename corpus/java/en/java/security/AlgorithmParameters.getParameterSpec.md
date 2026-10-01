---
id: "java-en-function-algorithmparameters-getparameterspec"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParameters.getParameterSpec"
signature: "public final <T extends AlgorithmParameterSpec> T getParameterSpec(Class<T> paramSpec) throws InvalidParameterSpecException"
title: "AlgorithmParameters.getParameterSpec"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameters.getParameterSpec

```java
public final <T extends AlgorithmParameterSpec> T getParameterSpec(Class<T> paramSpec) throws InvalidParameterSpecException
```

Returns a (transparent) specification of this parameter object.
 `paramSpec` identifies the specification class in which
 the parameters should be returned. It could, for example, be
 `DSAParameterSpec.class`, to indicate that the
 parameters should be returned in an instance of the
 `DSAParameterSpec` class.

**参数**

- **the** — type of the parameter specification to be returned
- **paramSpec** — the specification class in which the parameters should be returned.

**返回**

- the parameter specification.

**异常**

- **InvalidParameterSpecException** — if the requested parameter specification is inappropriate for this parameter object, or if this parameter object has not been initialized.
