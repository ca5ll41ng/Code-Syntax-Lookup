---
id: "java-en-function-logger-fine"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[0]}
name: "Logger.fine"
signature: "public void fine(String msg)"
title: "Logger.fine"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.fine

```java
public void fine(String msg)
```

Log a FINE message.
 

 If the logger is currently enabled for the FINE message
 level then the given message is forwarded to all the
 registered output Handler objects.

**参数**

- **msg** — The string message (or a key in the message catalog)
