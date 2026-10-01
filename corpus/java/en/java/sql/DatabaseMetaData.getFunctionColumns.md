---
id: "java-en-function-databasemetadata-getfunctioncolumns"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getFunctionColumns"
signature: "ResultSet getFunctionColumns(String catalog, String schemaPattern, String functionNamePattern, String columnNamePattern) throws SQLException"
title: "DatabaseMetaData.getFunctionColumns"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getFunctionColumns

```java
ResultSet getFunctionColumns(String catalog, String schemaPattern, String functionNamePattern, String columnNamePattern) throws SQLException
```

Retrieves a description of the given catalog's system or user
 function parameters and return type.

 

Only descriptions matching the schema,  function and
 parameter name criteria are returned. They are ordered by
 `FUNCTION_CAT`, `FUNCTION_SCHEM`,
 `FUNCTION_NAME` and
 `SPECIFIC_NAME`. Within this, the return value,
 if any, is first. Next are the parameter descriptions in call
 order. The column descriptions follow in column number order.

 

Each row in the `ResultSet`
 is a parameter description, column description or
 return type description with the following fields:
  
  
- **FUNCTION_CAT** String `=>` function catalog (may be `null`)
  
- **FUNCTION_SCHEM** String `=>` function schema (may be `null`)
  
- **FUNCTION_NAME** String `=>` function name.  This is the name
 used to invoke the function
  
- **COLUMN_NAME** String `=>` column/parameter name
  
- **COLUMN_TYPE** Short `=>` kind of column/parameter:
      
      
-  functionColumnUnknown - nobody knows
      
-  functionColumnIn - IN parameter
      
-  functionColumnInOut - INOUT parameter
      
-  functionColumnOut - OUT parameter
      
-  functionReturn - function return value
      
-  functionColumnResult - Indicates that the parameter or column
  is a column in the `ResultSet`
      

  
- **DATA_TYPE** int `=>` SQL type from java.sql.Types
  
- **TYPE_NAME** String `=>` SQL type name, for a UDT type the
  type name is fully qualified
  
- **PRECISION** int `=>` precision
  
- **LENGTH** int `=>` length in bytes of data
  
- **SCALE** short `=>` scale -  null is returned for data types where
 SCALE is not applicable.
  
- **RADIX** short `=>` radix
  
- **NULLABLE** short `=>` can it contain NULL.
      
      
-  functionNoNulls - does not allow NULL values
      
-  functionNullable - allows NULL values
      
-  functionNullableUnknown - nullability unknown
      

  
- **REMARKS** String `=>` comment describing column/parameter
  
- **CHAR_OCTET_LENGTH** int  `=>` the maximum length of binary
 and character based parameters or columns.  For any other datatype the returned value
 is a NULL
  
- **ORDINAL_POSITION** int  `=>` the ordinal position, starting
 from 1, for the input and output parameters. A value of 0
 is returned if this row describes the function's return value.
 For result set columns, it is the
 ordinal position of the column in the result set starting from 1.
  
- **IS_NULLABLE** String  `=>` ISO rules are used to determine
 the nullability for a parameter or column.
       
       
-  YES           --- if the parameter or column can include NULLs
       
-  NO            --- if the parameter or column  cannot include NULLs
       
-  empty string  --- if the nullability for the
 parameter  or column is unknown
       

  
- **SPECIFIC_NAME** String  `=>` the name which uniquely identifies
 this function within its schema.  This is a user specified, or DBMS
 generated, name that may be different then the `FUNCTION_NAME`
 for example with overload functions
  

 

The PRECISION column represents the specified column size for the given
 parameter or column.
 For numeric data, this is the maximum precision.  For character data, this is the length in characters.
 For datetime datatypes, this is the length in characters of the String representation (assuming the
 maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
 this is the length in bytes. Null is returned for data types where the
 column size is not applicable.

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema name pattern; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **functionNamePattern** — a procedure name pattern; must match the function name as it is stored in the database
- **columnNamePattern** — a parameter name pattern; must match the parameter or column name as it is stored in the database

**返回**

- `ResultSet` - each row describes a user function parameter, column  or return type

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape

> *Since 1.6*
