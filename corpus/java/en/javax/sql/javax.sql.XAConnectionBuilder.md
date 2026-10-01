---
id: "java-en-function-javax-sql-xaconnectionbuilder"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.XAConnectionBuilder"
title: "XAConnectionBuilder"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XAConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XAConnectionBuilder

A builder created from a `XADataSource` object,
 used to establish a connection to the database that the
 `data source` object represents.  The connection
 properties that were specified for the `data source` are used as the
 default values by the `XAConnectionBuilder`.
 

The following example illustrates the use of `XAConnectionBuilder`
 to create a `XAConnection`:

 
```
`XADataSource ds = new MyXADataSource();
     ShardingKey superShardingKey = ds.createShardingKeyBuilder()
                           .subkey("EASTERN_REGION", JDBCType.VARCHAR)
                           .build();
     ShardingKey shardingKey = ds.createShardingKeyBuilder()
                           .subkey("PITTSBURGH_BRANCH", JDBCType.VARCHAR)
                           .build();
     XAConnection con = ds.createXAConnectionBuilder()
                       .user("rafa")
                       .password("tennis")
                       .shardingKey(shardingKey)
                       .superShardingKey(superShardingKey)
                       .build();
 `
```

> *Since 9*
