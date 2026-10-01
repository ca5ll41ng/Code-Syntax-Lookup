---
id: "java-en-function-pooledconnectionbuilder-supershardingkey"
language: "java"
lang: "en"
category: "function"
name: "PooledConnectionBuilder.superShardingKey"
signature: "PooledConnectionBuilder superShardingKey(ShardingKey superShardingKey)"
title: "PooledConnectionBuilder.superShardingKey"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnectionBuilder.superShardingKey

```java
PooledConnectionBuilder superShardingKey(ShardingKey superShardingKey)
```

Specifies a `superShardingKey` to be used when creating a connection

**参数**

- **superShardingKey** — the SuperShardingKey. May be `null`

**返回**

- the same `PooledConnectionBuilder` instance

**参见**

- java.sql.ShardingKey
- java.sql.ShardingKeyBuilder
