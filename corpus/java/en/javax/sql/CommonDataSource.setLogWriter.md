---
id: "java-en-function-commondatasource-setlogwriter"
language: "java"
lang: "en"
category: "function"
name: "CommonDataSource.setLogWriter"
signature: "void setLogWriter(java.io.PrintWriter out) throws SQLException"
title: "CommonDataSource.setLogWriter"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/CommonDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CommonDataSource.setLogWriter

```java
void setLogWriter(java.io.PrintWriter out) throws SQLException
```

Sets the log writer for this `DataSource`
 object to the given `java.io.PrintWriter` object.

 

The log writer is a character output stream to which all logging
 and tracing messages for this data source will be
 printed.  This includes messages printed by the methods of this
 object, messages printed by methods of other objects manufactured
 by this object, and so on.  Messages printed to a data source-
 specific log writer are not printed to the log writer associated
 with the `java.sql.DriverManager` class. When a
 `DataSource` object is created the log writer is
 initially null; in other words, the default is for logging to be
 disabled.

**参数**

- **out** — the new log writer; to disable logging, set to null

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getLogWriter
