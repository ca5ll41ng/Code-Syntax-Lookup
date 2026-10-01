---
id: "java-en-function-abstractsequentiallist-listiterator"
language: "java"
lang: "en"
category: "function"
name: "AbstractSequentialList.listIterator"
signature: "public abstract ListIterator<E> listIterator(int index)"
title: "AbstractSequentialList.listIterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList.listIterator

```java
public abstract ListIterator<E> listIterator(int index)
```

Returns a list iterator over the elements in this list (in proper
 sequence).

**参数**

- **index** — index of first element to be returned from the list iterator (by a call to the `next` method)

**返回**

- a list iterator over the elements in this list (in proper sequence)

**异常**

- **IndexOutOfBoundsException** — {@inheritDoc}
