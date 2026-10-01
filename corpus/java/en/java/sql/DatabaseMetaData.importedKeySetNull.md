---
id: "java-en-function-databasemetadata-importedkeysetnull"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.importedKeySetNull"
signature: "int importedKeySetNull = 2"
title: "DatabaseMetaData.importedKeySetNull"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.importedKeySetNull

```java
int importedKeySetNull = 2
```

For the columns `UPDATE_RULE`
 and `DELETE_RULE`, indicates that
 when the primary key is updated or deleted, the foreign key (imported key)
 is changed to `NULL`.
 

 A possible value for the columns `UPDATE_RULE`
 and `DELETE_RULE` in the
 `ResultSet` objects returned by the methods
 `getImportedKeys`,  `getExportedKeys`,
 and `getCrossReference`.
