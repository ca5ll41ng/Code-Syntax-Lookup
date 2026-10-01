---
id: "java-en-function-connection-setschema"
language: "java"
lang: "en"
category: "function"
name: "Connection.setSchema"
signature: "void setSchema(String schema) throws SQLException"
title: "Connection.setSchema"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setSchema

```java
void setSchema(String schema) throws SQLException
```

Sets the given schema name to access.
 

 If the driver does not support schemas, it will
 silently ignore this request.
 

 Calling `setSchema` has no effect on previously created or prepared
 `Statement` objects. It is implementation defined whether a DBMS
 prepare operation takes place immediately when the `Connection`
 method `prepareStatement` or `prepareCall` is invoked.
 For maximum portability, `setSchema` should be called before a
 `Statement` is created or prepared.

**参数**

- **schema** — the name of a schema  in which to work

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #getSchema

> *Since 1.7*
