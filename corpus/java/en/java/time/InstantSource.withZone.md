---
id: "java-en-function-instantsource-withzone"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.withZone"
signature: "default Clock withZone(ZoneId zone)"
title: "InstantSource.withZone"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.withZone

```java
default Clock withZone(ZoneId zone)
```

Returns a clock with the specified time-zone.
 

 This returns a `Clock`, which is an extension of this interface
 that combines this source and the specified time-zone.
 

 The returned implementation is immutable, thread-safe and `Serializable`
 providing that this source is.

 The default implementation returns an immutable, thread-safe and
 `Serializable` subclass of `Clock` that combines this
 source and the specified zone.

**参数**

- **zone** — the time-zone to use, not null

**返回**

- a clock based on this source with the specified time-zone, not null
