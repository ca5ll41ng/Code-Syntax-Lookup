---
id: "java-en-function-pkixcertpathchecker-isforwardcheckingsupported"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathChecker.isForwardCheckingSupported"
signature: "public abstract boolean isForwardCheckingSupported()"
title: "PKIXCertPathChecker.isForwardCheckingSupported"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathChecker.isForwardCheckingSupported

```java
public abstract boolean isForwardCheckingSupported()
```

Indicates if forward checking is supported. Forward checking refers
 to the ability of the `PKIXCertPathChecker` to perform
 its checks when certificates are presented to the `check`
 method in the forward direction (from target to most-trusted CA).

**返回**

- `true` if forward checking is supported, `false` otherwise
