---
id: "java-en-function-logger-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "Logger.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public enum Level"
title: "Logger.SuppressWarnings"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public enum Level
```

System `Logger loggers` levels.

 A level has a `getName() name` and `getSeverity() severity`.
 Level values are `ALL`, `TRACE`, `DEBUG`,
 `INFO`, `WARNING`, `ERROR`, `OFF`,
 by order of increasing severity.
 

 `ALL` and `OFF`
 are simple markers with severities mapped respectively to
 `MIN_VALUE Integer.MIN_VALUE` and
 `MAX_VALUE Integer.MAX_VALUE`.
 

 **Severity values and Mapping to `java.util.logging.Level`.**
 

 `System.Logger.Level System logger levels` are mapped to
 `java.logging/java.util.logging.Level  java.util.logging levels`
 of corresponding severity.
 
The mapping is as follows:
 

 
 System.Logger Severity Level Mapping
 
 System.Logger Levels
     java.util.logging Levels
 
 
 `ALL ALL`
     `ALL ALL`
 `TRACE TRACE`
     `FINER FINER`
 `DEBUG DEBUG`
     `FINE FINE`
 `INFO INFO`
     `INFO INFO`
 `WARNING WARNING`
     `WARNING WARNING`
 `ERROR ERROR`
     `SEVERE SEVERE`
 `OFF OFF`
     `OFF OFF`

**参见**

- java.lang.System.LoggerFinder
- java.lang.System.Logger

> *Since 9*
