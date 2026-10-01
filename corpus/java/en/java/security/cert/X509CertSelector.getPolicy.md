---
id: "java-en-function-x509certselector-getpolicy"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getPolicy"
signature: "public Set<String> getPolicy()"
title: "X509CertSelector.getPolicy"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getPolicy

```java
public Set<String> getPolicy()
```

Returns the policy criterion. The `X509Certificate` must
 include at least one of the specified policies in its certificate policies
 extension. If the `Set` returned is empty, then the
 `X509Certificate` must include at least some specified policy
 in its certificate policies extension. If the `Set` returned is
 `null`, no policy check will be performed.

**返回**

- an immutable `Set` of certificate policy OIDs in string format (or `null`)

**参见**

- #setPolicy
