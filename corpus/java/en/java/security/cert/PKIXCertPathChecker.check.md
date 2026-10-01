---
id: "java-en-function-pkixcertpathchecker-check"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathChecker.check"
signature: "public abstract void check(Certificate cert, Collection<String> unresolvedCritExts) throws CertPathValidatorException"
title: "PKIXCertPathChecker.check"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathChecker.check

```java
public abstract void check(Certificate cert, Collection<String> unresolvedCritExts) throws CertPathValidatorException
```

Performs the check(s) on the specified certificate using its internal
 state and removes any critical extensions that it processes from the
 specified collection of OID strings that represent the unresolved
 critical extensions. The certificates are presented in the order
 specified by the `init` method.

**参数**

- **cert** — the `Certificate` to be checked
- **unresolvedCritExts** — a `Collection` of OID strings representing the current set of unresolved critical extensions

**异常**

- **CertPathValidatorException** — if the specified certificate does not pass the check
