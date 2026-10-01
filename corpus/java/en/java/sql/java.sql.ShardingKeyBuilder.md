---
id: "java-en-function-java-sql-shardingkeybuilder"
language: "java"
lang: "en"
category: "function"
name: "java.sql.ShardingKeyBuilder"
title: "ShardingKeyBuilder"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ShardingKeyBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ShardingKeyBuilder

A builder created from a `DataSource`  or `XADataSource` object,
 used to create a `ShardingKey` with sub-keys of supported data types.
 Implementations must
 support JDBCType.VARCHAR and  may also support additional data types.
 

 The following example illustrates the use of `ShardingKeyBuilder` to
 create a `ShardingKey`:
 
```

 `DataSource ds = new MyDataSource();
     ShardingKey shardingKey = ds.createShardingKeyBuilder()
                           .subkey("abc", JDBCType.VARCHAR)
                           .subkey(94002, JDBCType.INTEGER)
                           .build();
 `
 
```

> *Since 9*
