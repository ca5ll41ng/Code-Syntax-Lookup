---
id: "java-en-function-pkixparameters-isrevocationenabled"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.isRevocationEnabled"
signature: "public boolean isRevocationEnabled()"
title: "PKIXParameters.isRevocationEnabled"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.isRevocationEnabled

```java
public boolean isRevocationEnabled()
```

Checks the RevocationEnabled flag. If this flag is true, the default
 revocation checking mechanism of the underlying PKIX service provider
 will be used, unless a `PKIXRevocationChecker` is passed in as
 a `CertPathChecker`. If this flag is false, the default revocation
 checking mechanism will be disabled (not used). See the `setRevocationEnabled setRevocationEnabled` method for more details on
 setting the value of this flag.

**返回**

- the current value of the RevocationEnabled flag
