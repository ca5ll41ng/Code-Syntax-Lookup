---
id: "java-en-function-rowset-setcommand"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setCommand"
signature: "void setCommand(String cmd) throws SQLException"
title: "RowSet.setCommand"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setCommand

```java
void setCommand(String cmd) throws SQLException
```

Sets this `RowSet` object's command property to the given
 SQL query.

 This property is optional
 when a rowset gets its data from a data source that does not support
 commands, such as a spreadsheet.

**参数**

- **cmd** — the SQL query that will be used to get the data for this `RowSet` object; may be `null`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getCommand
