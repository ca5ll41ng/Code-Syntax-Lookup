---
id: "java-en-function-doublestream-reduce"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.reduce"
signature: "double reduce(double identity, DoubleBinaryOperator op)"
title: "DoubleStream.reduce"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.reduce

```java
double reduce(double identity, DoubleBinaryOperator op)
```

Performs a reduction on the
 elements of this stream, using the provided identity value and an
 associative
 accumulation function, and returns the reduced value.  This is equivalent
 to:
 
```
`double result = identity;
     for (double element : this stream)
         result = accumulator.applyAsDouble(result, element)
     return result;
 `
```

 but is not constrained to execute sequentially.

 

The `identity` value must be an identity for the accumulator
 function. This means that for all `x`,
 `accumulator.apply(identity, x)` is equal to `x`.
 The `accumulator` function must be an
 associative function.

 

This is a terminal
 operation.

 Summing a stream of numbers can be expressed as:

 
```
`double sum = numbers.reduce(0, (a, b) -> a+b);
 `
```

 or more compactly:

 
```
`double sum = numbers.reduce(0, Double::sum);
 `
```

 

While this may seem a more roundabout way to perform an aggregation
 compared to simply mutating a running total in a loop, reduction
 operations parallelize more gracefully, without needing additional
 synchronization and with greatly reduced risk of data races.

**参数**

- **identity** — the identity value for the accumulating function
- **op** — an associative, non-interfering, stateless function for combining two values

**返回**

- the result of the reduction

**参见**

- #sum()
- #min()
- #max()
- #average()
