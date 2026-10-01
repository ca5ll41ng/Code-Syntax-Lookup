---
id: "java-en-function-connection-setcatalog"
language: "java"
lang: "en"
category: "function"
name: "Connection.setCatalog"
signature: "void setCatalog(String catalog) throws SQLException"
title: "Connection.setCatalog"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setCatalog

```java
void setCatalog(String catalog) throws SQLException
```

Sets the given catalog name in order to select
 a subspace of this `Connection` object's database
 in which to work.
 

 If the driver does not support catalogs, it will
 silently ignore this request.
 

 Calling `setCatalog` has no effect on previously created or prepared
 `Statement` objects. It is implementation defined whether a DBMS
 prepare operation takes place immediately when the `Connection`
 method `prepareStatement` or `prepareCall` is invoked.
 For maximum portability, `setCatalog` should be called before a
 `Statement` is created or prepared.

**参数**

- **catalog** — the name of a catalog (subspace in this `Connection` object's database) in which to work

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #getCatalog
