---
id: "java-en-function-logrecord-setthreadid"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.setThreadID"
signature: "public void setThreadID(int threadID)"
title: "LogRecord.setThreadID"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.setThreadID

```java
public void setThreadID(int threadID)
```

Set an identifier for the thread where the message originated.

**参数**

- **threadID** — the thread ID

> **⚠ Deprecated** — This method doesn't allow to pass a long `getId() thread id`, use `setLongThreadID` instead.
