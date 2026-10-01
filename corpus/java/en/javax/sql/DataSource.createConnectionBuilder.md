---
id: "java-en-function-datasource-createconnectionbuilder"
language: "java"
lang: "en"
category: "function"
name: "DataSource.createConnectionBuilder"
signature: "default ConnectionBuilder createConnectionBuilder() throws SQLException"
title: "DataSource.createConnectionBuilder"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/DataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataSource.createConnectionBuilder

```java
default ConnectionBuilder createConnectionBuilder() throws SQLException
```

Create a new `ConnectionBuilder` instance
 The default implementation will throw a `SQLFeatureNotSupportedException`

**返回**

- The ConnectionBuilder instance that was created

**异常**

- **SQLException** — if an error occurs creating the builder
- **SQLFeatureNotSupportedException** — if the driver does not support sharding

**参见**

- ConnectionBuilder

> *Since 9*
