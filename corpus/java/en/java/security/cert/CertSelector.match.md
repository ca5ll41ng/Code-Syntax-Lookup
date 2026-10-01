---
id: "java-en-function-certselector-match"
language: "java"
lang: "en"
category: "function"
name: "CertSelector.match"
signature: "boolean match(Certificate cert)"
title: "CertSelector.match"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertSelector.match

```java
boolean match(Certificate cert)
```

Decides whether a `Certificate` should be selected.

**参数**

- **cert** — the `Certificate` to be checked

**返回**

- `true` if the `Certificate` should be selected, `false` otherwise
