---
id: "java-en-function-databasemetadata-getindexinfo"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getIndexInfo"
signature: "ResultSet getIndexInfo(String catalog, String schema, String table, boolean unique, boolean approximate) throws SQLException"
title: "DatabaseMetaData.getIndexInfo"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getIndexInfo

```java
ResultSet getIndexInfo(String catalog, String schema, String table, boolean unique, boolean approximate) throws SQLException
```

Retrieves a description of the given table's indices and statistics. They are
 ordered by NON_UNIQUE, TYPE, INDEX_NAME, and ORDINAL_POSITION.

 

Each index column description has the following columns:
  
  
- **TABLE_CAT** String `=>` table catalog (may be `null`)
  
- **TABLE_SCHEM** String `=>` table schema (may be `null`)
  
- **TABLE_NAME** String `=>` table name
  
- **NON_UNIQUE** boolean `=>` Can index values be non-unique.
      false when TYPE is tableIndexStatistic
  
- **INDEX_QUALIFIER** String `=>` index catalog (may be `null`);
      `null` when TYPE is tableIndexStatistic
  
- **INDEX_NAME** String `=>` index name; `null` when TYPE is
      tableIndexStatistic
  
- **TYPE** short `=>` index type:
      
      
-  tableIndexStatistic - this identifies table statistics that are
           returned in conjunction with a table's index descriptions
      
-  tableIndexClustered - this is a clustered index
      
-  tableIndexHashed - this is a hashed index
      
-  tableIndexOther - this is some other style of index
      

  
- **ORDINAL_POSITION** short `=>` column sequence number
      within index; zero when TYPE is tableIndexStatistic
  
- **COLUMN_NAME** String `=>` column name; `null` when TYPE is
      tableIndexStatistic
  
- **ASC_OR_DESC** String `=>` column sort sequence, "A" `=>` ascending,
      "D" `=>` descending, may be `null` if sort sequence is not supported;
      `null` when TYPE is tableIndexStatistic
  
- **CARDINALITY** long `=>` When TYPE is tableIndexStatistic, then
      this is the number of rows in the table; otherwise, it is the
      number of unique values in the index.
  
- **PAGES** long `=>` When TYPE is  tableIndexStatistic then
      this is the number of pages used for the table, otherwise it
      is the number of pages used for the current index.
  
- **FILTER_CONDITION** String `=>` Filter condition, if any.
      (may be `null`)

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in this database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schema** — a schema name; must match the schema name as it is stored in this database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **table** — a table name; must match the table name as it is stored in this database
- **unique** — when true, return only indices for unique values; when false, return indices regardless of whether unique or not
- **approximate** — when true, result is allowed to reflect approximate or out of data values; when false, results are requested to be accurate

**返回**

- `ResultSet` - each row is an index column description

**异常**

- **SQLException** — if a database access error occurs
