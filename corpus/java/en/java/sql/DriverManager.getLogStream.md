---
id: "java-en-function-drivermanager-getlogstream"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.getLogStream"
signature: "public static java.io.PrintStream getLogStream()"
title: "DriverManager.getLogStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.getLogStream

```java
public static java.io.PrintStream getLogStream()
```

Retrieves the logging/tracing PrintStream that is used by the `DriverManager`
 and all drivers.

**返回**

- the logging/tracing PrintStream; if disabled, is `null`

**参见**

- #setLogStream

> **⚠ Deprecated** — Use `getLogWriter`
