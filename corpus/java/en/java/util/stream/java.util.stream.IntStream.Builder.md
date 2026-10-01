---
id: "java-en-function-java-util-stream-intstream-builder"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.IntStream.Builder"
title: "Builder"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

A mutable builder for an `IntStream`.

 

A stream builder has a lifecycle, which starts in a building
 phase, during which elements can be added, and then transitions to a built
 phase, after which elements may not be added.  The built phase
 begins when the `build` method is called, which creates an
 ordered stream whose elements are the elements that were added to the
 stream builder, in the order they were added.

**参见**

- IntStream#builder()

> *Since 1.8*
