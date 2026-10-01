---
id: "java-en-function-java-sql-connectionbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.sql.ConnectionBuilder"
title: "ConnectionBuilder"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ConnectionBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionBuilder

A builder created from a `DataSource` object,
 used to establish a connection to the database that the
 `data source` object represents.  The connection
 properties that were specified for the `data source` are used as the
 default values by the `ConnectionBuilder`.
 

The following example illustrates the use of `ConnectionBuilder`
 to create a `Connection`:

 
```
`DataSource ds = new MyDataSource();
     ShardingKey superShardingKey = ds.createShardingKeyBuilder()
                           .subkey("EASTERN_REGION", JDBCType.VARCHAR)
                           .build();
     ShardingKey shardingKey = ds.createShardingKeyBuilder()
                           .subkey("PITTSBURGH_BRANCH", JDBCType.VARCHAR)
                           .build();
     Connection con = ds.createConnectionBuilder()
                       .user("rafa")
                       .password("tennis")
                       .shardingKey(shardingKey)
                       .superShardingKey(superShardingKey)
                       .build();
 `
```

> *Since 9*
