---
id: "java-en-function-collections-rotate"
language: "java"
lang: "en"
category: "function"
name: "Collections.rotate"
signature: "public static void rotate(List<?> list, int distance)"
title: "Collections.rotate"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.rotate

```java
public static void rotate(List<?> list, int distance)
```

Rotates the elements in the specified list by the specified distance.
 After calling this method, the element at index `i` will be
 the element previously at index `(i - distance)` mod
 `list.size()`, for all values of `i` between `0`
 and `list.size()-1`, inclusive.  (This method has no effect on
 the size of the list.)

 

For example, suppose `list` comprises`[t, a, n, k, s]`.
 After invoking `Collections.rotate(list, 1)` (or
 `Collections.rotate(list, -4)`), `list` will comprise
 `[s, t, a, n, k]`.

 

Note that this method can usefully be applied to sublists to
 move one or more elements within a list while preserving the
 order of the remaining elements.  For example, the following idiom
 moves the element at index `j` forward to position
 `k` (which must be greater than or equal to `j`):
 
```

     Collections.rotate(list.subList(j, k+1), -1);
 
```

 To make this concrete, suppose `list` comprises
 `[a, b, c, d, e]`.  To move the element at index `1`
 (`b`) forward two positions, perform the following invocation:
 
```

     Collections.rotate(l.subList(1, 4), -1);
 
```

 The resulting list is `[a, c, d, b, e]`.

 

To move more than one element forward, increase the absolute value
 of the rotation distance.  To move elements backward, use a positive
 shift distance.

 

If the specified list is small or implements the `RandomAccess` interface, this implementation exchanges the first
 element into the location it should go, and then repeatedly exchanges
 the displaced element into the location it should go until a displaced
 element is swapped into the first element.  If necessary, the process
 is repeated on the second and successive elements, until the rotation
 is complete.  If the specified list is large and doesn't implement the
 `RandomAccess` interface, this implementation breaks the
 list into two sublist views around index `-distance mod size`.
 Then the `reverse` method is invoked on each sublist view,
 and finally it is invoked on the entire list.  For a more complete
 description of both algorithms, see Section 2.3 of Jon Bentley's
 Programming Pearls (Addison-Wesley, 1986).

**参数**

- **list** — the list to be rotated.
- **distance** — the distance to rotate the list.  There are no constraints on this value; it may be zero, negative, or greater than `list.size()`.

**异常**

- **UnsupportedOperationException** — if the specified list or its list-iterator does not support the `set` operation.

> *Since 1.4*
