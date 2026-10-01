---
id: "java-en-function-logger-severe"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[0]}
name: "Logger.severe"
signature: "public void severe(String msg)"
title: "Logger.severe"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.severe

```java
public void severe(String msg)
```

Log a SEVERE message.
 

 If the logger is currently enabled for the SEVERE message
 level then the given message is forwarded to all the
 registered output Handler objects.

**参数**

- **msg** — The string message (or a key in the message catalog)
