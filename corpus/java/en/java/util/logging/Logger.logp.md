---
id: "java-en-function-logger-logp"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[0,1,2,3]}
name: "Logger.logp"
signature: "public void logp(Level level, String sourceClass, String sourceMethod, String msg)"
title: "Logger.logp"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.logp

```java
public void logp(Level level, String sourceClass, String sourceMethod, String msg)
```

Log a message, specifying source class and method,
 with no arguments.
 

 If the logger is currently enabled for the given message
 level then the given message is forwarded to all the
 registered output Handler objects.

**参数**

- **level** — One of the message level identifiers, e.g., SEVERE
- **sourceClass** — name of class that issued the logging request
- **sourceMethod** — name of method that issued the logging request
- **msg** — The string message (or a key in the message catalog)
