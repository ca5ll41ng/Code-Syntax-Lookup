---
id: "java-en-function-databasemetadata-importedkeynoaction"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.importedKeyNoAction"
signature: "int importedKeyNoAction = 3"
title: "DatabaseMetaData.importedKeyNoAction"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.importedKeyNoAction

```java
int importedKeyNoAction = 3
```

For the columns `UPDATE_RULE`
 and `DELETE_RULE`, indicates that
 if the primary key has been imported, it cannot be updated or deleted.
 

 A possible value for the columns `UPDATE_RULE`
 and `DELETE_RULE` in the
 `ResultSet` objects returned by the methods
 `getImportedKeys`,  `getExportedKeys`,
 and `getCrossReference`.
