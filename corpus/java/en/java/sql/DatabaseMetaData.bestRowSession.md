---
id: "java-en-function-databasemetadata-bestrowsession"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.bestRowSession"
signature: "int bestRowSession = 2"
title: "DatabaseMetaData.bestRowSession"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.bestRowSession

```java
int bestRowSession = 2
```

Indicates that the scope of the best row identifier is
 the remainder of the current session.
 

 A possible value for the column
 `SCOPE`
 in the `ResultSet` object
 returned by the method `getBestRowIdentifier`.
