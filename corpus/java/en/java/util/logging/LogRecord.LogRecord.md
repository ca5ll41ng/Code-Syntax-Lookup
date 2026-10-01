---
id: "java-en-function-logrecord-logrecord"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.LogRecord"
signature: "public LogRecord(Level level, String msg)"
title: "LogRecord.LogRecord"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.LogRecord

```java
public LogRecord(Level level, String msg)
```

Construct a LogRecord with the given level and message values.
 

 The sequence property will be initialized with a new unique value.
 These sequence values are allocated in increasing order within a VM.
 

 Since JDK 9, the event time is represented by an `Instant`.
 The instant property will be initialized to the `now() current instant`, using the best available
 `systemUTC() clock` on the system.
 

 The thread ID property will be initialized with a unique ID for
 the current thread.
 

 All other properties will be initialized to "null".

**参数**

- **level** — a logging level value
- **msg** — the raw non-localized logging message (may be null)

**参见**

- java.time.Clock#systemUTC()
