---
id: "java-en-function-x509certselector-getextendedkeyusage"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getExtendedKeyUsage"
signature: "public Set<String> getExtendedKeyUsage()"
title: "X509CertSelector.getExtendedKeyUsage"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getExtendedKeyUsage

```java
public Set<String> getExtendedKeyUsage()
```

Returns the extendedKeyUsage criterion. The `X509Certificate`
 must allow the specified key purposes in its extended key usage
 extension. If the `keyPurposeSet` returned is empty or
 `null`, no extendedKeyUsage check will be done. Note that an
 `X509Certificate` that has no extendedKeyUsage extension
 implicitly allows all key purposes.

**返回**

- an immutable `Set` of key purpose OIDs in string format (or `null`)

**参见**

- #setExtendedKeyUsage
