---
id: "java-en-function-certpathchecker-init"
language: "java"
lang: "en"
category: "function"
name: "CertPathChecker.init"
signature: "void init(boolean forward) throws CertPathValidatorException"
title: "CertPathChecker.init"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathChecker.init

```java
void init(boolean forward) throws CertPathValidatorException
```

Initializes the internal state of this `CertPathChecker`.

 

The `forward` flag specifies the order that certificates will
 be passed to the `check check` method (forward or reverse).

**参数**

- **forward** — the order that certificates are presented to the `check` method. If `true`, certificates are presented from target to trust anchor (forward); if `false`, from trust anchor to target (reverse).

**异常**

- **CertPathValidatorException** — if this `CertPathChecker` is unable to check certificates in the specified order
