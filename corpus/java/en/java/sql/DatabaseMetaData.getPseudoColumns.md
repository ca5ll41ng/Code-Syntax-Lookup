---
id: "java-en-function-databasemetadata-getpseudocolumns"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getPseudoColumns"
signature: "ResultSet getPseudoColumns(String catalog, String schemaPattern, String tableNamePattern, String columnNamePattern) throws SQLException"
title: "DatabaseMetaData.getPseudoColumns"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getPseudoColumns

```java
ResultSet getPseudoColumns(String catalog, String schemaPattern, String tableNamePattern, String columnNamePattern) throws SQLException
```

Retrieves a description of the pseudo or hidden columns available
 in a given table within the specified catalog and schema.
 Pseudo or hidden columns may not always be stored within
 a table and are not visible in a ResultSet unless they are
 specified in the query's outermost SELECT list. Pseudo or hidden
 columns may not necessarily be able to be modified. If there are
 no pseudo or hidden columns, an empty ResultSet is returned.

 

Only column descriptions matching the catalog, schema, table
 and column name criteria are returned.  They are ordered by
 `TABLE_CAT`,`TABLE_SCHEM`, `TABLE_NAME`
 and `COLUMN_NAME`.

 

Each column description has the following columns:
  
  
- **TABLE_CAT** String `=>` table catalog (may be `null`)
  
- **TABLE_SCHEM** String `=>` table schema (may be `null`)
  
- **TABLE_NAME** String `=>` table name
  
- **COLUMN_NAME** String `=>` column name
  
- **DATA_TYPE** int `=>` SQL type from java.sql.Types
  
- **COLUMN_SIZE** int `=>` column size.
  
- **DECIMAL_DIGITS** int `=>` the number of fractional digits. Null is returned for data types where
 DECIMAL_DIGITS is not applicable.
  
- **NUM_PREC_RADIX** int `=>` Radix (typically either 10 or 2)
  
- **COLUMN_USAGE** String `=>` The allowed usage for the column.  The
  value returned will correspond to the enum name returned by `name`
  
- **REMARKS** String `=>` comment describing column (may be `null`)
  
- **CHAR_OCTET_LENGTH** int `=>` for char types the
       maximum number of bytes in the column
  
- **IS_NULLABLE** String  `=>` ISO rules are used to determine the nullability for a column.
       
       
-  YES           --- if the column can include NULLs
       
-  NO            --- if the column cannot include NULLs
       
-  empty string  --- if the nullability for the column is unknown
       

  

 

The COLUMN_SIZE column specifies the column size for the given column.
 For numeric data, this is the maximum precision.  For character data, this is the length in characters.
 For datetime datatypes, this is the length in characters of the String representation (assuming the
 maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
 this is the length in bytes. Null is returned for data types where the
 column size is not applicable.

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema name pattern; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **tableNamePattern** — a table name pattern; must match the table name as it is stored in the database
- **columnNamePattern** — a column name pattern; must match the column name as it is stored in the database

**返回**

- `ResultSet` - each row is a column description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- PseudoColumnUsage

> *Since 1.7*
