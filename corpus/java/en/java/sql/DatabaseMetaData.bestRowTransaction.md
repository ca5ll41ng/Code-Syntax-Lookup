---
id: "java-en-function-databasemetadata-bestrowtransaction"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.bestRowTransaction"
signature: "int bestRowTransaction = 1"
title: "DatabaseMetaData.bestRowTransaction"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.bestRowTransaction

```java
int bestRowTransaction = 1
```

Indicates that the scope of the best row identifier is
 the remainder of the current transaction.
 

 A possible value for the column
 `SCOPE`
 in the `ResultSet` object
 returned by the method `getBestRowIdentifier`.
