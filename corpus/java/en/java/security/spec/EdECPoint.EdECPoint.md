---
id: "java-en-function-edecpoint-edecpoint"
language: "java"
lang: "en"
category: "function"
name: "EdECPoint.EdECPoint"
signature: "public EdECPoint(boolean xOdd, BigInteger y)"
title: "EdECPoint.EdECPoint"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdECPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPoint.EdECPoint

```java
public EdECPoint(boolean xOdd, BigInteger y)
```

Construct an EdECPoint.

**参数**

- **xOdd** — whether the x-coordinate is odd.
- **y** — the y-coordinate, represented using a `BigInteger`.

**异常**

- **NullPointerException** — if `y` is null.
