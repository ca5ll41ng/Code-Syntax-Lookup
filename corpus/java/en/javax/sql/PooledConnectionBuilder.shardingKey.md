---
id: "java-en-function-pooledconnectionbuilder-shardingkey"
language: "java"
lang: "en"
category: "function"
name: "PooledConnectionBuilder.shardingKey"
signature: "PooledConnectionBuilder shardingKey(ShardingKey shardingKey)"
title: "PooledConnectionBuilder.shardingKey"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnectionBuilder.shardingKey

```java
PooledConnectionBuilder shardingKey(ShardingKey shardingKey)
```

Specifies a `shardingKey` to be used when creating a connection

**参数**

- **shardingKey** — the ShardingKey. May be `null`

**返回**

- the same `PooledConnectionBuilder` instance

**参见**

- java.sql.ShardingKey
- java.sql.ShardingKeyBuilder
