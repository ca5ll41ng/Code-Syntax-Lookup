---
id: "java-en-function-databasemetadata-importedkeysetdefault"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.importedKeySetDefault"
signature: "int importedKeySetDefault = 4"
title: "DatabaseMetaData.importedKeySetDefault"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.importedKeySetDefault

```java
int importedKeySetDefault = 4
```

For the columns `UPDATE_RULE`
 and `DELETE_RULE`, indicates that
 if the primary key is updated or deleted, the foreign key (imported key)
 is set to the default value.
 

 A possible value for the columns `UPDATE_RULE`
 and `DELETE_RULE` in the
 `ResultSet` objects returned by the methods
 `getImportedKeys`,  `getExportedKeys`,
 and `getCrossReference`.
