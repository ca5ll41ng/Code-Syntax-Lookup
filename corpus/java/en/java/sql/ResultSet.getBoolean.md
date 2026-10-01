---
id: "java-en-function-resultset-getboolean"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getBoolean"
signature: "boolean getBoolean(int columnIndex) throws SQLException"
title: "ResultSet.getBoolean"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getBoolean

```java
boolean getBoolean(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as
 a `boolean` in the Java programming language.

 

If the designated column has a datatype of CHAR or VARCHAR
 and contains a "0" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
 and contains  a 0, a value of `false` is returned.  If the designated column has a datatype
 of CHAR or VARCHAR
 and contains a "1" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
 and contains  a 1, a value of `true` is returned.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- the column value; if the value is SQL `NULL`, the value returned is `false`

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
