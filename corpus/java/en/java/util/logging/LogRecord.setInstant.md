---
id: "java-en-function-logrecord-setinstant"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.setInstant"
signature: "public void setInstant(Instant instant)"
title: "LogRecord.setInstant"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.setInstant

```java
public void setInstant(Instant instant)
```

Sets the instant that the event occurred.
 

 If the given `instant` represents a point on the time-line too
 far in the future or past to fit in a `long` milliseconds and
 nanoseconds adjustment, then an `ArithmeticException` will be
 thrown.

**参数**

- **instant** — the instant that the event occurred.

**异常**

- **NullPointerException** — if `instant` is null.
- **ArithmeticException** — if numeric overflow would occur while calling `toEpochMilli`.

> *Since 9*
