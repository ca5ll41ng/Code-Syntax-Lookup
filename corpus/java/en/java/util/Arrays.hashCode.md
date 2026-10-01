---
id: "java-en-function-arrays-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Arrays.hashCode"
signature: "public static int hashCode(long[] a)"
title: "Arrays.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.hashCode

```java
public static int hashCode(long[] a)
```

Returns a hash code based on the contents of the specified array.
 For any two `long` arrays `a` and `b`
 such that `Arrays.equals(a, b)`, it is also the case that
 `Arrays.hashCode(a) == Arrays.hashCode(b)`.

 

The value returned by this method is the same value that would be
 obtained by invoking the `hashCode() hashCode`
 method on a `List` containing a sequence of `Long`
 instances representing the elements of `a` in the same order.
 If `a` is `null`, this method returns 0.

**参数**

- **a** — the array whose hash value to compute

**返回**

- a content-based hash code for `a`

> *Since 1.5*
