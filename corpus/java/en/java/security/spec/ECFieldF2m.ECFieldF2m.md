---
id: "java-en-function-ecfieldf2m-ecfieldf2m"
language: "java"
lang: "en"
category: "function"
name: "ECFieldF2m.ECFieldF2m"
signature: "public ECFieldF2m(int m)"
title: "ECFieldF2m.ECFieldF2m"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECFieldF2m.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECFieldF2m.ECFieldF2m

```java
public ECFieldF2m(int m)
```

Creates an elliptic curve characteristic 2 finite
 field which has 2^`m` elements with normal basis.

**参数**

- **m** — with 2^`m` being the number of elements.

**异常**

- **IllegalArgumentException** — if `m` is not positive.
