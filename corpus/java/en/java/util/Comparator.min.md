---
id: "java-en-function-comparator-min"
language: "java"
lang: "en"
category: "function"
name: "Comparator.min"
signature: "default <U extends T> U min(U o1, U o2)"
title: "Comparator.min"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.min

```java
default <U extends T> U min(U o1, U o2)
```

Returns the smaller of two values according to this comparator.
 If the arguments are equal with respect to this comparator,
 the `o1` argument is returned.

           `compare(o1, o2) <= 0 ? o1 : o2`.

**参数**

- **o1** — an argument.
- **o2** — another argument.
- **the** — type of the arguments and the result.

**返回**

- the smaller of `o1` and `o2` according to this comparator.

**异常**

- **NullPointerException** — if an argument is null and this comparator does not permit null arguments
- **ClassCastException** — if the arguments' types prevent them from being compared by this comparator.

> *Since 26*
