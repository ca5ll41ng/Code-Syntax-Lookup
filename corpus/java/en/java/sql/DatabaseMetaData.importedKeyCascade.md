---
id: "java-en-function-databasemetadata-importedkeycascade"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.importedKeyCascade"
signature: "int importedKeyCascade = 0"
title: "DatabaseMetaData.importedKeyCascade"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.importedKeyCascade

```java
int importedKeyCascade = 0
```

For the column `UPDATE_RULE`,
 indicates that
 when the primary key is updated, the foreign key (imported key)
 is changed to agree with it.
 For the column `DELETE_RULE`,
 it indicates that
 when the primary key is deleted, rows that imported that key
 are deleted.
 

 A possible value for the columns `UPDATE_RULE`
 and `DELETE_RULE` in the
 `ResultSet` objects returned by the methods
 `getImportedKeys`,  `getExportedKeys`,
 and `getCrossReference`.
