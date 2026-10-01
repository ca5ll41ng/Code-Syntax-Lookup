---
id: "java-en-function-connection-setshardingkey"
language: "java"
lang: "en"
category: "function"
name: "Connection.setShardingKey"
signature: "default void setShardingKey(ShardingKey shardingKey, ShardingKey superShardingKey) throws SQLException"
title: "Connection.setShardingKey"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setShardingKey

```java
default void setShardingKey(ShardingKey shardingKey, ShardingKey superShardingKey) throws SQLException
```

Specifies a shardingKey and superShardingKey to use with this Connection
 The default implementation will throw a
 `SQLFeatureNotSupportedException`.
 This method sets the specified sharding keys but does not require a
 round trip to the database to validate that the sharding keys are valid
 for the `Connection`.

**参数**

- **shardingKey** — the sharding key to set on this connection. The sharding key may be `null`
- **superShardingKey** — the super sharding key to set on this connection. The super sharding key may be `null`

**异常**

- **SQLException** — if an error  occurs setting the sharding keys; this method is called on a closed `connection`; or a `superShardingKey` is specified without a `shardingKey`
- **SQLFeatureNotSupportedException** — if the driver does not support sharding

**参见**

- ShardingKey
- ShardingKeyBuilder

> *Since 9*
