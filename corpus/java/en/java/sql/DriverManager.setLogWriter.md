---
id: "java-en-function-drivermanager-setlogwriter"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.setLogWriter"
signature: "public static void setLogWriter(java.io.PrintWriter out)"
title: "DriverManager.setLogWriter"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.setLogWriter

```java
public static void setLogWriter(java.io.PrintWriter out)
```

Sets the logging/tracing `PrintWriter` object
 that is used by the `DriverManager` and all drivers.

**参数**

- **out** — the new logging/tracing `PrintStream` object; `null` to disable logging and tracing

**参见**

- #getLogWriter

> *Since 1.2*
