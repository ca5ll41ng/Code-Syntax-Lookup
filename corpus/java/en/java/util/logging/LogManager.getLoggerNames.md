---
id: "java-en-function-logmanager-getloggernames"
language: "java"
lang: "en"
category: "function"
name: "LogManager.getLoggerNames"
signature: "public Enumeration<String> getLoggerNames()"
title: "LogManager.getLoggerNames"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.getLoggerNames

```java
public Enumeration<String> getLoggerNames()
```

Get an enumeration of known logger names.
 

 Note:  Loggers may be added dynamically as new classes are loaded.
 This method only reports on the loggers that are currently registered.
 It is also important to note that this method only returns the name
 of a Logger, not a strong reference to the Logger itself.
 The returned String does nothing to prevent the Logger from being
 garbage collected. In particular, if the returned name is passed
 to `LogManager.getLogger()`, then the caller must check the
 return value from `LogManager.getLogger()` for null to properly
 handle the case where the Logger has been garbage collected in the
 time since its name was returned by this method.

**返回**

- enumeration of logger name strings
