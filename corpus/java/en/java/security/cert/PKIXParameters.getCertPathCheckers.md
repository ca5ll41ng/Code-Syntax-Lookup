---
id: "java-en-function-pkixparameters-getcertpathcheckers"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getCertPathCheckers"
signature: "public List<PKIXCertPathChecker> getCertPathCheckers()"
title: "PKIXParameters.getCertPathCheckers"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getCertPathCheckers

```java
public List<PKIXCertPathChecker> getCertPathCheckers()
```

Returns the `List` of certification path checkers.
 The returned `List` is immutable, and each
 `PKIXCertPathChecker` in the `List` is cloned
 to protect against subsequent modifications.

**返回**

- an immutable `List` of `PKIXCertPathChecker`s (may be empty, but not `null`)

**参见**

- #setCertPathCheckers
