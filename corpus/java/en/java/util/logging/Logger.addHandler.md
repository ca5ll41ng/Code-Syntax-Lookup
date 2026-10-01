---
id: "java-en-function-logger-addhandler"
language: "java"
lang: "en"
category: "function"
name: "Logger.addHandler"
signature: "public void addHandler(Handler handler)"
title: "Logger.addHandler"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.addHandler

```java
public void addHandler(Handler handler)
```

Add a log Handler to receive logging messages.
 

 By default, Loggers also send their output to their parent logger.
 Typically the root Logger is configured with a set of Handlers
 that essentially act as default handlers for all loggers.

**参数**

- **handler** — a logging Handler
