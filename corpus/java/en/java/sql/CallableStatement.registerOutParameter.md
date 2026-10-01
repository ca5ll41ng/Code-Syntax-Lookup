---
id: "java-en-function-callablestatement-registeroutparameter"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.registerOutParameter"
signature: "void registerOutParameter(int parameterIndex, int sqlType) throws SQLException"
title: "CallableStatement.registerOutParameter"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.registerOutParameter

```java
void registerOutParameter(int parameterIndex, int sqlType) throws SQLException
```

Registers the OUT parameter in ordinal position
 `parameterIndex` to the JDBC type
 `sqlType`.  All OUT parameters must be registered
 before a stored procedure is executed.
 

 The JDBC type specified by `sqlType` for an OUT
 parameter determines the Java type that must be used
 in the `get` method to read the value of that parameter.
 

 If the JDBC type expected to be returned to this output parameter
 is specific to this particular database, `sqlType`
 should be `java.sql.Types.OTHER`.  The method
 `getObject` retrieves the value.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on
- **sqlType** — the JDBC type code defined by `java.sql.Types`. If the parameter is of JDBC type `NUMERIC` or `DECIMAL`, the version of `registerOutParameter` that accepts a scale value should be used.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if `sqlType` is a `ARRAY`, `BLOB`, `CLOB`, `DATALINK`, `JAVA_OBJECT`, `NCHAR`, `NCLOB`, `NVARCHAR`, `LONGNVARCHAR`, `REF`, `ROWID`, `SQLXML` or  `STRUCT` data type and the JDBC driver does not support this data type

**参见**

- Types
