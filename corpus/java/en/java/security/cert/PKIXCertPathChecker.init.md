---
id: "java-en-function-pkixcertpathchecker-init"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathChecker.init"
signature: "public abstract void init(boolean forward) throws CertPathValidatorException"
title: "PKIXCertPathChecker.init"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathChecker.init

```java
public abstract void init(boolean forward) throws CertPathValidatorException
```

Initializes the internal state of this `PKIXCertPathChecker`.
 

 The `forward` flag specifies the order that
 certificates will be passed to the `check check` method
 (forward or reverse). A `PKIXCertPathChecker` **must**
 support reverse checking and **may** support forward checking.

**参数**

- **forward** — the order that certificates are presented to the `check` method. If `true`, certificates are presented from target to most-trusted CA (forward); if `false`, from most-trusted CA to target (reverse).

**异常**

- **CertPathValidatorException** — if this `PKIXCertPathChecker` is unable to check certificates in the specified order; it should never be thrown if the forward flag is false since reverse checking must be supported
