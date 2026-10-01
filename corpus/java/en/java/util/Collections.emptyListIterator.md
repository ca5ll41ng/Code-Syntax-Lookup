---
id: "java-en-function-collections-emptylistiterator"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyListIterator"
signature: "public static <T> ListIterator<T> emptyListIterator()"
title: "Collections.emptyListIterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyListIterator

```java
public static <T> ListIterator<T> emptyListIterator()
```

Returns a list iterator that has no elements.  More precisely,

 
 
- `hasNext hasNext` and `hasPrevious hasPrevious` always return `false`.
 
- `next next` and `previous
 previous` always throw `NoSuchElementException`.
 
- `remove remove` and `set
 set` always throw `IllegalStateException`.
 
- `add add` always throws `UnsupportedOperationException`.
 
- `nextIndex nextIndex` always returns
 `0`.
 
- `previousIndex previousIndex` always
 returns `-1`.
 

 

Implementations of this method are permitted, but not
 required, to return the same object from multiple invocations.

**参数**

- **type** — of elements, if there were any, in the iterator

**返回**

- an empty list iterator

> *Since 1.7*
