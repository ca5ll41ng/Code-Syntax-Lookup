---
id: "java-en-function-crlselector-match"
language: "java"
lang: "en"
category: "function"
name: "CRLSelector.match"
signature: "boolean match(CRL crl)"
title: "CRLSelector.match"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CRLSelector.match

```java
boolean match(CRL crl)
```

Decides whether a `CRL` should be selected.

**参数**

- **crl** — the `CRL` to be checked

**返回**

- `true` if the `CRL` should be selected, `false` otherwise
