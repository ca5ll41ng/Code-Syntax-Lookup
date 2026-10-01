---
id: "java-en-function-instantsource-instant"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.instant"
signature: "Instant instant()"
title: "InstantSource.instant"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.instant

```java
Instant instant()
```

Gets the current instant of the source.
 

 This returns an instant representing the current instant as defined by the source.

**返回**

- the current instant from this source, not null

**异常**

- **DateTimeException** — if the instant cannot be obtained, not thrown by most implementations
