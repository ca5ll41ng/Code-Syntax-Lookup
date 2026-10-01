---
id: "java-en-function-xaconnectionbuilder-shardingkey"
language: "java"
lang: "en"
category: "function"
name: "XAConnectionBuilder.shardingKey"
signature: "XAConnectionBuilder shardingKey(ShardingKey shardingKey)"
title: "XAConnectionBuilder.shardingKey"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XAConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XAConnectionBuilder.shardingKey

```java
XAConnectionBuilder shardingKey(ShardingKey shardingKey)
```

Specifies a `shardingKey` to be used when creating a connection

**参数**

- **shardingKey** — the ShardingKey. May be `null`

**返回**

- the same `XAConnectionBuilder` instance

**参见**

- java.sql.ShardingKey
- java.sql.ShardingKeyBuilder
