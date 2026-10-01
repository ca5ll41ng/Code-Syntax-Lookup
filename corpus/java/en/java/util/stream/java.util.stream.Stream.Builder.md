---
id: "java-en-function-java-util-stream-stream-builder"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.Stream.Builder"
title: "Builder"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

A mutable builder for a `Stream`.  This allows the creation of a
 `Stream` by generating elements individually and adding them to the
 `Builder` (without the copying overhead that comes from using
 an `ArrayList` as a temporary buffer.)

 

A stream builder has a lifecycle, which starts in a building
 phase, during which elements can be added, and then transitions to a built
 phase, after which elements may not be added.  The built phase begins
 when the `build` method is called, which creates an ordered
 `Stream` whose elements are the elements that were added to the stream
 builder, in the order they were added.

**参数**

- **the** — type of stream elements

**参见**

- Stream#builder()

> *Since 1.8*
