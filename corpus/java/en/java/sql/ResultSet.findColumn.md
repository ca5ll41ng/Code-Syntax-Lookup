---
id: "java-en-function-resultset-findcolumn"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.findColumn"
signature: "int findColumn(String columnLabel) throws SQLException"
title: "ResultSet.findColumn"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.findColumn

```java
int findColumn(String columnLabel) throws SQLException
```

Maps the given `ResultSet` column label to its
 `ResultSet` column index.

**参数**

- **columnLabel** — the label for the column specified with the SQL AS clause.  If the SQL AS clause was not specified, then the label is the name of the column

**返回**

- the column index of the given column name

**异常**

- **SQLException** — if the `ResultSet` object does not contain a column labeled `columnLabel`, a database access error occurs or this method is called on a closed result set
