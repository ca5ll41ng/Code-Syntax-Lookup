---
id: "java-en-function-databasemetadata-importedkeyrestrict"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.importedKeyRestrict"
signature: "int importedKeyRestrict = 1"
title: "DatabaseMetaData.importedKeyRestrict"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.importedKeyRestrict

```java
int importedKeyRestrict = 1
```

For the column `UPDATE_RULE`, indicates that
 a primary key may not be updated if it has been imported by
 another table as a foreign key.
 For the column `DELETE_RULE`, indicates that
 a primary key may not be deleted if it has been imported by
 another table as a foreign key.
 

 A possible value for the columns `UPDATE_RULE`
 and `DELETE_RULE` in the
 `ResultSet` objects returned by the methods
 `getImportedKeys`,  `getExportedKeys`,
 and `getCrossReference`.
