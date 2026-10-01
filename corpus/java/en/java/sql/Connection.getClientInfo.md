---
id: "java-en-function-connection-getclientinfo"
language: "java"
lang: "en"
category: "function"
name: "Connection.getClientInfo"
signature: "String getClientInfo(String name) throws SQLException"
title: "Connection.getClientInfo"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getClientInfo

```java
String getClientInfo(String name) throws SQLException
```

Returns the value of the client info property specified by name.  This
 method may return null if the specified client info property has not
 been set and does not have a default value.  This method will also
 return null if the specified client info property name is not supported
 by the driver.
 

 Applications may use the `DatabaseMetaData.getClientInfoProperties`
 method to determine the client info properties supported by the driver.

**参数**

- **name** — The name of the client info property to retrieve

**返回**

- The value of the client info property specified

**异常**

- **SQLException** — if the database server returns an error when fetching the client info value from the database or this method is called on a closed connection

**参见**

- java.sql.DatabaseMetaData#getClientInfoProperties

> *Since 1.6*
