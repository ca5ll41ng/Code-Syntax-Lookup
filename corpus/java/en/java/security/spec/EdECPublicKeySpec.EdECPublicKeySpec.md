---
id: "java-en-function-edecpublickeyspec-edecpublickeyspec"
language: "java"
lang: "en"
category: "function"
name: "EdECPublicKeySpec.EdECPublicKeySpec"
signature: "public EdECPublicKeySpec(NamedParameterSpec params, EdECPoint point)"
title: "EdECPublicKeySpec.EdECPublicKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdECPublicKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPublicKeySpec.EdECPublicKeySpec

```java
public EdECPublicKeySpec(NamedParameterSpec params, EdECPoint point)
```

Construct a public key spec using the supplied parameters and
 point.

**参数**

- **params** — the algorithm parameters.
- **point** — the point representing the public key.

**异常**

- **NullPointerException** — if `params` or `point` is null.
