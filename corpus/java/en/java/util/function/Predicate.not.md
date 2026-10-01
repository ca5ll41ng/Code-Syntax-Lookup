---
id: "java-en-function-predicate-not"
language: "java"
lang: "en"
category: "function"
name: "Predicate.not"
signature: "static <T> Predicate<T> not(Predicate<? super T> target)"
title: "Predicate.not"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Predicate.not

```java
static <T> Predicate<T> not(Predicate<? super T> target)
```

Returns a predicate that is the negation of the supplied predicate.
 This is accomplished by returning result of the calling
 `target.negate()`.

**参数**

- **the** — type of arguments to the specified predicate
- **target** — predicate to negate

**返回**

- a predicate that negates the results of the supplied predicate

**异常**

- **NullPointerException** — if target is null

> *Since 11*
