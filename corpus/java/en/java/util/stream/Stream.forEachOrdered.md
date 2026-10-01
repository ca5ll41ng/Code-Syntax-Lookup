---
id: "java-en-function-stream-foreachordered"
language: "java"
lang: "en"
category: "function"
name: "Stream.forEachOrdered"
signature: "void forEachOrdered(Consumer<? super T> action)"
title: "Stream.forEachOrdered"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.forEachOrdered

```java
void forEachOrdered(Consumer<? super T> action)
```

Performs an action for each element of this stream, in the encounter
 order of the stream if the stream has a defined encounter order.

 

This is a terminal
 operation.

 

This operation processes the elements one at a time, in encounter
 order if one exists.  Performing the action for one element
 happens-before
 performing the action for subsequent elements, but for any given element,
 the action may be performed in whatever thread the library chooses.

**参数**

- **action** — a  non-interfering action to perform on the elements

**参见**

- #forEach(Consumer)
