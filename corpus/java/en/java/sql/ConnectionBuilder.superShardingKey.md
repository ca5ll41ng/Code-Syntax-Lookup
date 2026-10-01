---
id: "java-en-function-connectionbuilder-supershardingkey"
language: "java"
lang: "en"
category: "function"
name: "ConnectionBuilder.superShardingKey"
signature: "ConnectionBuilder superShardingKey(ShardingKey superShardingKey)"
title: "ConnectionBuilder.superShardingKey"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionBuilder.superShardingKey

```java
ConnectionBuilder superShardingKey(ShardingKey superShardingKey)
```

Specifies a `superShardingKey` to be used when creating a connection

**参数**

- **superShardingKey** — the SuperShardingKey. May be `null`

**返回**

- the same `ConnectionBuilder` instance

**参见**

- ShardingKey
- ShardingKeyBuilder
