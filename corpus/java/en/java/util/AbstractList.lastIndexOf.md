---
id: "java-en-function-abstractlist-lastindexof"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.lastIndexOf"
signature: "public int lastIndexOf(Object o)"
title: "AbstractList.lastIndexOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.lastIndexOf

```java
public int lastIndexOf(Object o)
```

{@inheritDoc}

 This implementation first gets a list iterator that points to the end
 of the list (with `listIterator(size())`).  Then, it iterates
 backwards over the list until the specified element is found, or the
 beginning of the list is reached.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
