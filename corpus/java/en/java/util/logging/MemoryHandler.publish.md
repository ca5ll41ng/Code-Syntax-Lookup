---
id: "java-en-function-memoryhandler-publish"
language: "java"
lang: "en"
category: "function"
name: "MemoryHandler.publish"
signature: "public synchronized void publish(LogRecord record)"
title: "MemoryHandler.publish"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/MemoryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryHandler.publish

```java
public synchronized void publish(LogRecord record)
```

Store a `LogRecord` in an internal buffer.
 

 If there is a `Filter`, its `isLoggable`
 method is called to check if the given log record is loggable.
 If not we return.  Otherwise the given record is copied into
 an internal circular buffer.  Then the record's level property is
 compared with the `pushLevel`. If the given level is
 greater than or equal to the `pushLevel` then `push`
 is called to write all buffered records to the target output
 `Handler`.

**参数**

- **record** — description of the log event. A null record is silently ignored and is not published
