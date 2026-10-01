---
id: "java-en-function-abstractlist-indexof"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.indexOf"
signature: "public int indexOf(Object o)"
title: "AbstractList.indexOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.indexOf

```java
public int indexOf(Object o)
```

{@inheritDoc}

 This implementation first gets a list iterator (with
 `listIterator()`).  Then, it iterates over the list until the
 specified element is found or the end of the list is reached.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
