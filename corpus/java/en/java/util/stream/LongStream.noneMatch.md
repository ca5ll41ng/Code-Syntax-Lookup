---
id: "java-en-function-longstream-nonematch"
language: "java"
lang: "en"
category: "function"
name: "LongStream.noneMatch"
signature: "boolean noneMatch(LongPredicate predicate)"
title: "LongStream.noneMatch"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.noneMatch

```java
boolean noneMatch(LongPredicate predicate)
```

Returns whether no elements of this stream match the provided predicate.
 May not evaluate the predicate on all elements if not necessary for
 determining the result.  If the stream is empty then `true` is
 returned and the predicate is not evaluated.

 

This is a short-circuiting
 terminal operation.

 This method evaluates the universal quantification of the
 negated predicate over the elements of the stream (for all x ~P(x)).  If
 the stream is empty, the quantification is said to be vacuously satisfied
 and is always `true`, regardless of P(x).

**参数**

- **predicate** — a non-interfering, stateless predicate to apply to elements of this stream

**返回**

- `true` if either no elements of the stream match the provided predicate or the stream is empty, otherwise `false`
