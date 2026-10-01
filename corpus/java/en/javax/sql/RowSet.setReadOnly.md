---
id: "java-en-function-rowset-setreadonly"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setReadOnly"
signature: "void setReadOnly(boolean value) throws SQLException"
title: "RowSet.setReadOnly"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setReadOnly

```java
void setReadOnly(boolean value) throws SQLException
```

Sets whether this `RowSet` object is read-only to the
 given `boolean`.

**参数**

- **value** — `true` if read-only; `false` if updatable

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #isReadOnly
