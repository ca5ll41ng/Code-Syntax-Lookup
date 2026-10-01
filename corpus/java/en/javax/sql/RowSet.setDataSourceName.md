---
id: "java-en-function-rowset-setdatasourcename"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setDataSourceName"
signature: "void setDataSourceName(String name) throws SQLException"
title: "RowSet.setDataSourceName"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setDataSourceName

```java
void setDataSourceName(String name) throws SQLException
```

Sets the data source name property for this `RowSet` object to the
 given `String`.
 

 The value of the data source name property can be used to do a lookup of
 a `DataSource` object that has been registered with a naming
 service.  After being retrieved, the `DataSource` object can be
 used to create a connection to the data source that it represents.

**参数**

- **name** — the logical name of the data source for this `RowSet` object; may be `null`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getDataSourceName
