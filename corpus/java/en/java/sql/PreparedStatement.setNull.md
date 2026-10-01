---
id: "java-en-function-preparedstatement-setnull"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setNull"
signature: "void setNull(int parameterIndex, int sqlType) throws SQLException"
title: "PreparedStatement.setNull"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setNull

```java
void setNull(int parameterIndex, int sqlType) throws SQLException
```

Sets the designated parameter to SQL `NULL`.

 

**Note:** You must specify the parameter's SQL type.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **sqlType** — the SQL type code defined in `java.sql.Types`

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if `sqlType` is a `ARRAY`, `BLOB`, `CLOB`, `DATALINK`, `JAVA_OBJECT`, `NCHAR`, `NCLOB`, `NVARCHAR`, `LONGNVARCHAR`, `REF`, `ROWID`, `SQLXML` or  `STRUCT` data type and the JDBC driver does not support this data type
