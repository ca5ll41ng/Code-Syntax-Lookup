---
id: "java-en-function-comparator-compare"
language: "java"
lang: "en"
category: "function"
name: "Comparator.compare"
signature: "int compare(T o1, T o2)"
title: "Comparator.compare"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.compare

```java
int compare(T o1, T o2)
```

Compares its two arguments for order.  Returns a negative integer,
 zero, or a positive integer as the first argument is less than, equal
 to, or greater than the second.

 The implementor must ensure that `signum
 signum``(compare(x, y)) == -signum(compare(y, x))` for
 all `x` and `y`.  (This implies that `compare(x, y)` must throw an exception if and only if `compare(y, x)` throws an exception.)

 The implementor must also ensure that the relation is transitive:
 `((compare(x, y)>0) && (compare(y, z)>0))` implies
 `compare(x, z)>0`.

 Finally, the implementor must ensure that `compare(x,
 y)==0` implies that `signum(compare(x,
 z))==signum(compare(y, z))` for all `z`.

 It is generally the case, but not strictly required that
 `(compare(x, y)==0) == (x.equals(y))`.  Generally speaking,
 any comparator that violates this condition should clearly indicate
 this fact.  The recommended language is "Note: this comparator
 imposes orderings that are inconsistent with equals."

**参数**

- **o1** — the first object to be compared.
- **o2** — the second object to be compared.

**返回**

- a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.

**异常**

- **NullPointerException** — if an argument is null and this comparator does not permit null arguments
- **ClassCastException** — if the arguments' types prevent them from being compared by this comparator.
