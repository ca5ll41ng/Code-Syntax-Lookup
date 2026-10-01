---
id: "java-en-function-sqloutput-writesqlxml"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeSQLXML"
signature: "void writeSQLXML(SQLXML x) throws SQLException"
title: "SQLOutput.writeSQLXML"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeSQLXML

```java
void writeSQLXML(SQLXML x) throws SQLException
```

Writes an SQL `XML` value to the stream.

**参数**

- **x** — a `SQLXML` object representing data of an SQL `XML` value

**异常**

- **SQLException** — if a database access error occurs, the `java.xml.transform.Result`, `Writer` or `OutputStream` has not been closed for the `SQLXML` object or if there is an error processing the XML value.  The `getCause` method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
