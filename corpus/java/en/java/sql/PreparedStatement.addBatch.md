---
id: "java-en-function-preparedstatement-addbatch"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0]}
name: "PreparedStatement.addBatch"
signature: "void addBatch() throws SQLException"
title: "PreparedStatement.addBatch"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.addBatch

```java
void addBatch() throws SQLException
```

Adds a set of parameters to this `PreparedStatement`
 object's batch of commands.

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `PreparedStatement`

**参见**

- Statement#addBatch

> *Since 1.2*
