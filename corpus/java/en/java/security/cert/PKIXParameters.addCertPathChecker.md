---
id: "java-en-function-pkixparameters-addcertpathchecker"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.addCertPathChecker"
signature: "public void addCertPathChecker(PKIXCertPathChecker checker)"
title: "PKIXParameters.addCertPathChecker"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.addCertPathChecker

```java
public void addCertPathChecker(PKIXCertPathChecker checker)
```

Adds a `PKIXCertPathChecker` to the list of certification
 path checkers. See the `setCertPathCheckers setCertPathCheckers`
 method for more details.
 

 Note that the `PKIXCertPathChecker` is cloned to protect
 against subsequent modifications.

**参数**

- **checker** — a `PKIXCertPathChecker` to add to the list of checks. If `null`, the checker is ignored (not added to list).
