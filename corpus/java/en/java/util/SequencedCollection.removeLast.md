---
id: "java-en-function-sequencedcollection-removelast"
language: "java"
lang: "en"
category: "function"
name: "SequencedCollection.removeLast"
signature: "default E removeLast()"
title: "SequencedCollection.removeLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedCollection.removeLast

```java
default E removeLast()
```

Removes and returns the last element of this collection (optional operation).

 The implementation in this interface obtains an iterator of the reversed view of this
 collection, and then it obtains an element by calling the iterator's `next` method.
 Any `NoSuchElementException` thrown is propagated. It then calls the iterator's
 `remove` method. Any `UnsupportedOperationException` thrown is propagated.
 Then, it returns the element.

**返回**

- the removed element

**异常**

- **NoSuchElementException** — if this collection is empty
- **UnsupportedOperationException** — if this collection implementation does not support this operation
