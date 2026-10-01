---
id: "java-en-function-clock-instant"
language: "java"
lang: "en"
category: "function"
name: "Clock.instant"
signature: "public abstract Instant instant()"
title: "Clock.instant"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.instant

```java
public abstract Instant instant()
```

Gets the current instant of the clock.
 

 This returns an instant representing the current instant as defined by the clock.

**返回**

- the current instant from this clock, not null

**异常**

- **DateTimeException** — if the instant cannot be obtained, not thrown by most implementations
