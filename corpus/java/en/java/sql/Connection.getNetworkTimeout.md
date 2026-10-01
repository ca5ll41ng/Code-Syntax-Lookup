---
id: "java-en-function-connection-getnetworktimeout"
language: "java"
lang: "en"
category: "function"
name: "Connection.getNetworkTimeout"
signature: "int getNetworkTimeout() throws SQLException"
title: "Connection.getNetworkTimeout"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getNetworkTimeout

```java
int getNetworkTimeout() throws SQLException
```

Retrieves the number of milliseconds the driver will
 wait for a database request to complete.
 If the limit is exceeded, a
 `SQLException` is thrown.

**返回**

- the current timeout limit in milliseconds; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Connection`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setNetworkTimeout

> *Since 1.7*
