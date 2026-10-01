---
id: "java-en-function-randomgenerator-nextgaussian"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.nextGaussian"
signature: "default double nextGaussian()"
title: "RandomGenerator.nextGaussian"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.nextGaussian

```java
default double nextGaussian()
```

Returns a `double` value pseudorandomly chosen from a Gaussian
 (normal) distribution whose mean is 0 and whose standard deviation is 1.

 ziggurat algorithm (largely table-driven, with rare cases handled by
 computation and rejection sampling). Walker's alias method for sampling
 a discrete distribution also plays a role.

**返回**

- a `double` value pseudorandomly chosen from a Gaussian distribution
