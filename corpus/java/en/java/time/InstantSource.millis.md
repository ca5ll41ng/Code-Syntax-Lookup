---
id: "java-en-function-instantsource-millis"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.millis"
signature: "default long millis()"
title: "InstantSource.millis"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.millis

```java
default long millis()
```

Gets the current millisecond instant of the source.
 

 This returns the millisecond-based instant, measured from 1970-01-01T00:00Z (UTC).
 This is equivalent to the definition of `currentTimeMillis`.
 

 Most applications should avoid this method and use `Instant` to represent
 an instant on the time-line rather than a raw millisecond value.
 This method is provided to allow the use of the source in high performance use cases
 where the creation of an object would be unacceptable.

 The default implementation calls `instant`.

**返回**

- the current millisecond instant from this source, measured from the Java epoch of 1970-01-01T00:00Z (UTC), not null

**异常**

- **DateTimeException** — if the instant cannot be obtained, not thrown by most implementations
