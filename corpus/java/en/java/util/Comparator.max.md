---
id: "java-en-function-comparator-max"
language: "java"
lang: "en"
category: "function"
name: "Comparator.max"
signature: "default <U extends T> U max(U o1, U o2)"
title: "Comparator.max"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.max

```java
default <U extends T> U max(U o1, U o2)
```

Returns the greater of two values according to this comparator.
 If the arguments are equal with respect to this comparator,
 the `o1` argument is returned.

           `compare(o1, o2) >= 0 ? o1 : o2`.

**参数**

- **o1** — an argument.
- **o2** — another argument.
- **the** — type of the arguments and the result.

**返回**

- the larger of `o1` and `o2` according to this comparator.

**异常**

- **NullPointerException** — if an argument is null and this comparator does not permit null arguments
- **ClassCastException** — if the arguments' types prevent them from being compared by this comparator.

> *Since 26*
