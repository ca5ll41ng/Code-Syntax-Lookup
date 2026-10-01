---
id: "java-en-function-commondatasource-setlogintimeout"
language: "java"
lang: "en"
category: "function"
name: "CommonDataSource.setLoginTimeout"
signature: "void setLoginTimeout(int seconds) throws SQLException"
title: "CommonDataSource.setLoginTimeout"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/CommonDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CommonDataSource.setLoginTimeout

```java
void setLoginTimeout(int seconds) throws SQLException
```

Sets the maximum time in seconds that this data source will wait
 while attempting to connect to a database.  A value of zero
 specifies that the timeout is the default system timeout
 if there is one; otherwise, it specifies that there is no timeout.
 When a `DataSource` object is created, the login timeout is
 initially zero.

**参数**

- **seconds** — the data source login time limit

**异常**

- **SQLException** — if a database access error occurs.

**参见**

- #getLoginTimeout
