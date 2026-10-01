---
id: "java-en-function-rowset-setsqlxml"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setSQLXML"
signature: "void setSQLXML(int parameterIndex, SQLXML xmlObject) throws SQLException"
title: "RowSet.setSQLXML"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setSQLXML

```java
void setSQLXML(int parameterIndex, SQLXML xmlObject) throws SQLException
```

Sets the designated parameter to the given `java.sql.SQLXML` object. The driver converts this to an
 SQL `XML` value when it sends it to the database.

**参数**

- **parameterIndex** — index of the first parameter is 1, the second is 2, ...
- **xmlObject** — a `SQLXML` object that maps an SQL `XML` value

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed result set, the `java.xml.transform.Result`, `Writer` or `OutputStream` has not been closed for the `SQLXML` object  or if there is an error processing the XML value.  The `getCause` method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.

> *Since 1.6*
