---
id: "java-en-function-jumboenumset-iterator"
language: "java"
lang: "en"
category: "function"
name: "JumboEnumSet.iterator"
signature: "public Iterator<E> iterator()"
title: "JumboEnumSet.iterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/JumboEnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JumboEnumSet.iterator

```java
public Iterator<E> iterator()
```

Returns an iterator over the elements contained in this set.  The
 iterator traverses the elements in their natural order (which is
 the order in which the enum constants are declared). The returned
 Iterator is a "weakly consistent" iterator that will never throw `ConcurrentModificationException`.

**返回**

- an iterator over the elements contained in this set
