---
id: "java-en-function-commondatasource-createshardingkeybuilder"
language: "java"
lang: "en"
category: "function"
name: "CommonDataSource.createShardingKeyBuilder"
signature: "default ShardingKeyBuilder createShardingKeyBuilder() throws SQLException"
title: "CommonDataSource.createShardingKeyBuilder"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/CommonDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CommonDataSource.createShardingKeyBuilder

```java
default ShardingKeyBuilder createShardingKeyBuilder() throws SQLException
```

Creates a new `ShardingKeyBuilder` instance
 The default implementation will throw a `SQLFeatureNotSupportedException`.

**返回**

- The ShardingKeyBuilder instance that was created

**异常**

- **SQLException** — if an error occurs creating the builder
- **SQLFeatureNotSupportedException** — if the driver does not support this method

**参见**

- ShardingKeyBuilder

> *Since 9*
