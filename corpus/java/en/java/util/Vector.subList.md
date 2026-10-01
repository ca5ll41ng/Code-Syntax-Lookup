---
id: "java-en-function-vector-sublist"
language: "java"
lang: "en"
category: "function"
name: "Vector.subList"
signature: "public synchronized List<E> subList(int fromIndex, int toIndex)"
title: "Vector.subList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.subList

```java
public synchronized List<E> subList(int fromIndex, int toIndex)
```

Returns a view of the portion of this List between fromIndex,
 inclusive, and toIndex, exclusive.  (If fromIndex and toIndex are
 equal, the returned List is empty.)  The returned List is backed by this
 List, so changes in the returned List are reflected in this List, and
 vice-versa.  The returned List supports all of the optional List
 operations supported by this List.

 

This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a List can be used as a range operation by operating on a subList view
 instead of a whole List.  For example, the following idiom
 removes a range of elements from a List:
 
```

      list.subList(from, to).clear();
 
```

 Similar idioms may be constructed for indexOf and lastIndexOf,
 and all of the algorithms in the Collections class can be applied to
 a subList.

 

The semantics of the List returned by this method become undefined if
 the backing list (i.e., this List) is structurally modified in
 any way other than via the returned List.  (Structural modifications are
 those that change the size of the List, or otherwise perturb it in such
 a fashion that iterations in progress may yield incorrect results.)

**参数**

- **fromIndex** — low endpoint (inclusive) of the subList
- **toIndex** — high endpoint (exclusive) of the subList

**返回**

- a view of the specified range within this List

**异常**

- **IndexOutOfBoundsException** — if an endpoint index value is out of range `(fromIndex < 0 || toIndex > size)`
- **IllegalArgumentException** — if the endpoint indices are out of order `(fromIndex > toIndex)`
