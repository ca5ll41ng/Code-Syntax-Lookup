---
id: "java-en-function-commondatasource-getlogwriter"
language: "java"
lang: "en"
category: "function"
name: "CommonDataSource.getLogWriter"
signature: "java.io.PrintWriter getLogWriter() throws SQLException"
title: "CommonDataSource.getLogWriter"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/CommonDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CommonDataSource.getLogWriter

```java
java.io.PrintWriter getLogWriter() throws SQLException
```

Retrieves the log writer for this `DataSource`
 object.

 

The log writer is a character output stream to which all logging
 and tracing messages for this data source will be
 printed.  This includes messages printed by the methods of this
 object, messages printed by methods of other objects manufactured
 by this object, and so on.  Messages printed to a data source
 specific log writer are not printed to the log writer associated
 with the `java.sql.DriverManager` class.  When a
 `DataSource` object is
 created, the log writer is initially null; in other words, the
 default is for logging to be disabled.

**返回**

- the log writer for this data source or null if logging is disabled

**异常**

- **java.sql.SQLException** — if a database access error occurs

**参见**

- #setLogWriter
