---
id: "java-en-function-threadlocalrandom-nextgaussian"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocalRandom.nextGaussian"
signature: "public double nextGaussian()"
title: "ThreadLocalRandom.nextGaussian"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadLocalRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocalRandom.nextGaussian

```java
public double nextGaussian()
```

Returns a `double` value pseudorandomly chosen from a Gaussian
 (normal) distribution whose mean is 0 and whose standard deviation is 1.

           `nextGaussian`,
           and so it uses McFarland's fast modified ziggurat algorithm
           rather than the polar method described in the superclass.

**返回**

- a `double` value pseudorandomly chosen from a Gaussian distribution
