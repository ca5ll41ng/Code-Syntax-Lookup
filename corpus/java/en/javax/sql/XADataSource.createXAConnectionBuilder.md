---
id: "java-en-function-xadatasource-createxaconnectionbuilder"
language: "java"
lang: "en"
category: "function"
name: "XADataSource.createXAConnectionBuilder"
signature: "default XAConnectionBuilder createXAConnectionBuilder() throws SQLException"
title: "XADataSource.createXAConnectionBuilder"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XADataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XADataSource.createXAConnectionBuilder

```java
default XAConnectionBuilder createXAConnectionBuilder() throws SQLException
```

Creates a new `XAConnectionBuilder` instance
 The default implementation will throw a `SQLFeatureNotSupportedException`.

**返回**

- The XAConnectionBuilder instance that was created

**异常**

- **SQLException** — if an error occurs creating the builder
- **SQLFeatureNotSupportedException** — if the driver does not support sharding

**参见**

- XAConnectionBuilder

> *Since 9*
