---
id: "java-en-function-logger-config"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["crlf-logs"],"cwe":["CWE-117"],"params":[0]}
name: "Logger.config"
signature: "public void config(String msg)"
title: "Logger.config"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.config

```java
public void config(String msg)
```

Log a CONFIG message.
 

 If the logger is currently enabled for the CONFIG message
 level then the given message is forwarded to all the
 registered output Handler objects.

**参数**

- **msg** — The string message (or a key in the message catalog)
