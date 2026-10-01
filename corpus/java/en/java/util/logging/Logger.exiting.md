---
id: "java-en-function-logger-exiting"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[0,1,2]}
name: "Logger.exiting"
signature: "public void exiting(String sourceClass, String sourceMethod)"
title: "Logger.exiting"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.exiting

```java
public void exiting(String sourceClass, String sourceMethod)
```

Log a method return.
 

 This is a convenience method that can be used to log returning
 from a method.  A LogRecord with message "RETURN", log level
 FINER, and the given sourceMethod and sourceClass is logged.

**参数**

- **sourceClass** — name of class that issued the logging request
- **sourceMethod** — name of the method
