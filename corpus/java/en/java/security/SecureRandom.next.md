---
id: "java-en-function-securerandom-next"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.next"
signature: "protected final int next(int numBits)"
title: "SecureRandom.next"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.next

```java
protected final int next(int numBits)
```

Generates an integer containing the user-specified number of
 pseudo-random bits (right justified, with leading zeros).  This
 method overrides a `java.util.Random` method, and serves
 to provide a source of random bits to all the methods inherited
 from that class (for example, `nextInt`,
 `nextLong`, and `nextFloat`).

**参数**

- **numBits** — number of pseudo-random bits to be generated, where `0 <= numBits <= 32`.

**返回**

- an `int` containing the user-specified number of pseudo-random bits (right justified, with leading zeros).
