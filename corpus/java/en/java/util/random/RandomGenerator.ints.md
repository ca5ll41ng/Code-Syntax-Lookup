---
id: "java-en-function-randomgenerator-ints"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.ints"
signature: "default IntStream ints()"
title: "RandomGenerator.ints"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.ints

```java
default IntStream ints()
```

Returns an effectively unlimited stream of pseudorandomly chosen
 `int` values.

 equivalent to `ints(long) ints`
 (`MAX_VALUE Long.MAX_VALUE`).

 that repeatedly calls `nextInt() nextInt`().

**返回**

- a stream of pseudorandomly chosen `int` values
