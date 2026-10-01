---
id: "java-en-function-abstractsequentiallist-get"
language: "java"
lang: "en"
category: "function"
name: "AbstractSequentialList.get"
signature: "public E get(int index)"
title: "AbstractSequentialList.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList.get

```java
public E get(int index)
```

Returns the element at the specified position in this list.

 

This implementation first gets a list iterator pointing to the
 indexed element (with `listIterator(index)`).  Then, it gets
 the element using `ListIterator.next` and returns it.

**异常**

- **IndexOutOfBoundsException** — {@inheritDoc}
