---
id: "java-en-function-x509certselector-getkeyusage"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getKeyUsage"
signature: "public boolean[] getKeyUsage()"
title: "X509CertSelector.getKeyUsage"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getKeyUsage

```java
public boolean[] getKeyUsage()
```

Returns the keyUsage criterion. The `X509Certificate`
 must allow the specified keyUsage values. If null, no keyUsage
 check will be done.
 

 Note that the boolean array returned is cloned to protect against
 subsequent modifications.

**返回**

- a boolean array in the same format as the boolean array returned by `getKeyUsage`. Or `null`.

**参见**

- #setKeyUsage
