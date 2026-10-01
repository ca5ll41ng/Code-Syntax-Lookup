---
id: "java-en-function-certpathvalidatorspi-enginevalidate"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidatorSpi.engineValidate"
signature: "public abstract CertPathValidatorResult engineValidate(CertPath certPath, CertPathParameters params) throws CertPathValidatorException, InvalidAlgorithmParameterException"
title: "CertPathValidatorSpi.engineValidate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorSpi.engineValidate

```java
public abstract CertPathValidatorResult engineValidate(CertPath certPath, CertPathParameters params) throws CertPathValidatorException, InvalidAlgorithmParameterException
```

Validates the specified certification path using the specified
 algorithm parameter set.
 

 The `CertPath` specified must be of a type that is
 supported by the validation algorithm, otherwise an
 `InvalidAlgorithmParameterException` will be thrown. For
 example, a `CertPathValidator` that implements the PKIX
 algorithm validates `CertPath` objects of type X.509.

**参数**

- **certPath** — the `CertPath` to be validated
- **params** — the algorithm parameters

**返回**

- the result of the validation algorithm

**异常**

- **CertPathValidatorException** — if the `CertPath` does not validate
- **InvalidAlgorithmParameterException** — if the specified parameters or the type of the specified `CertPath` are inappropriate for this `CertPathValidator`
