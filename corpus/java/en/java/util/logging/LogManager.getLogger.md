---
id: "java-en-function-logmanager-getlogger"
language: "java"
lang: "en"
category: "function"
name: "LogManager.getLogger"
signature: "public Logger getLogger(String name)"
title: "LogManager.getLogger"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.getLogger

```java
public Logger getLogger(String name)
```

Method to find a named logger.
 

 Note that since untrusted code may create loggers with
 arbitrary names this method should not be relied on to
 find Loggers for security sensitive logging.
 It is also important to note that the Logger associated with the
 String `name` may be garbage collected at any time if there
 is no strong reference to the Logger. The caller of this method
 must check the return value for null in order to properly handle
 the case where the Logger has been garbage collected.

**参数**

- **name** — name of the logger

**返回**

- matching logger or null if none is found
