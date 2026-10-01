---
id: "java-en-function-instantsource-fixed"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.fixed"
signature: "static InstantSource fixed(Instant fixedInstant)"
title: "InstantSource.fixed"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.fixed

```java
static InstantSource fixed(Instant fixedInstant)
```

Obtains a source that always returns the same instant.
 

 This source simply returns the specified instant.
 As such, it is not a source that represents the current instant.
 The main use case for this is in testing, where the fixed source ensures
 tests are not dependent on the current source.
 

 The returned implementation is immutable, thread-safe and `Serializable`.

**参数**

- **fixedInstant** — the instant to use, not null

**返回**

- a source that always returns the same instant, not null
