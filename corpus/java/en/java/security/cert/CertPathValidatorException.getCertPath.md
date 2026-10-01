---
id: "java-en-function-certpathvalidatorexception-getcertpath"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidatorException.getCertPath"
signature: "public CertPath getCertPath()"
title: "CertPathValidatorException.getCertPath"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorException.getCertPath

```java
public CertPath getCertPath()
```

Returns the certification path that was being validated when
 the exception was thrown.

**返回**

- the `CertPath` that was being validated when the exception was thrown (or `null` if not specified)
