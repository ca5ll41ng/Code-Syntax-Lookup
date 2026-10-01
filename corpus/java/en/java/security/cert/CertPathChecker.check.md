---
id: "java-en-function-certpathchecker-check"
language: "java"
lang: "en"
category: "function"
name: "CertPathChecker.check"
signature: "void check(Certificate cert) throws CertPathValidatorException"
title: "CertPathChecker.check"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathChecker.check

```java
void check(Certificate cert) throws CertPathValidatorException
```

Performs the check(s) on the specified certificate using its internal
 state. The certificates are presented in the order specified by the
 `init` method.

**参数**

- **cert** — the `Certificate` to be checked

**异常**

- **CertPathValidatorException** — if the specified certificate does not pass the check
