---
id: "java-en-function-arrays-deeptostring"
language: "java"
lang: "en"
category: "function"
name: "Arrays.deepToString"
signature: "public static String deepToString(Object[] a)"
title: "Arrays.deepToString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.deepToString

```java
public static String deepToString(Object[] a)
```

Returns a string representation of the "deep contents" of the specified
 array.  If the array contains other arrays as elements, the string
 representation contains their contents and so on.  This method is
 designed for converting multidimensional arrays to strings.

 

The string representation consists of a list of the array's
 elements, enclosed in square brackets (`"[]"`).  Adjacent
 elements are separated by the characters `", "` (a comma
 followed by a space).  Elements are converted to strings as by
 `String.valueOf(Object)`, unless they are themselves
 arrays.

 

If an element `e` is an array of a primitive type, it is
 converted to a string as by invoking the appropriate overloading of
 `Arrays.toString(e)`.  If an element `e` is an array of a
 reference type, it is converted to a string as by invoking
 this method recursively.

 

To avoid infinite recursion, if the specified array contains itself
 as an element, or contains an indirect reference to itself through one
 or more levels of arrays, the self-reference is converted to the string
 `"[...]"`.  For example, an array containing only a reference
 to itself would be rendered as `"[[...]]"`.

 

This method returns `"null"` if the specified array
 is `null`.

**参数**

- **a** — the array whose string representation to return

**返回**

- a string representation of `a`

**参见**

- #toString(Object[])

> *Since 1.5*
