---
id: "java-en-function-logrecord-getthreadid"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.getThreadID"
signature: "public int getThreadID()"
title: "LogRecord.getThreadID"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.getThreadID

```java
public int getThreadID()
```

Get an identifier for the thread where the message originated.
 

 This is a thread identifier within the Java VM and may or
 may not map to any operating system ID.

**返回**

- thread ID

> **⚠ Deprecated** — Values returned by this method may be synthesized, and may not correspond to the actual `getId() thread id`, use `getLongThreadID` instead.
