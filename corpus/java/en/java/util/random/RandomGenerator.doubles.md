---
id: "java-en-function-randomgenerator-doubles"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.doubles"
signature: "default DoubleStream doubles()"
title: "RandomGenerator.doubles"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.doubles

```java
default DoubleStream doubles()
```

Returns an effectively unlimited stream of pseudorandomly chosen
 `double` values.

 `doubles(long) doubles`
 (`MAX_VALUE Long.MAX_VALUE`).

 that repeatedly calls `nextDouble nextDouble`().

**返回**

- a stream of pseudorandomly chosen `double` values
