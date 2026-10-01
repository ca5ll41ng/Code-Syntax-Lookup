---
id: "java-en-function-x509crlentry-getrevocationreason"
language: "java"
lang: "en"
category: "function"
name: "X509CRLEntry.getRevocationReason"
signature: "public CRLReason getRevocationReason()"
title: "X509CRLEntry.getRevocationReason"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLEntry.getRevocationReason

```java
public CRLReason getRevocationReason()
```

Returns the reason the certificate has been revoked, as specified
 in the Reason Code extension of this CRL entry.

**返回**

- the reason the certificate has been revoked, or `null` if this CRL entry does not have a Reason Code extension

> *Since 1.7*
