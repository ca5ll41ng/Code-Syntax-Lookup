---
id: "java-en-function-math-random"
language: "java"
lang: "en"
category: "function"
name: "Math.random"
signature: "public static double random()"
title: "Math.random"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.random

```java
public static double random()
```

Returns a `double` value with a positive sign, greater
 than or equal to `0.0` and less than `1.0`.
 Returned values are chosen pseudorandomly with (approximately)
 uniform distribution from that range.

 

When this method is first called, it creates a single new
 pseudorandom-number generator, exactly as if by the expression

 `new java.util.Random()`

 This new pseudorandom-number generator is used thereafter for
 all calls to this method and is used nowhere else.

 

This method is properly synchronized to allow correct use by
 more than one thread. However, if many threads need to generate
 pseudorandom numbers at a great rate, it may reduce contention
 for each thread to have its own pseudorandom-number generator.

 As the largest `double` value less than `1.0`
 is `Math.nextDown(1.0)`, a value `x` in the closed range
 `[x1,x2]` where `x1<=x2` may be defined by the statements

 
```
`double f = Math.random()/Math.nextDown(1.0);
 double x = x1*(1.0 - f) + x2*f;
 `
```

**返回**

- a pseudorandom `double` greater than or equal to `0.0` and less than `1.0`.

**参见**

- #nextDown(double)
- Random#nextDouble()
