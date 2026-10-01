---
id: "java-en-function-sequencelayout-flatten"
language: "java"
lang: "en"
category: "function"
name: "SequenceLayout.flatten"
signature: "SequenceLayout flatten()"
title: "SequenceLayout.flatten"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SequenceLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceLayout.flatten

```java
SequenceLayout flatten()
```

Returns a flattened sequence layout. The element layout of the returned
 sequence layout is the first non-sequence layout found by inspecting
 (recursively, if needed) the element layout of this sequence layout:
 {@snippet lang=java :
 MemoryLayout flatElementLayout(SequenceLayout sequenceLayout) {
    return switch (sequenceLayout.elementLayout()) {
        case SequenceLayout nestedSequenceLayout -> flatElementLayout(nestedSequenceLayout);
        case MemoryLayout layout -> layout;
    };
 }
 }
 

 This transformation preserves the layout size; nested sequence layout in this
 sequence layout will be dropped and their element counts will be incorporated
 into that of the returned sequence layout. For instance, given a
 sequence layout of the kind:
 {@snippet lang=java :
 var seq = MemoryLayout.sequenceLayout(4, MemoryLayout.sequenceLayout(3, ValueLayout.JAVA_INT));
 }
 calling `seq.flatten()` will yield the following sequence layout:
 {@snippet lang=java :
 var flattenedSeq = MemoryLayout.sequenceLayout(12, ValueLayout.JAVA_INT);
 }

**返回**

- a sequence layout with the same size as this layout (but, possibly, with different element count), whose element layout is not a sequence layout

**异常**

- **UnsupportedOperationException** — if the element count of a flattened representation of this sequence layout cannot be represented as a `long`
