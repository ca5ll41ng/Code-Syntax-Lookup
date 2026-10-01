---
id: "java-en-function-xaconnectionbuilder-supershardingkey"
language: "java"
lang: "en"
category: "function"
name: "XAConnectionBuilder.superShardingKey"
signature: "XAConnectionBuilder superShardingKey(ShardingKey superShardingKey)"
title: "XAConnectionBuilder.superShardingKey"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XAConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XAConnectionBuilder.superShardingKey

```java
XAConnectionBuilder superShardingKey(ShardingKey superShardingKey)
```

Specifies a `superShardingKey` to be used when creating a connection

**参数**

- **superShardingKey** — the SuperShardingKey. May be `null`

**返回**

- the same `XAConnectionBuilder` instance

**参见**

- java.sql.ShardingKey
- java.sql.ShardingKeyBuilder
