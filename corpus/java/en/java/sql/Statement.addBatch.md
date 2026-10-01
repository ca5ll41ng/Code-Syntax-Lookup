---
id: "java-en-function-statement-addbatch"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0]}
name: "Statement.addBatch"
signature: "void addBatch( String sql ) throws SQLException"
title: "Statement.addBatch"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.addBatch

```java
void addBatch( String sql ) throws SQLException
```

Adds the given SQL command to the current list of commands for this
 `Statement` object. The commands in this list can be
 executed as a batch by calling the method `executeBatch`.
 

**Note:**This method cannot be called on a
 `PreparedStatement` or `CallableStatement`.

**参数**

- **sql** — typically this is a SQL `INSERT` or `UPDATE` statement

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement`, the driver does not support batch updates, the method is called on a `PreparedStatement` or `CallableStatement`

**参见**

- #executeBatch
- DatabaseMetaData#supportsBatchUpdates

> *Since 1.2*
