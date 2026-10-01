---
id: "java-en-function-certpathvalidatorexception-getreason"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidatorException.getReason"
signature: "public Reason getReason()"
title: "CertPathValidatorException.getReason"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorException.getReason

```java
public Reason getReason()
```

Returns the reason that the validation failed. The reason is
 associated with the index of the certificate returned by
 `getIndex`.

**返回**

- the reason that the validation failed, or `BasicReason.UNSPECIFIED` if a reason has not been specified

> *Since 1.7*
