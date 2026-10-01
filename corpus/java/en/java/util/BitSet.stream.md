---
id: "java-en-function-bitset-stream"
language: "java"
lang: "en"
category: "function"
name: "BitSet.stream"
signature: "public IntStream stream()"
title: "BitSet.stream"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.stream

```java
public IntStream stream()
```

Returns a stream of indices for which this `BitSet`
 contains a bit in the set state. The indices are returned
 in order, from lowest to highest. The size of the stream
 is the number of bits in the set state, equal to the value
 returned by the `cardinality` method.

 

The stream binds to this bit set when the terminal stream operation
 commences (specifically, the spliterator for the stream is
 late-binding).  If the
 bit set is modified during that operation then the result is undefined.

**返回**

- a stream of integers representing set indices

> *Since 1.8*
