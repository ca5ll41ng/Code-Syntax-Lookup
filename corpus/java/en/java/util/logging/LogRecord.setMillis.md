---
id: "java-en-function-logrecord-setmillis"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.setMillis"
signature: "public void setMillis(long millis)"
title: "LogRecord.setMillis"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.setMillis

```java
public void setMillis(long millis)
```

Set event time.

      `setInstant(java.time.Instant)
      setInstant`.

**参数**

- **millis** — event time in millis since 1970.

**参见**

- #setInstant(java.time.Instant)

> **⚠ Deprecated** — LogRecord maintains timestamps with nanosecond resolution, using `Instant` values. For this reason, `setInstant` should be used in preference to `setMillis()`.
