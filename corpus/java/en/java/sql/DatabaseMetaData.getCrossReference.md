---
id: "java-en-function-databasemetadata-getcrossreference"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getCrossReference"
signature: "ResultSet getCrossReference( String parentCatalog, String parentSchema, String parentTable, String foreignCatalog, String foreignSchema, String foreignTable ) throws SQLException"
title: "DatabaseMetaData.getCrossReference"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getCrossReference

```java
ResultSet getCrossReference( String parentCatalog, String parentSchema, String parentTable, String foreignCatalog, String foreignSchema, String foreignTable ) throws SQLException
```

Retrieves a description of the foreign key columns in the given foreign key
 table that reference the primary key or the columns representing a unique constraint of the  parent table (could be the same or a different table).
 The number of columns returned from the parent table must match the number of
 columns that make up the foreign key.  They
 are ordered by FKTABLE_CAT, FKTABLE_SCHEM, FKTABLE_NAME, and
 KEY_SEQ.

 

Each foreign key column description has the following columns:
  
  
- **PKTABLE_CAT** String `=>` parent key table catalog (may be `null`)
  
- **PKTABLE_SCHEM** String `=>` parent key table schema (may be `null`)
  
- **PKTABLE_NAME** String `=>` parent key table name
  
- **PKCOLUMN_NAME** String `=>` parent key column name
  
- **FKTABLE_CAT** String `=>` foreign key table catalog (may be `null`)
      being exported (may be `null`)
  
- **FKTABLE_SCHEM** String `=>` foreign key table schema (may be `null`)
      being exported (may be `null`)
  
- **FKTABLE_NAME** String `=>` foreign key table name
      being exported
  
- **FKCOLUMN_NAME** String `=>` foreign key column name
      being exported
  
- **KEY_SEQ** short `=>` sequence number within foreign key( a value
  of 1 represents the first column of the foreign key, a value of 2 would
  represent the second column within the foreign key).
  
- **UPDATE_RULE** short `=>` What happens to
       foreign key when parent key is updated:
      
      
-  importedNoAction - do not allow update of parent
               key if it has been imported
      
-  importedKeyCascade - change imported key to agree
               with parent key update
      
-  importedKeySetNull - change imported key to `NULL` if
               its parent key has been updated
      
-  importedKeySetDefault - change imported key to default values
               if its parent key has been updated
      
-  importedKeyRestrict - same as importedKeyNoAction
                                 (for ODBC 2.x compatibility)
      

  
- **DELETE_RULE** short `=>` What happens to
      the foreign key when parent key is deleted.
      
      
-  importedKeyNoAction - do not allow delete of parent
               key if it has been imported
      
-  importedKeyCascade - delete rows that import a deleted key
      
-  importedKeySetNull - change imported key to `NULL` if
               its primary key has been deleted
      
-  importedKeyRestrict - same as importedKeyNoAction
                                 (for ODBC 2.x compatibility)
      
-  importedKeySetDefault - change imported key to default if
               its parent key has been deleted
      

  
- **FK_NAME** String `=>` foreign key name (may be `null`)
  
- **PK_NAME** String `=>` parent key name (may be `null`)
  
- **DEFERRABILITY** short `=>` can the evaluation of foreign key
      constraints be deferred until commit
      
      
-  importedKeyInitiallyDeferred - see SQL92 for definition
      
-  importedKeyInitiallyImmediate - see SQL92 for definition
      
-  importedKeyNotDeferrable - see SQL92 for definition

**参数**

- **parentCatalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means drop catalog name from the selection criteria
- **parentSchema** — a schema name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means drop schema name from the selection criteria
- **parentTable** — the name of the table that exports the key; must match the table name as it is stored in the database
- **foreignCatalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means drop catalog name from the selection criteria
- **foreignSchema** — a schema name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means drop schema name from the selection criteria
- **foreignTable** — the name of the table that imports the key; must match the table name as it is stored in the database

**返回**

- `ResultSet` - each row is a foreign key column description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getImportedKeys
