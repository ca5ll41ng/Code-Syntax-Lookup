---
id: "java-en-function-drivermanager-setlogstream"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.setLogStream"
signature: "public static void setLogStream(java.io.PrintStream out)"
title: "DriverManager.setLogStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.setLogStream

```java
public static void setLogStream(java.io.PrintStream out)
```

Sets the logging/tracing PrintStream that is used
 by the `DriverManager`
 and all drivers.

**参数**

- **out** — the new logging/tracing PrintStream; to disable, set to `null`

**参见**

- #getLogStream

> **⚠ Deprecated** — Use `setLogWriter`
