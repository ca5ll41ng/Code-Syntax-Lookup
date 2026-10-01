---
id: "java-en-function-commondatasource-getlogintimeout"
language: "java"
lang: "en"
category: "function"
name: "CommonDataSource.getLoginTimeout"
signature: "int getLoginTimeout() throws SQLException"
title: "CommonDataSource.getLoginTimeout"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/CommonDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CommonDataSource.getLoginTimeout

```java
int getLoginTimeout() throws SQLException
```

Gets the maximum time in seconds that this data source can wait
 while attempting to connect to a database.  A value of zero
 means that the timeout is the default system timeout
 if there is one; otherwise, it means that there is no timeout.
 When a `DataSource` object is created, the login timeout is
 initially zero.

**返回**

- the data source login time limit

**异常**

- **SQLException** — if a database access error occurs.

**参见**

- #setLoginTimeout
