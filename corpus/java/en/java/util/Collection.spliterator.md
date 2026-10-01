---
id: "java-en-function-collection-spliterator"
language: "java"
lang: "en"
category: "function"
name: "Collection.spliterator"
signature: "default Spliterator<E> spliterator()"
title: "Collection.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.spliterator

```java
default Spliterator<E> spliterator()
```

Creates a `Spliterator` over the elements in this collection.

 Implementations should document characteristic values reported by the
 spliterator.  Such characteristic values are not required to be reported
 if the spliterator reports `SIZED` and this collection
 contains no elements.

 

The default implementation should be overridden by subclasses that
 can return a more efficient spliterator.  In order to
 preserve expected laziness behavior for the `stream` and
 `parallelStream` methods, spliterators should either have the
 characteristic of `IMMUTABLE` or `CONCURRENT`, or be
 late-binding.
 If none of these is practical, the overriding class should describe the
 spliterator's documented policy of binding and structural interference,
 and should override the `stream` and `parallelStream`
 methods to create streams using a `Supplier` of the spliterator,
 as in:
 
```
`Stream s = StreamSupport.stream(() -> spliterator(), spliteratorCharacteristics)
 `
```

 

These requirements ensure that streams produced by the
 `stream` and `parallelStream` methods will reflect the
 contents of the collection as of initiation of the terminal stream
 operation.

 The default implementation creates a
 late-binding spliterator
 from the collection's `Iterator`.  The spliterator inherits the
 fail-fast properties of the collection's iterator.
 

 The created `Spliterator` reports `SIZED`.

 The created `Spliterator` additionally reports
 `SUBSIZED`.

 

If a spliterator covers no elements then the reporting of additional
 characteristic values, beyond that of `SIZED` and `SUBSIZED`,
 does not aid clients to control, specialize or simplify computation.
 However, this does enable shared use of an immutable and empty
 spliterator instance (see `emptySpliterator`) for
 empty collections, and enables clients to determine if such a spliterator
 covers no elements.

**返回**

- a `Spliterator` over the elements in this collection

> *Since 1.8*
