---
id: "java-en-function-rowset-getescapeprocessing"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getEscapeProcessing"
signature: "boolean getEscapeProcessing() throws SQLException"
title: "RowSet.getEscapeProcessing"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getEscapeProcessing

```java
boolean getEscapeProcessing() throws SQLException
```

Retrieves whether escape processing is enabled for this
 `RowSet` object.
 If escape scanning is enabled, which is the default, the driver will do
 escape substitution before sending an SQL statement to the database.

**返回**

- `true` if escape processing is enabled; `false` if it is disabled

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #setEscapeProcessing
