---
id: "java-en-function-x509certselector-setkeyusage"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setKeyUsage"
signature: "public void setKeyUsage(boolean[] keyUsage)"
title: "X509CertSelector.setKeyUsage"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setKeyUsage

```java
public void setKeyUsage(boolean[] keyUsage)
```

Sets the keyUsage criterion. The `X509Certificate`
 must allow the specified keyUsage values. If `null`, no
 keyUsage check will be done. Note that an `X509Certificate`
 that has no keyUsage extension implicitly allows all keyUsage values.
 

 Note that the boolean array supplied here is cloned to protect against
 subsequent modifications.

**参数**

- **keyUsage** — a boolean array in the same format as the boolean array returned by `getKeyUsage`. Or `null`.

**参见**

- #getKeyUsage
