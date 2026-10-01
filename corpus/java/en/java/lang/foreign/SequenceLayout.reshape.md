---
id: "java-en-function-sequencelayout-reshape"
language: "java"
lang: "en"
category: "function"
name: "SequenceLayout.reshape"
signature: "SequenceLayout reshape(long... elementCounts)"
title: "SequenceLayout.reshape"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SequenceLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceLayout.reshape

```java
SequenceLayout reshape(long... elementCounts)
```

Rearranges the elements in this sequence layout into a multidimensional sequence
 layout. The resulting layout is a sequence layout where element layouts in the
 `flatten() flattened projection` of this sequence layout are
 rearranged into one or more nested sequence layouts according to the provided
 element counts. This transformation preserves the layout size;
 that is, multiplying the provided element counts must yield the same element count
 as the flattened projection of this sequence layout.
 

 For instance, given a sequence layout of the kind:
 {@snippet lang=java :
 var seq = MemoryLayout.sequenceLayout(4, MemoryLayout.sequenceLayout(3, ValueLayout.JAVA_INT));
 }
 calling `seq.reshape(2, 6)` will yield the following sequence layout:
 {@snippet lang=java :
 var reshapeSeq = MemoryLayout.sequenceLayout(2, MemoryLayout.sequenceLayout(6, ValueLayout.JAVA_INT));
 }
 

 If one of the provided element counts is the special value `-1`, then
 the element count in that position will be inferred from the remaining element
 counts and the element count of the flattened projection of this layout.
 For instance, a layout equivalent to the above `reshapeSeq` can also be
 computed in the following ways:
 {@snippet lang=java :
 var reshapeSeqImplicit1 = seq.reshape(-1, 6);
 var reshapeSeqImplicit2 = seq.reshape(2, -1);
 }

**参数**

- **elementCounts** — an array of element counts, of which at most one can be `-1`

**返回**

- a sequence layout where element layouts in the `flatten() flattened projection` of this sequence layout (see `flatten`) are re-arranged into one or more nested sequence layouts

**异常**

- **IllegalArgumentException** — if two or more element counts are set to `-1`, or if one or more element count is `<= 0` (but other than `-1`) or, if, after any required inference, multiplying the element counts does not yield the same element count as the flattened projection of this sequence layout
- **UnsupportedOperationException** — if the element count of a flattened representation of this sequence layout cannot be represented as a `long`
