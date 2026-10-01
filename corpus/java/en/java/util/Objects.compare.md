---
id: "java-en-function-objects-compare"
language: "java"
lang: "en"
category: "function"
name: "Objects.compare"
signature: "public static <T> int compare(T a, T b, Comparator<? super T> c)"
title: "Objects.compare"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.compare

```java
public static <T> int compare(T a, T b, Comparator<? super T> c)
```

{@return 0 if the arguments are identical and `c.compare(a, b)` otherwise}
 Consequently, if both arguments are `null` 0
 is returned.

 

Note that if one of the arguments is `null`, a `NullPointerException` may or may not be thrown depending on
 what ordering policy, if any, the `Comparator Comparator`
 chooses to have for `null` values.

**参数**

- **the** — type of the objects being compared
- **a** — an object
- **b** — an object to be compared with `a`
- **c** — the `Comparator` to compare the first two arguments

**参见**

- Comparable
- Comparator
