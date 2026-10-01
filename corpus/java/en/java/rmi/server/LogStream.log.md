---
id: "java-en-function-logstream-log"
language: "java"
lang: "en"
category: "function"
name: "LogStream.log"
signature: "public static LogStream log(String name)"
title: "LogStream.log"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/LogStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogStream.log

```java
public static LogStream log(String name)
```

Return the LogStream identified by the given name.  If
 a log corresponding to "name" does not exist, a log using
 the default stream is created.

**参数**

- **name** — name identifying the desired LogStream

**返回**

- log associated with given name

> *Since 1.1*

> **⚠ Deprecated** — no replacement
