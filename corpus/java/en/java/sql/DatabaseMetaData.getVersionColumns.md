---
id: "java-en-function-databasemetadata-getversioncolumns"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getVersionColumns"
signature: "ResultSet getVersionColumns(String catalog, String schema, String table) throws SQLException"
title: "DatabaseMetaData.getVersionColumns"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getVersionColumns

```java
ResultSet getVersionColumns(String catalog, String schema, String table) throws SQLException
```

Retrieves a description of a table's columns that are automatically
 updated when any value in a row is updated.  They are
 unordered.

 

Each column description has the following columns:
  
  
- **SCOPE** short `=>` is not used
  
- **COLUMN_NAME** String `=>` column name
  
- **DATA_TYPE** int `=>` SQL data type from `java.sql.Types`
  
- **TYPE_NAME** String `=>` Data source-dependent type name
  
- **COLUMN_SIZE** int `=>` precision
  
- **BUFFER_LENGTH** int `=>` length of column value in bytes
  
- **DECIMAL_DIGITS** short  `=>` scale - Null is returned for data types where
 DECIMAL_DIGITS is not applicable.
  
- **PSEUDO_COLUMN** short `=>` whether this is pseudo column
      like an Oracle ROWID
      
      
-  versionColumnUnknown - may or may not be pseudo column
      
-  versionColumnNotPseudo - is NOT a pseudo column
      
-  versionColumnPseudo - is a pseudo column
      

  

 

The COLUMN_SIZE column represents the specified column size for the given column.
 For numeric data, this is the maximum precision.  For character data, this is the length in characters.
 For datetime datatypes, this is the length in characters of the String representation (assuming the
 maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
 this is the length in bytes. Null is returned for data types where the
 column size is not applicable.

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schema** — a schema name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **table** — a table name; must match the table name as it is stored in the database

**返回**

- a `ResultSet` object in which each row is a column description

**异常**

- **SQLException** — if a database access error occurs
