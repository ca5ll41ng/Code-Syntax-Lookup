---
id: "java-en-function-shardingkeybuilder-subkey"
language: "java"
lang: "en"
category: "function"
name: "ShardingKeyBuilder.subkey"
signature: "ShardingKeyBuilder subkey(Object subkey, SQLType subkeyType)"
title: "ShardingKeyBuilder.subkey"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ShardingKeyBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ShardingKeyBuilder.subkey

```java
ShardingKeyBuilder subkey(Object subkey, SQLType subkeyType)
```

This method will be called to add a subkey into a Sharding Key object being
 built. The order in which subkey method is called is important as it
 indicates the order of placement of the subkey within the Sharding Key.

**参数**

- **subkey** — contains the object that needs to be part of shard sub key
- **subkeyType** — sub-key data type of type java.sql.SQLType

**返回**

- this builder object
