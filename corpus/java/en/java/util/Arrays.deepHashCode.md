---
id: "java-en-function-arrays-deephashcode"
language: "java"
lang: "en"
category: "function"
name: "Arrays.deepHashCode"
signature: "public static int deepHashCode(Object[] a)"
title: "Arrays.deepHashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.deepHashCode

```java
public static int deepHashCode(Object[] a)
```

Returns a hash code based on the "deep contents" of the specified
 array.  If the array contains other arrays as elements, the
 hash code is based on their contents and so on, ad infinitum.
 It is therefore unacceptable to invoke this method on an array that
 contains itself as an element, either directly or indirectly through
 one or more levels of arrays.  The behavior of such an invocation is
 undefined.

 

For any two arrays `a` and `b` such that
 `Arrays.deepEquals(a, b)`, it is also the case that
 `Arrays.deepHashCode(a) == Arrays.deepHashCode(b)`.

 

The computation of the value returned by this method is similar to
 that of the value returned by `hashCode` on a list
 containing the same elements as `a` in the same order, with one
 difference: If an element `e` of `a` is itself an array,
 its hash code is computed not by calling `e.hashCode()`, but as
 by calling the appropriate overloading of `Arrays.hashCode(e)`
 if `e` is an array of a primitive type, or as by calling
 `Arrays.deepHashCode(e)` recursively if `e` is an array
 of a reference type.  If `a` is `null`, this method
 returns 0.

**参数**

- **a** — the array whose deep-content-based hash code to compute

**返回**

- a deep-content-based hash code for `a`

**参见**

- #hashCode(Object[])

> *Since 1.5*
