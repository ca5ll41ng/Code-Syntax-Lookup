---
id: "java-en-function-databasemetadata-getfunctions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getFunctions"
signature: "ResultSet getFunctions(String catalog, String schemaPattern, String functionNamePattern) throws SQLException"
title: "DatabaseMetaData.getFunctions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getFunctions

```java
ResultSet getFunctions(String catalog, String schemaPattern, String functionNamePattern) throws SQLException
```

Retrieves a description of the  system and user functions available
 in the given catalog.
 

 Only system and user function descriptions matching the schema and
 function name criteria are returned.  They are ordered by
 `FUNCTION_CAT`, `FUNCTION_SCHEM`,
 `FUNCTION_NAME` and
 `SPECIFIC_NAME`.

 

Each function description has the following columns:
  
  
- **FUNCTION_CAT** String `=>` function catalog (may be `null`)
  
- **FUNCTION_SCHEM** String `=>` function schema (may be `null`)
  
- **FUNCTION_NAME** String `=>` function name.  This is the name
 used to invoke the function
  
- **REMARKS** String `=>` explanatory comment on the function
 
- **FUNCTION_TYPE** short `=>` kind of function:
      
      
- functionResultUnknown - Cannot determine if a return value
       or table will be returned
      
-  functionNoTable- Does not return a table
      
-  functionReturnsTable - Returns a table
      

  
- **SPECIFIC_NAME** String  `=>` the name which uniquely identifies
  this function within its schema.  This is a user specified, or DBMS
 generated, name that may be different then the `FUNCTION_NAME`
 for example with overload functions
  

 

 A user may not have permission to execute any of the functions that are
 returned by `getFunctions`

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema name pattern; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **functionNamePattern** — a function name pattern; must match the function name as it is stored in the database

**返回**

- `ResultSet` - each row is a function description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape

> *Since 1.6*
