---
id: "java-en-function-predicate-isequal"
language: "java"
lang: "en"
category: "function"
name: "Predicate.isEqual"
signature: "static <T> Predicate<T> isEqual(Object targetRef)"
title: "Predicate.isEqual"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Predicate.isEqual

```java
static <T> Predicate<T> isEqual(Object targetRef)
```

Returns a predicate that tests if two arguments are equal according
 to `equals`.

**参数**

- **the** — type of arguments to the predicate
- **targetRef** — the object reference with which to compare for equality, which may be `null`

**返回**

- a predicate that tests if two arguments are equal according to `equals`
