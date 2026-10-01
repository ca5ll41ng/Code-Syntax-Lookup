---
id: "java-en-function-stream-reduce"
language: "java"
lang: "en"
category: "function"
name: "Stream.reduce"
signature: "T reduce(T identity, BinaryOperator<T> accumulator)"
title: "Stream.reduce"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.reduce

```java
T reduce(T identity, BinaryOperator<T> accumulator)
```

Performs a reduction on the
 elements of this stream, using the provided identity value and an
 associative
 accumulation function, and returns the reduced value.  This is equivalent
 to:
 
```
`T result = identity;
     for (T element : this stream)
         result = accumulator.apply(result, element)
     return result;
 `
```

 but is not constrained to execute sequentially.

 

The `identity` value must be an identity for the accumulator
 function. This means that for all `t`,
 `accumulator.apply(identity, t)` is equal to `t`.
 The `accumulator` function must be an
 associative function.

 

This is a terminal
 operation.

 cases of reduction. Summing a stream of numbers can be expressed as:

 
```
`Integer sum = integers.reduce(0, (a, b) -> a+b);
 `
```

 or:

 
```
`Integer sum = integers.reduce(0, Integer::sum);
 `
```

 

While this may seem a more roundabout way to perform an aggregation
 compared to simply mutating a running total in a loop, reduction
 operations parallelize more gracefully, without needing additional
 synchronization and with greatly reduced risk of data races.

**参数**

- **identity** — the identity value for the accumulating function
- **accumulator** — an associative, non-interfering, stateless function for combining two values

**返回**

- the result of the reduction
