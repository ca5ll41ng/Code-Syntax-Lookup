---
id: "java-en-function-unorderedslicespliterator-acquirepermits"
language: "java"
lang: "en"
category: "function"
name: "UnorderedSliceSpliterator.acquirePermits"
signature: "protected final long acquirePermits(long numElements)"
title: "UnorderedSliceSpliterator.acquirePermits"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/StreamSpliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnorderedSliceSpliterator.acquirePermits

```java
protected final long acquirePermits(long numElements)
```

Acquire permission to skip or process elements.  The caller must
 first acquire the elements, then consult this method for guidance
 as to what to do with the data.

 

We use an `AtomicLong` to atomically maintain a counter,
 which is initialized as skip+limit if we are limiting, or skip only
 if we are not limiting.  The user should consult the method
 `checkPermits()` before acquiring data elements.

**参数**

- **numElements** — the number of elements the caller has in hand

**返回**

- the number of elements that should be processed; any remaining elements should be discarded.
