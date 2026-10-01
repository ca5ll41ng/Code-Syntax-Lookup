---
id: "java-en-function-callablestatement-getobject"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getObject"
signature: "Object getObject(int parameterIndex) throws SQLException"
title: "CallableStatement.getObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getObject

```java
Object getObject(int parameterIndex) throws SQLException
```

Retrieves the value of the designated parameter as an `Object`
 in the Java programming language. If the value is an SQL `NULL`,
 the driver returns a Java `null`.
 

 This method returns a Java object whose type corresponds to the JDBC
 type that was registered for this parameter using the method
 `registerOutParameter`.  By registering the target JDBC
 type as `java.sql.Types.OTHER`, this method can be used
 to read database-specific abstract data types.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on

**返回**

- A `java.lang.Object` holding the OUT parameter value

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`

**参见**

- Types
- #setObject
