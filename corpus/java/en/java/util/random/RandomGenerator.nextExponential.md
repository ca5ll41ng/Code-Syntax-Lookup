---
id: "java-en-function-randomgenerator-nextexponential"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.nextExponential"
signature: "default double nextExponential()"
title: "RandomGenerator.nextExponential"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.nextExponential

```java
default double nextExponential()
```

Returns a nonnegative `double` value pseudorandomly chosen from
 an exponential distribution whose mean is 1.

 ziggurat algorithm (largely table-driven, with rare cases handled by
 computation and rejection sampling). Walker's alias method for sampling
 a discrete distribution also plays a role.

**返回**

- a nonnegative `double` value pseudorandomly chosen from an exponential distribution
