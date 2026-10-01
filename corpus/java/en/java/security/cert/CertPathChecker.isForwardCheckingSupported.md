---
id: "java-en-function-certpathchecker-isforwardcheckingsupported"
language: "java"
lang: "en"
category: "function"
name: "CertPathChecker.isForwardCheckingSupported"
signature: "boolean isForwardCheckingSupported()"
title: "CertPathChecker.isForwardCheckingSupported"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathChecker.isForwardCheckingSupported

```java
boolean isForwardCheckingSupported()
```

Indicates if forward checking is supported. Forward checking refers
 to the ability of the `CertPathChecker` to perform its checks
 when certificates are presented to the `check` method in the
 forward direction (from target to trust anchor).

**返回**

- `true` if forward checking is supported, `false` otherwise
