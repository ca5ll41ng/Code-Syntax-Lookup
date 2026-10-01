---
id: "java-en-function-logrecord-getthrown"
language: "java"
lang: "en"
category: "function"
name: "LogRecord.getThrown"
signature: "public Throwable getThrown()"
title: "LogRecord.getThrown"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord.getThrown

```java
public Throwable getThrown()
```

Get any throwable associated with the log record.
 

 If the event involved an exception, this will be the
 exception object. Otherwise null.

**返回**

- a throwable
