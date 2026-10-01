---
id: "java-en-function-predicate-or"
language: "java"
lang: "en"
category: "function"
name: "Predicate.or"
signature: "default Predicate<T> or(Predicate<? super T> other)"
title: "Predicate.or"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Predicate.or

```java
default Predicate<T> or(Predicate<? super T> other)
```

Returns a composed predicate that represents a short-circuiting logical
 OR of this predicate and another.  When evaluating the composed
 predicate, if this predicate is `true`, then the `other`
 predicate is not evaluated.

 

Any exceptions thrown during evaluation of either predicate are relayed
 to the caller; if evaluation of this predicate throws an exception, the
 `other` predicate will not be evaluated.

**参数**

- **other** — a predicate that will be logically-ORed with this predicate

**返回**

- a composed predicate that represents the short-circuiting logical OR of this predicate and the `other` predicate

**异常**

- **NullPointerException** — if other is null
