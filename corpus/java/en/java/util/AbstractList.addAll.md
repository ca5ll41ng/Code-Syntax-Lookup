---
id: "java-en-function-abstractlist-addall"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.addAll"
signature: "public boolean addAll(int index, Collection<? extends E> c)"
title: "AbstractList.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.addAll

```java
public boolean addAll(int index, Collection<? extends E> c)
```

{@inheritDoc}

 This implementation gets an iterator over the specified collection
 and iterates over it, inserting the elements obtained from the
 iterator into this list at the appropriate position, one at a time,
 using `add(int, E)`.
 Many implementations will override this method for efficiency.

 

Note that this implementation throws an
 `UnsupportedOperationException` unless
 `add` is overridden.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **IndexOutOfBoundsException** — {@inheritDoc}
