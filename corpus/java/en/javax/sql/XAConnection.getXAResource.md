---
id: "java-en-function-xaconnection-getxaresource"
language: "java"
lang: "en"
category: "function"
name: "XAConnection.getXAResource"
signature: "javax.transaction.xa.XAResource getXAResource() throws SQLException"
title: "XAConnection.getXAResource"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XAConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XAConnection.getXAResource

```java
javax.transaction.xa.XAResource getXAResource() throws SQLException
```

Retrieves an `XAResource` object that the transaction manager
 will use to manage this `XAConnection` object's participation
 in a distributed transaction.

**返回**

- the `XAResource` object

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
