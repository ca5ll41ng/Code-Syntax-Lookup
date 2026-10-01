---
id: "java-en-function-clock-millis"
language: "java"
lang: "en"
category: "function"
name: "Clock.millis"
signature: "public long millis()"
title: "Clock.millis"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.millis

```java
public long millis()
```

Gets the current millisecond instant of the clock.
 

 This returns the millisecond-based instant, measured from 1970-01-01T00:00Z (UTC).
 This is equivalent to the definition of `currentTimeMillis`.
 

 Most applications should avoid this method and use `Instant` to represent
 an instant on the time-line rather than a raw millisecond value.
 This method is provided to allow the use of the clock in high performance use cases
 where the creation of an object would be unacceptable.
 

 The default implementation currently calls `instant`.

**返回**

- the current millisecond instant from this clock, measured from the Java epoch of 1970-01-01T00:00Z (UTC), not null

**异常**

- **DateTimeException** — if the instant cannot be obtained, not thrown by most implementations
