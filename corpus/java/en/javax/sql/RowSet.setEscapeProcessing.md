---
id: "java-en-function-rowset-setescapeprocessing"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setEscapeProcessing"
signature: "void setEscapeProcessing(boolean enable) throws SQLException"
title: "RowSet.setEscapeProcessing"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setEscapeProcessing

```java
void setEscapeProcessing(boolean enable) throws SQLException
```

Sets escape processing for this `RowSet` object on or
 off. If escape scanning is on (the default), the driver will do
 escape substitution before sending an SQL statement to the database.

**参数**

- **enable** — `true` to enable escape processing; `false` to disable it

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getEscapeProcessing
