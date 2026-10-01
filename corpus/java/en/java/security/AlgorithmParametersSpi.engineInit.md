---
id: "java-en-function-algorithmparametersspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParametersSpi.engineInit"
signature: "protected abstract void engineInit(AlgorithmParameterSpec paramSpec) throws InvalidParameterSpecException"
title: "AlgorithmParametersSpi.engineInit"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParametersSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParametersSpi.engineInit

```java
protected abstract void engineInit(AlgorithmParameterSpec paramSpec) throws InvalidParameterSpecException
```

Initializes this parameters object using the parameters
 specified in `paramSpec`.

**参数**

- **paramSpec** — the parameter specification.

**异常**

- **InvalidParameterSpecException** — if the given parameter specification is inappropriate for the initialization of this parameter object.
