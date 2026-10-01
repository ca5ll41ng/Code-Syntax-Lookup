---
id: "java-en-function-ecfieldfp-ecfieldfp"
language: "java"
lang: "en"
category: "function"
name: "ECFieldFp.ECFieldFp"
signature: "public ECFieldFp(BigInteger p)"
title: "ECFieldFp.ECFieldFp"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECFieldFp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECFieldFp.ECFieldFp

```java
public ECFieldFp(BigInteger p)
```

Creates an elliptic curve prime finite field
 with the specified prime `p`.

**参数**

- **p** — the prime.

**异常**

- **NullPointerException** — if `p` is null.
- **IllegalArgumentException** — if `p` is not positive.
