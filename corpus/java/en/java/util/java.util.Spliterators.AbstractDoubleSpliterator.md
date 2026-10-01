---
id: "java-en-function-java-util-spliterators-abstractdoublespliterator"
language: "java"
lang: "en"
category: "function"
name: "java.util.Spliterators.AbstractDoubleSpliterator"
title: "AbstractDoubleSpliterator"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractDoubleSpliterator

An abstract `Spliterator.OfDouble` that implements
 `trySplit` to permit limited parallelism.

 

To implement a spliterator an extending class need only
 implement `tryAdvance(java.util.function.DoubleConsumer)
 tryAdvance`.  The extending class should override
 `forEachRemaining(java.util.function.DoubleConsumer) forEachRemaining`
 if it can provide a more performant implementation.

 This class is a useful aid for creating a spliterator when it is not
 possible or difficult to efficiently partition elements in a manner
 allowing balanced parallel computation.

 

An alternative to using this class, that also permits limited
 parallelism, is to create a spliterator from an iterator
 (see `spliterator`.
 Depending on the circumstances using an iterator may be easier or more
 convenient than extending this class. For example, if there is already an
 iterator available to use then there is no need to extend this class.

**参见**

- #spliterator(java.util.PrimitiveIterator.OfDouble, long, int)

> *Since 1.8*
