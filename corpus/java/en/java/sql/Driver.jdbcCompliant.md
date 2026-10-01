---
id: "java-en-function-driver-jdbccompliant"
language: "java"
lang: "en"
category: "function"
name: "Driver.jdbcCompliant"
signature: "boolean jdbcCompliant()"
title: "Driver.jdbcCompliant"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Driver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Driver.jdbcCompliant

```java
boolean jdbcCompliant()
```

Reports whether this driver is a genuine JDBC
 Compliant driver.
 A driver may only report `true` here if it passes the JDBC
 compliance tests; otherwise it is required to return `false`.
 

 JDBC compliance requires full support for the JDBC API and full support
 for SQL 92 Entry Level.  It is expected that JDBC compliant drivers will
 be available for all the major commercial databases.
 

 This method is not intended to encourage the development of non-JDBC
 compliant drivers, but is a recognition of the fact that some vendors
 are interested in using the JDBC API and framework for lightweight
 databases that do not support full database functionality, or for
 special databases such as document information retrieval where a SQL
 implementation may not be feasible.

**返回**

- `true` if this driver is JDBC Compliant; `false` otherwise
