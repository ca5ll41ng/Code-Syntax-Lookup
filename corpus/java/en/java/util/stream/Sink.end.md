---
id: "java-en-function-sink-end"
language: "java"
lang: "en"
category: "function"
name: "Sink.end"
signature: "default void end()"
title: "Sink.end"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Sink.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sink.end

```java
default void end()
```

Indicates that all elements have been pushed.  If the `Sink` is
 stateful, it should send any stored state downstream at this time, and
 should clear any accumulated state (and associated resources).

 

Prior to this call, the sink must be in the active state, and after
 this call it is returned to the initial state.
