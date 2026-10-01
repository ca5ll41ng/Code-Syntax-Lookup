---
id: "java-en-function-comparator-comparing"
language: "java"
lang: "en"
category: "function"
name: "Comparator.comparing"
signature: "public static <T, U> Comparator<T> comparing( Function<? super T, ? extends U> keyExtractor, Comparator<? super U> keyComparator)"
title: "Comparator.comparing"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.comparing

```java
public static <T, U> Comparator<T> comparing( Function<? super T, ? extends U> keyExtractor, Comparator<? super U> keyComparator)
```

Accepts a function that extracts a sort key from a type `T`, and
 returns a `Comparator` that compares by that sort key using
 the specified `Comparator`.

 

The returned comparator is serializable if the specified function
 and comparator are both serializable.

 For example, to obtain a `Comparator` that compares `Person` objects by their last name ignoring case differences,

 
```
`Comparator cmp = Comparator.comparing(
             Person::getLastName,
             String.CASE_INSENSITIVE_ORDER);
 `
```

**参数**

- **the** — type of element to be compared
- **the** — type of the sort key
- **keyExtractor** — the function used to extract the sort key
- **keyComparator** — the `Comparator` used to compare the sort key

**返回**

- a comparator that compares by an extracted key using the specified `Comparator`

**异常**

- **NullPointerException** — if either argument is null

> *Since 1.8*
