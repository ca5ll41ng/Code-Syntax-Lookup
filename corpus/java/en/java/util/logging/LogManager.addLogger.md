---
id: "java-en-function-logmanager-addlogger"
language: "java"
lang: "en"
category: "function"
name: "LogManager.addLogger"
signature: "public boolean addLogger(Logger logger)"
title: "LogManager.addLogger"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.addLogger

```java
public boolean addLogger(Logger logger)
```

Add a named logger.  This does nothing and returns false if a logger
 with the same name is already registered.
 

 The Logger factory methods call this method to register each
 newly created Logger.
 

 The application should retain its own reference to the Logger
 object to avoid it being garbage collected.  The LogManager
 may only retain a weak reference.

**参数**

- **logger** — the new logger.

**返回**

- true if the argument logger was registered successfully, false if a logger of that name already exists.

**异常**

- **NullPointerException** — if the logger name is null.
