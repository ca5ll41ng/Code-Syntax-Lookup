---
id: "java-en-function-logger-logrb"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[0,1,3,4,2]}
name: "Logger.logrb"
signature: "public void logrb(Level level, String sourceClass, String sourceMethod, String bundleName, String msg)"
title: "Logger.logrb"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.logrb

```java
public void logrb(Level level, String sourceClass, String sourceMethod, String bundleName, String msg)
```

Log a message, specifying source class, method, and resource bundle name
 with no arguments.
 

 If the logger is currently enabled for the given message
 level then the given message is forwarded to all the
 registered output Handler objects.
 

 The msg string is localized using the named resource bundle.  If the
 resource bundle name is null, or an empty String or invalid
 then the msg string is not localized.

**参数**

- **level** — One of the message level identifiers, e.g., SEVERE
- **sourceClass** — name of class that issued the logging request
- **sourceMethod** — name of method that issued the logging request
- **bundleName** — name of resource bundle to localize msg, can be null
- **msg** — The string message (or a key in the message catalog)

> **⚠ Deprecated** — Use `logrb(java.util.logging.Level, java.lang.String, java.lang.String, java.util.ResourceBundle, java.lang.String, java.lang.Object...)` instead.
