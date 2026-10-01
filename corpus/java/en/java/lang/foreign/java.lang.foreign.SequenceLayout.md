---
id: "java-en-function-java-lang-foreign-sequencelayout"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.SequenceLayout"
title: "SequenceLayout"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SequenceLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceLayout

A compound layout that denotes a homogeneous repetition of a given
 element layout. The repetition count is said to be the sequence layout's
 element count. A sequence layout can be thought of as a struct layout where
 the sequence layout's element layout is repeated a number of times that is equal to
 the sequence layout's element count. In other words this layout:

 {@snippet lang=java :
 MemoryLayout.sequenceLayout(3, ValueLayout.JAVA_INT.withOrder(ByteOrder.BIG_ENDIAN));
 }

 is equivalent to the following layout:

 {@snippet lang=java :
 MemoryLayout.structLayout(
     ValueLayout.JAVA_INT.withOrder(ByteOrder.BIG_ENDIAN),
     ValueLayout.JAVA_INT.withOrder(ByteOrder.BIG_ENDIAN),
     ValueLayout.JAVA_INT.withOrder(ByteOrder.BIG_ENDIAN));
 }

 This class is immutable, thread-safe and
 value-based.

> *Since 22*
