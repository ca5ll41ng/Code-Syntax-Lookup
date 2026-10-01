---
id: "java-en-function-randomgenerator-longs"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.longs"
signature: "default LongStream longs()"
title: "RandomGenerator.longs"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.longs

```java
default LongStream longs()
```

Returns an effectively unlimited stream of pseudorandomly chosen
 `long` values.

 equivalent to `longs(long) longs`
 (`MAX_VALUE Long.MAX_VALUE`).

 that repeatedly calls `nextLong() nextLong`().

**返回**

- a stream of pseudorandomly chosen `long` values
