---
id: "java-en-function-ref-setobject"
language: "java"
lang: "en"
category: "function"
name: "Ref.setObject"
signature: "void setObject(Object value) throws SQLException"
title: "Ref.setObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Ref.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Ref.setObject

```java
void setObject(Object value) throws SQLException
```

Sets the structured type value that this `Ref`
 object references to the given instance of `Object`.
 The driver converts this to an SQL structured type when it
 sends it to the database.

**参数**

- **value** — an `Object` representing the SQL structured type instance that this `Ref` object will reference

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getObject()
- #getObject(Map)
- PreparedStatement#setObject(int, Object)
- CallableStatement#setObject(String, Object)

> *Since 1.4*
