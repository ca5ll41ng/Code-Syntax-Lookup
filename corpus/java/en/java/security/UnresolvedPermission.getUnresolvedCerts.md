---
id: "java-en-function-unresolvedpermission-getunresolvedcerts"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermission.getUnresolvedCerts"
signature: "public java.security.cert.Certificate[] getUnresolvedCerts()"
title: "UnresolvedPermission.getUnresolvedCerts"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission.getUnresolvedCerts

```java
public java.security.cert.Certificate[] getUnresolvedCerts()
```

Get the signer certificates (without any supporting chain)
 for the underlying permission that has not been resolved.

**返回**

- the signer certificates for the underlying permission that has not been resolved, or `null`, if there are no signer certificates. Returns a new array each time this method is called.

> *Since 1.5*
