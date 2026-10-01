---
id: "java-en-function-arrays-deepequals"
language: "java"
lang: "en"
category: "function"
name: "Arrays.deepEquals"
signature: "public static boolean deepEquals(Object[] a1, Object[] a2)"
title: "Arrays.deepEquals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.deepEquals

```java
public static boolean deepEquals(Object[] a1, Object[] a2)
```

Returns `true` if the two specified arrays are deeply
 equal to one another.  Unlike the `equals`
 method, this method is appropriate for use with nested arrays of
 arbitrary depth.

 

Two array references are considered deeply equal if both
 are `null`, or if they refer to arrays that contain the same
 number of elements and all corresponding pairs of elements in the two
 arrays are deeply equal.

 

Two possibly `null` elements `e1` and `e2` are
 deeply equal if any of the following conditions hold:
 
    
-  `e1` and `e2` are both arrays of object reference
         types, and `Arrays.deepEquals(e1, e2) would return true`
    
-  `e1` and `e2` are arrays of the same primitive
         type, and the appropriate overloading of
         `Arrays.equals(e1, e2)` would return true.
    
-  `e1 == e2`
    
-  `e1.equals(e2)` would return true.
 

 Note that this definition permits `null` elements at any depth.

 

If either of the specified arrays contain themselves as elements
 either directly or indirectly through one or more levels of arrays,
 the behavior of this method is undefined.

**参数**

- **a1** — one array to be tested for equality
- **a2** — the other array to be tested for equality

**返回**

- `true` if the two arrays are equal

**参见**

- #equals(Object[],Object[])
- Objects#deepEquals(Object, Object)

> *Since 1.5*
