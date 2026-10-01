---
id: "java-en-function-pkixparameters-setsigprovider"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setSigProvider"
signature: "public void setSigProvider(String sigProvider)"
title: "PKIXParameters.setSigProvider"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setSigProvider

```java
public void setSigProvider(String sigProvider)
```

Sets the signature provider's name. The specified provider will be
 preferred when creating `java.security.Signature Signature`
 objects. If `null` or not set, the first provider found
 supporting the algorithm will be used.

**参数**

- **sigProvider** — the signature provider's name (or `null`)

**参见**

- #getSigProvider
