---
id: "java-en-function-sequencedcollection-getfirst"
language: "java"
lang: "en"
category: "function"
name: "SequencedCollection.getFirst"
signature: "default E getFirst()"
title: "SequencedCollection.getFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedCollection.getFirst

```java
default E getFirst()
```

Gets the first element of this collection.

 The implementation in this interface obtains an iterator of this collection, and
 then it obtains an element by calling the iterator's `next` method. Any
 `NoSuchElementException` thrown is propagated. Otherwise, it returns
 the element.

**返回**

- the retrieved element

**异常**

- **NoSuchElementException** — if this collection is empty
