---
id: "java-en-function-java-util-listiterator"
language: "java"
lang: "en"
category: "function"
name: "java.util.ListIterator"
title: "ListIterator"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ListIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListIterator

An iterator for lists that allows the programmer
 to traverse the list in either direction, modify
 the list during iteration, and obtain the iterator's
 current position in the list. A `ListIterator`
 has no current element; its cursor position always
 lies between the element that would be returned by a call
 to `previous()` and the element that would be
 returned by a call to `next()`.
 An iterator for a list of length `n` has `n+1` possible
 cursor positions, as illustrated by the carets (`^`) below:
 
```

                      Element(0)   Element(1)   Element(2)   ... Element(n-1)
 cursor positions:  ^            ^            ^            ^                  ^
 
```

 Note that the `remove` and `set` methods are
 not defined in terms of the cursor position;  they are defined to
 operate on the last element returned by a call to `next` or
 `previous`.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements returned by this list iterator

**参见**

- Collection
- List
- Iterator
- Enumeration
- List#listIterator()

> *Since 1.2*
