---
id: "java-en-function-collections-emptyiterator"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyIterator"
signature: "public static <T> Iterator<T> emptyIterator()"
title: "Collections.emptyIterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyIterator

```java
public static <T> Iterator<T> emptyIterator()
```

Returns an iterator that has no elements.  More precisely,

 
 
- `hasNext hasNext` always returns `false`.
 
- `next next` always throws `NoSuchElementException`.
 
- `remove remove` always throws `IllegalStateException`.
 

 

Implementations of this method are permitted, but not
 required, to return the same object from multiple invocations.

**参数**

- **type** — of elements, if there were any, in the iterator

**返回**

- an empty iterator

> *Since 1.7*
