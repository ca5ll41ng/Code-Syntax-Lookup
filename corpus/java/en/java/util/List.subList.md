---
id: "java-en-function-list-sublist"
language: "java"
lang: "en"
category: "function"
name: "List.subList"
signature: "List<E> subList(int fromIndex, int toIndex)"
title: "List.subList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.subList

```java
List<E> subList(int fromIndex, int toIndex)
```

Returns a view of the portion of this list between the specified
 `fromIndex`, inclusive, and `toIndex`, exclusive.  (If
 `fromIndex` and `toIndex` are equal, the returned list is
 empty.)  The returned list is backed by this list, so non-structural
 changes in the returned list are reflected in this list, and vice-versa.
 The returned list supports all of the optional list operations supported
 by this list.

 This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a list can be used as a range operation by passing a subList view
 instead of a whole list.  For example, the following idiom
 removes a range of elements from a list:
 
```
`list.subList(from, to).clear();
 `
```

 Similar idioms may be constructed for `indexOf` and
 `lastIndexOf`, and all of the algorithms in the
 `Collections` class can be applied to a subList.

 The semantics of the list returned by this method become undefined if
 the backing list (i.e., this list) is structurally modified in
 any way other than via the returned list.  (Structural modifications are
 those that change the size of this list, or otherwise perturb it in such
 a fashion that iterations in progress may yield incorrect results.)

**参数**

- **fromIndex** — low endpoint (inclusive) of the subList
- **toIndex** — high endpoint (exclusive) of the subList

**返回**

- a view of the specified range within this list

**异常**

- **IndexOutOfBoundsException** — for an illegal endpoint index value (`fromIndex < 0 || toIndex > size || fromIndex > toIndex`)
