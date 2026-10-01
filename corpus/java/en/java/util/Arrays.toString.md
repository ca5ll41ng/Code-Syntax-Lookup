---
id: "java-en-function-arrays-tostring"
language: "java"
lang: "en"
category: "function"
name: "Arrays.toString"
signature: "public static String toString(long[] a)"
title: "Arrays.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.toString

```java
public static String toString(long[] a)
```

Returns a string representation of the contents of the specified array.
 The string representation consists of a list of the array's elements,
 enclosed in square brackets (`"[]"`).  Adjacent elements are
 separated by the characters `", "` (a comma followed by a
 space).  Elements are converted to strings as by
 `String.valueOf(long)`.  Returns `"null"` if `a`
 is `null`.

**参数**

- **a** — the array whose string representation to return

**返回**

- a string representation of `a`

> *Since 1.5*
