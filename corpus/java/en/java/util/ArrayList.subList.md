---
id: "java-en-function-arraylist-sublist"
language: "java"
lang: "en"
category: "function"
name: "ArrayList.subList"
signature: "public List<E> subList(int fromIndex, int toIndex)"
title: "ArrayList.subList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayList.subList

```java
public List<E> subList(int fromIndex, int toIndex)
```

Returns a view of the portion of this list between the specified
 `fromIndex`, inclusive, and `toIndex`, exclusive.  (If
 `fromIndex` and `toIndex` are equal, the returned list is
 empty.)  The returned list is backed by this list, so non-structural
 changes in the returned list are reflected in this list, and vice-versa.
 The returned list supports all of the optional list operations.

 

This method eliminates the need for explicit range operations (of
 the sort that commonly exist for arrays).  Any operation that expects
 a list can be used as a range operation by passing a subList view
 instead of a whole list.  For example, the following idiom
 removes a range of elements from a list:
 
```

      list.subList(from, to).clear();
 
```

 Similar idioms may be constructed for `indexOf` and
 `lastIndexOf`, and all of the algorithms in the
 `Collections` class can be applied to a subList.

 

The semantics of the list returned by this method become undefined if
 the backing list (i.e., this list) is structurally modified in
 any way other than via the returned list.  (Structural modifications are
 those that change the size of this list, or otherwise perturb it in such
 a fashion that iterations in progress may yield incorrect results.)

**异常**

- **IndexOutOfBoundsException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
