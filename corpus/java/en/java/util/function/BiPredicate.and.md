---
id: "java-en-function-bipredicate-and"
language: "java"
lang: "en"
category: "function"
name: "BiPredicate.and"
signature: "default BiPredicate<T, U> and(BiPredicate<? super T, ? super U> other)"
title: "BiPredicate.and"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/BiPredicate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BiPredicate.and

```java
default BiPredicate<T, U> and(BiPredicate<? super T, ? super U> other)
```

Returns a composed predicate that represents a short-circuiting logical
 AND of this predicate and another.  When evaluating the composed
 predicate, if this predicate is `false`, then the `other`
 predicate is not evaluated.

 

Any exceptions thrown during evaluation of either predicate are relayed
 to the caller; if evaluation of this predicate throws an exception, the
 `other` predicate will not be evaluated.

**参数**

- **other** — a predicate that will be logically-ANDed with this predicate

**返回**

- a composed predicate that represents the short-circuiting logical AND of this predicate and the `other` predicate

**异常**

- **NullPointerException** — if other is null
