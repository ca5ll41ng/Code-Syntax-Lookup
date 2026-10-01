---
id: "java-en-function-statement-setmaxfieldsize"
language: "java"
lang: "en"
category: "function"
name: "Statement.setMaxFieldSize"
signature: "void setMaxFieldSize(int max) throws SQLException"
title: "Statement.setMaxFieldSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.setMaxFieldSize

```java
void setMaxFieldSize(int max) throws SQLException
```

Sets the limit for the maximum number of bytes that can be returned for
 character and binary column values in a `ResultSet`
 object produced by this `Statement` object.

 This limit applies
 only to `BINARY`, `VARBINARY`,
 `LONGVARBINARY`, `CHAR`, `VARCHAR`,
 `NCHAR`, `NVARCHAR`, `LONGNVARCHAR` and
 `LONGVARCHAR` fields.  If the limit is exceeded, the excess data
 is silently discarded. For maximum portability, use values
 greater than 256.

**参数**

- **max** — the new column size limit in bytes; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement` or the condition `max >= 0` is not satisfied

**参见**

- #getMaxFieldSize
