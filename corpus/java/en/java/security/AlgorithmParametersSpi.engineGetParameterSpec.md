---
id: "java-en-function-algorithmparametersspi-enginegetparameterspec"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParametersSpi.engineGetParameterSpec"
signature: "protected abstract <T extends AlgorithmParameterSpec> T engineGetParameterSpec(Class<T> paramSpec) throws InvalidParameterSpecException"
title: "AlgorithmParametersSpi.engineGetParameterSpec"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParametersSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParametersSpi.engineGetParameterSpec

```java
protected abstract <T extends AlgorithmParameterSpec> T engineGetParameterSpec(Class<T> paramSpec) throws InvalidParameterSpecException
```

Returns a (transparent) specification of this parameters
 object.
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

- **InvalidParameterSpecException** — if the requested parameter specification is inappropriate for this parameter object.
