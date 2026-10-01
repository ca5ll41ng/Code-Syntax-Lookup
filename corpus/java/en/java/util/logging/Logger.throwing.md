---
id: "java-en-function-logger-throwing"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[1,2]}
name: "Logger.throwing"
signature: "public void throwing(String sourceClass, String sourceMethod, Throwable thrown)"
title: "Logger.throwing"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.throwing

```java
public void throwing(String sourceClass, String sourceMethod, Throwable thrown)
```

Log throwing an exception.
 

 This is a convenience method to log that a method is
 terminating by throwing an exception.  The logging is done
 using the FINER level.
 

 If the logger is currently enabled for the given message
 level then the given arguments are stored in a LogRecord
 which is forwarded to all registered output handlers.  The
 LogRecord's message is set to "THROW".
 

 Note that the thrown argument is stored in the LogRecord thrown
 property, rather than the LogRecord parameters property.  Thus it is
 processed specially by output Formatters and is not treated
 as a formatting parameter to the LogRecord message property.

**参数**

- **sourceClass** — name of class that issued the logging request
- **sourceMethod** — name of the method.
- **thrown** — The Throwable that is being thrown.
