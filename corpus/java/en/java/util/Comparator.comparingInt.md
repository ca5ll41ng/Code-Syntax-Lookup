---
id: "java-en-function-comparator-comparingint"
language: "java"
lang: "en"
category: "function"
name: "Comparator.comparingInt"
signature: "public static <T> Comparator<T> comparingInt(ToIntFunction<? super T> keyExtractor)"
title: "Comparator.comparingInt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.comparingInt

```java
public static <T> Comparator<T> comparingInt(ToIntFunction<? super T> keyExtractor)
```

Accepts a function that extracts an `int` sort key from a type
 `T`, and returns a `Comparator` that compares by that
 sort key.

 

The returned comparator is serializable if the specified function
 is also serializable.

**参数**

- **the** — type of element to be compared
- **keyExtractor** — the function used to extract the integer sort key

**返回**

- a comparator that compares by an extracted key

**异常**

- **NullPointerException** — if the argument is null

**参见**

- #comparing(Function)

> *Since 1.8*
