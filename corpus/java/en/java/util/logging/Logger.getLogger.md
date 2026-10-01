---
id: "java-en-function-logger-getlogger"
language: "java"
lang: "en"
category: "function"
name: "Logger.getLogger"
signature: "public static Logger getLogger(String name)"
title: "Logger.getLogger"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.getLogger

```java
public static Logger getLogger(String name)
```

Find or create a logger for a named subsystem.  If a logger has
 already been created with the given name it is returned.  Otherwise
 a new logger is created.
 

 If a new logger is created its log level will be configured
 based on the LogManager configuration and it will be configured
 to also send logging output to its parent's Handlers.  It will
 be registered in the LogManager global namespace.
 

 Note: The LogManager may only retain a weak reference to the newly
 created Logger. It is important to understand that a previously
 created Logger with the given name may be garbage collected at any
 time if there is no strong reference to the Logger. In particular,
 this means that two back-to-back calls like
 `getLogger("MyLogger").log(...)` may use different Logger
 objects named "MyLogger" if there is no strong reference to the
 Logger named "MyLogger" elsewhere in the program.

**参数**

- **name** — A name for the logger.  This should be a dot-separated name and should normally be based on the package name or class name of the subsystem, such as java.net or javax.swing

**返回**

- a suitable Logger

**异常**

- **NullPointerException** — if the name is null.
