---
id: "java-en-function-preparedstatement-seturl"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setURL"
signature: "void setURL(int parameterIndex, java.net.URL x) throws SQLException"
title: "PreparedStatement.setURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setURL

```java
void setURL(int parameterIndex, java.net.URL x) throws SQLException
```

Sets the designated parameter to the given `java.net.URL` value.
 The driver converts this to an SQL `DATALINK` value
 when it sends it to the database.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the `java.net.URL` object to be set

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
