---
id: "java-en-function-x509certselector-setextendedkeyusage"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setExtendedKeyUsage"
signature: "public void setExtendedKeyUsage(Set<String> keyPurposeSet) throws IOException"
title: "X509CertSelector.setExtendedKeyUsage"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setExtendedKeyUsage

```java
public void setExtendedKeyUsage(Set<String> keyPurposeSet) throws IOException
```

Sets the extendedKeyUsage criterion. The `X509Certificate`
 must allow the specified key purposes in its extended key usage
 extension. If `keyPurposeSet` is empty or `null`,
 no extendedKeyUsage check will be done. Note that an
 `X509Certificate` that has no extendedKeyUsage extension
 implicitly allows all key purposes.
 

 Note that the `Set` is cloned to protect against
 subsequent modifications.

**参数**

- **keyPurposeSet** — a `Set` of key purpose OIDs in string format (or `null`). Each OID is represented by a set of nonnegative integers separated by periods.

**异常**

- **IOException** — if the OID is invalid, such as the first component being not 0, 1 or 2 or the second component being greater than 39.

**参见**

- #getExtendedKeyUsage
