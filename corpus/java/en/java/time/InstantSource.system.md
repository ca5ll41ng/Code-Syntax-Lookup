---
id: "java-en-function-instantsource-system"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.system"
signature: "static InstantSource system()"
title: "InstantSource.system"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.system

```java
static InstantSource system()
```

Obtains a source that returns the current instant using the best available
 system clock.
 

 This source is based on the best available system clock. This may use
 `currentTimeMillis`, or a higher resolution system clock if
 one is available.
 

 The returned implementation is immutable, thread-safe and
 `Serializable`.

**返回**

- a source that uses the best available system clock, not null
