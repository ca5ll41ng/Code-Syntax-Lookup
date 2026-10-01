---
id: "java-en-function-databasemetadata-getimportedkeys"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getImportedKeys"
signature: "ResultSet getImportedKeys(String catalog, String schema, String table) throws SQLException"
title: "DatabaseMetaData.getImportedKeys"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getImportedKeys

```java
ResultSet getImportedKeys(String catalog, String schema, String table) throws SQLException
```

Retrieves a description of the primary key columns that are
 referenced by the given table's foreign key columns (the primary keys
 imported by a table).  They are ordered by PKTABLE_CAT,
 PKTABLE_SCHEM, PKTABLE_NAME, and KEY_SEQ.

 

Each primary key column description has the following columns:
  
  
- **PKTABLE_CAT** String `=>` primary key table catalog
      being imported (may be `null`)
  
- **PKTABLE_SCHEM** String `=>` primary key table schema
      being imported (may be `null`)
  
- **PKTABLE_NAME** String `=>` primary key table name
      being imported
  
- **PKCOLUMN_NAME** String `=>` primary key column name
      being imported
  
- **FKTABLE_CAT** String `=>` foreign key table catalog (may be `null`)
  
- **FKTABLE_SCHEM** String `=>` foreign key table schema (may be `null`)
  
- **FKTABLE_NAME** String `=>` foreign key table name
  
- **FKCOLUMN_NAME** String `=>` foreign key column name
  
- **KEY_SEQ** short `=>` sequence number within a foreign key( a value
  of 1 represents the first column of the foreign key, a value of 2 would
  represent the second column within the foreign key).
  
- **UPDATE_RULE** short `=>` What happens to a
       foreign key when the primary key is updated:
      
      
-  importedNoAction - do not allow update of primary
               key if it has been imported
      
-  importedKeyCascade - change imported key to agree
               with primary key update
      
-  importedKeySetNull - change imported key to `NULL`
               if its primary key has been updated
      
-  importedKeySetDefault - change imported key to default values
               if its primary key has been updated
      
-  importedKeyRestrict - same as importedKeyNoAction
                                 (for ODBC 2.x compatibility)
      

  
- **DELETE_RULE** short `=>` What happens to
      the foreign key when primary is deleted.
      
      
-  importedKeyNoAction - do not allow delete of primary
               key if it has been imported
      
-  importedKeyCascade - delete rows that import a deleted key
      
-  importedKeySetNull - change imported key to NULL if
               its primary key has been deleted
      
-  importedKeyRestrict - same as importedKeyNoAction
                                 (for ODBC 2.x compatibility)
      
-  importedKeySetDefault - change imported key to default if
               its primary key has been deleted
      

  
- **FK_NAME** String `=>` foreign key name (may be `null`)
  
- **PK_NAME** String `=>` primary key name (may be `null`)
  
- **DEFERRABILITY** short `=>` can the evaluation of foreign key
      constraints be deferred until commit
      
      
-  importedKeyInitiallyDeferred - see SQL92 for definition
      
-  importedKeyInitiallyImmediate - see SQL92 for definition
      
-  importedKeyNotDeferrable - see SQL92 for definition

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schema** — a schema name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **table** — a table name; must match the table name as it is stored in the database

**返回**

- `ResultSet` - each row is a primary key column description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getExportedKeys
