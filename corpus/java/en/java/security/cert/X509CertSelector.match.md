---
id: "java-en-function-x509certselector-match"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.match"
signature: "public boolean match(Certificate cert)"
title: "X509CertSelector.match"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.match

```java
public boolean match(Certificate cert)
```

Decides whether a `Certificate` should be selected.

**参数**

- **cert** — the `Certificate` to be checked

**返回**

- `true` if the `Certificate` should be selected, `false` otherwise
