---
id: "java-en-function-list-reversed"
language: "java"
lang: "en"
category: "function"
name: "List.reversed"
signature: "default List<E> reversed()"
title: "List.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.reversed

```java
default List<E> reversed()
```

{@inheritDoc}

 The implementation in this interface returns a reverse-ordered List
 view. The `reversed()` method of the view returns a reference
 to this List. Other operations on the view are implemented via calls to
 public methods on this List. The exact relationship between calls on the
 view and calls on this List is unspecified. However, order-sensitive
 operations generally behave as if they delegate to the appropriate method
 with the opposite orientation. For example, calling `getFirst` on
 the view might result in a call to `getLast` on this List.

**返回**

- a reverse-ordered view of this collection, as a `List`

> *Since 21*
