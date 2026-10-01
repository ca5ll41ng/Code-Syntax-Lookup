---
id: "java-en-function-random-nextfloat"
language: "java"
lang: "en"
category: "function"
name: "Random.nextFloat"
signature: "public float nextFloat()"
title: "Random.nextFloat"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.nextFloat

```java
public float nextFloat()
```

Returns the next pseudorandom, uniformly distributed `float`
 value between `0.0` and `1.0` from this random
 number generator's sequence.

 

The general contract of `nextFloat` is that one
 `float` value, chosen (approximately) uniformly from the
 range `0.0f` (inclusive) to `1.0f` (exclusive), is
 pseudorandomly generated and returned. All 224 possible
 `float` values of the form m&nbsp;x&nbsp;2-24,
 where m is a positive integer less than 224, are
 produced with (approximately) equal probability.

 `Random` as if by:
 
```
`public float nextFloat() {
   return next(24) / ((float)(1 << 24));
 `}
```

 

The hedge "approximately" is used in the foregoing description only
 because the next method is only approximately an unbiased source of
 independently chosen bits. If it were a perfect source of randomly
 chosen bits, then the algorithm shown would choose `float`
 values from the stated range with perfect uniformity.

 [In early versions of Java, the result was incorrectly calculated as:
  
```
 `return next(30) / ((float)(1 << 30));`
```

 This might seem to be equivalent, if not better, but in fact it
 introduced a slight nonuniformity because of the bias in the rounding
 of floating-point numbers: it was slightly more likely that the
 low-order bit of the significand would be 0 than that it would be 1.]

**返回**

- the next pseudorandom, uniformly distributed `float` value between `0.0f` and `1.0f` from this random number generator's sequence
