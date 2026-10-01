---
id: "java-en-function-javax-sql-pooledconnectionbuilder"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.PooledConnectionBuilder"
title: "PooledConnectionBuilder"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnectionBuilder

A builder created from a `ConnectionPoolDataSource` object,
 used to establish a connection to the database that the
 `data source` object represents.  The connection
 properties that were specified for the `data source` are used as the
 default values by the `PooledConnectionBuilder`.
 

The following example illustrates the use of `PooledConnectionBuilder`
 to create a `XAConnection`:

 
```
`ConnectionPoolDataSource ds = new MyConnectionPoolDataSource();
     ShardingKey superShardingKey = ds.createShardingKeyBuilder()
                           .subkey("EASTERN_REGION", JDBCType.VARCHAR)
                           .build();
     ShardingKey shardingKey = ds.createShardingKeyBuilder()
                           .subkey("PITTSBURGH_BRANCH", JDBCType.VARCHAR)
                           .build();
     PooledConnection con = ds.createPooledConnectionBuilder()
                       .user("rafa")
                       .password("tennis")
                       .shardingKey(shardingKey)
                       .superShardingKey(superShardingKey)
                       .build();
 `
```

> *Since 9*
