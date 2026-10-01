---
id: "java-en-function-resultsetmetadata-getcolumnclassname"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getColumnClassName"
signature: "String getColumnClassName(int column) throws SQLException"
title: "ResultSetMetaData.getColumnClassName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getColumnClassName

```java
String getColumnClassName(int column) throws SQLException
```

Returns the fully-qualified name of the Java class whose instances
 are manufactured if the method `ResultSet.getObject`
 is called to retrieve a value
 from the column.  `ResultSet.getObject` may return a subclass of the
 class returned by this method.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- the fully-qualified name of the class in the Java programming language that would be used by the method `ResultSet.getObject` to retrieve the value in the specified column. This is the class name used for custom mapping.

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.2*
