---
id: "java-en-function-random-nextgaussian"
language: "java"
lang: "en"
category: "function"
name: "Random.nextGaussian"
signature: "public synchronized double nextGaussian()"
title: "Random.nextGaussian"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.nextGaussian

```java
public synchronized double nextGaussian()
```

Returns the next pseudorandom, Gaussian ("normally") distributed
 `double` value with mean `0.0` and standard
 deviation `1.0` from this random number generator's sequence.
 

 The general contract of `nextGaussian` is that one
 `double` value, chosen from (approximately) the usual
 normal distribution with mean `0.0` and standard deviation
 `1.0`, is pseudorandomly generated and returned.

 `Random` as if by a threadsafe version of the following:
 
```
`private double nextNextGaussian;
 private boolean haveNextNextGaussian = false;

 public double nextGaussian() {
   if (haveNextNextGaussian) {
     haveNextNextGaussian = false;
     return nextNextGaussian;
   ` else {
     double v1, v2, s;
     do {
       v1 = 2 * nextDouble() - 1;   // between -1.0 and 1.0
       v2 = 2 * nextDouble() - 1;   // between -1.0 and 1.0
       s = v1 * v1 + v2 * v2;
     } while (s >= 1 || s == 0);
     double multiplier = StrictMath.sqrt(-2 * StrictMath.log(s)/s);
     nextNextGaussian = v2 * multiplier;
     haveNextNextGaussian = true;
     return v1 * multiplier;
   }
 }}
```

 This uses the polar method of G. E. P. Box, M. E. Muller, and
 G. Marsaglia, as described by Donald E. Knuth in The Art of
 Computer Programming, Volume 2, third edition: Seminumerical Algorithms,
 section 3.4.1, subsection C, algorithm P. Note that it generates two
 independent values at the cost of only one call to `StrictMath.log`
 and one call to `StrictMath.sqrt`.

**返回**

- the next pseudorandom, Gaussian ("normally") distributed `double` value with mean `0.0` and standard deviation `1.0` from this random number generator's sequence
