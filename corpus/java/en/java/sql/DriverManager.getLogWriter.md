---
id: "java-en-function-drivermanager-getlogwriter"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.getLogWriter"
signature: "public static java.io.PrintWriter getLogWriter()"
title: "DriverManager.getLogWriter"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.getLogWriter

```java
public static java.io.PrintWriter getLogWriter()
```

Retrieves the log writer.

 The `getLogWriter` and `setLogWriter`
 methods should be used instead
 of the `get/setlogStream` methods, which are deprecated.

**返回**

- a `java.io.PrintWriter` object

**参见**

- #setLogWriter

> *Since 1.2*
