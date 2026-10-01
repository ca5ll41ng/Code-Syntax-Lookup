---
id: "java-en-function-intstream-reduce"
language: "java"
lang: "en"
category: "function"
name: "IntStream.reduce"
signature: "int reduce(int identity, IntBinaryOperator op)"
title: "IntStream.reduce"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.reduce

```java
int reduce(int identity, IntBinaryOperator op)
```

Performs a reduction on the
 elements of this stream, using the provided identity value and an
 associative
 accumulation function, and returns the reduced value.  This is equivalent
 to:
 
```
`int result = identity;
     for (int element : this stream)
         result = accumulator.applyAsInt(result, element)
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

 expressed using this method.
 For example, summing a stream can be expressed as:

 
```
`int sum = integers.reduce(0, (a, b) -> a+b);
 `
```

 or more compactly:

 
```
`int sum = integers.reduce(0, Integer::sum);
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
