---
id: "java-en-function-statement-getmaxfieldsize"
language: "java"
lang: "en"
category: "function"
name: "Statement.getMaxFieldSize"
signature: "int getMaxFieldSize() throws SQLException"
title: "Statement.getMaxFieldSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getMaxFieldSize

```java
int getMaxFieldSize() throws SQLException
```

Retrieves the maximum number of bytes that can be
 returned for character and binary column values in a `ResultSet`
 object produced by this `Statement` object.
 This limit applies only to  `BINARY`, `VARBINARY`,
 `LONGVARBINARY`, `CHAR`, `VARCHAR`,
 `NCHAR`, `NVARCHAR`, `LONGNVARCHAR`
 and `LONGVARCHAR` columns.  If the limit is exceeded, the
 excess data is silently discarded.

**返回**

- the current column size limit for columns storing character and binary values; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #setMaxFieldSize
