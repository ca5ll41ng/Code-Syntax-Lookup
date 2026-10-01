---
id: "java-en-function-databasemetadata-bestrowtemporary"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.bestRowTemporary"
signature: "int bestRowTemporary = 0"
title: "DatabaseMetaData.bestRowTemporary"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.bestRowTemporary

```java
int bestRowTemporary = 0
```

Indicates that the scope of the best row identifier is
 very temporary, lasting only while the
 row is being used.
 

 A possible value for the column
 `SCOPE`
 in the `ResultSet` object
 returned by the method `getBestRowIdentifier`.
