---
id: "java-en-function-instantsource-offset"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.offset"
signature: "static InstantSource offset(InstantSource baseSource, Duration offsetDuration)"
title: "InstantSource.offset"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.offset

```java
static InstantSource offset(InstantSource baseSource, Duration offsetDuration)
```

Obtains a source that returns instants from the specified source with the
 specified duration added.
 

 This source wraps another source, returning instants that are later by the
 specified duration. If the duration is negative, the instants will be
 earlier than the current date and time.
 The main use case for this is to simulate running in the future or in the past.
 

 A duration of zero would have no offsetting effect.
 Passing zero will return the underlying source.
 

 The returned implementation is immutable, thread-safe and `Serializable`
 providing that the base source is.

**参数**

- **baseSource** — the base source to add the duration to, not null
- **offsetDuration** — the duration to add, not null

**返回**

- a source based on the base source with the duration added, not null
