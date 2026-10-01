---
id: "java-en-function-strictmath-random"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.random"
signature: "public static double random()"
title: "StrictMath.random"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.random

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

**返回**

- a pseudorandom `double` greater than or equal to `0.0` and less than `1.0`.

**参见**

- Random#nextDouble()
