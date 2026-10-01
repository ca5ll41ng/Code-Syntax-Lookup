---
id: "java-en-function-logmanager-reset"
language: "java"
lang: "en"
category: "function"
name: "LogManager.reset"
signature: "public void reset()"
title: "LogManager.reset"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.reset

```java
public void reset()
```

Reset the logging configuration.
 

 For all named loggers, the reset operation removes and closes
 all Handlers and (except for the root logger) sets the level
 to `null`. The root logger's level is set to `Level.INFO`.

 updateConfiguration` or
 `updateConfiguration(java.io.InputStream, java.util.function.Function)
 updateConfiguration` method can be used to
 properly update to a new configuration.
