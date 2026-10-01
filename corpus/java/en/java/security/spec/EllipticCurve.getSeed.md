---
id: "java-en-function-ellipticcurve-getseed"
language: "java"
lang: "en"
category: "function"
name: "EllipticCurve.getSeed"
signature: "public byte[] getSeed()"
title: "EllipticCurve.getSeed"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EllipticCurve.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EllipticCurve.getSeed

```java
public byte[] getSeed()
```

Returns the seeding bytes `seed` used
 during curve generation. May be null if not specified.

**返回**

- the seeding bytes `seed`. A new array is returned each time this method is called.
