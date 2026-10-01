---
id: "java-en-function-databasemetadata-gettypeinfo"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getTypeInfo"
signature: "ResultSet getTypeInfo() throws SQLException"
title: "DatabaseMetaData.getTypeInfo"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getTypeInfo

```java
ResultSet getTypeInfo() throws SQLException
```

Retrieves a description of all the data types supported by
 this database. They are ordered by DATA_TYPE and then by how
 closely the data type maps to the corresponding JDBC SQL type.

 

If the database supports SQL distinct types, then getTypeInfo() will return
 a single row with a TYPE_NAME of DISTINCT and a DATA_TYPE of Types.DISTINCT.
 If the database supports SQL structured types, then getTypeInfo() will return
 a single row with a TYPE_NAME of STRUCT and a DATA_TYPE of Types.STRUCT.

 

If SQL distinct or structured types are supported, then information on the
 individual types may be obtained from the getUDTs() method.

 

Each type description has the following columns:
  
  
- **TYPE_NAME** String `=>` Type name
  
- **DATA_TYPE** int `=>` SQL data type from java.sql.Types
  
- **PRECISION** int `=>` maximum precision
  
- **LITERAL_PREFIX** String `=>` prefix used to quote a literal
      (may be `null`)
  
- **LITERAL_SUFFIX** String `=>` suffix used to quote a literal
  (may be `null`)
  
- **CREATE_PARAMS** String `=>` parameters used in creating
      the type (may be `null`)
  
- **NULLABLE** short `=>` can you use NULL for this type.
      
      
-  typeNoNulls - does not allow NULL values
      
-  typeNullable - allows NULL values
      
-  typeNullableUnknown - nullability unknown
      

  
- **CASE_SENSITIVE** boolean`=>` is it case sensitive.
  
- **SEARCHABLE** short `=>` can you use "WHERE" based on this type:
      
      
-  typePredNone - No support
      
-  typePredChar - Only supported with WHERE .. LIKE
      
-  typePredBasic - Supported except for WHERE .. LIKE
      
-  typeSearchable - Supported for all WHERE ..
      

  
- **UNSIGNED_ATTRIBUTE** boolean `=>` is it unsigned.
  
- **FIXED_PREC_SCALE** boolean `=>` can it be a money value.
  
- **AUTO_INCREMENT** boolean `=>` can it be used for an
      auto-increment value.
  
- **LOCAL_TYPE_NAME** String `=>` localized version of type name
      (may be `null`)
  
- **MINIMUM_SCALE** short `=>` minimum scale supported
  
- **MAXIMUM_SCALE** short `=>` maximum scale supported
  
- **SQL_DATA_TYPE** int `=>` unused
  
- **SQL_DATETIME_SUB** int `=>` unused
  
- **NUM_PREC_RADIX** int `=>` usually 2 or 10
  

 

The PRECISION column represents the maximum column size that the server supports for the given datatype.
 For numeric data, this is the maximum precision.  For character data, this is the length in characters.
 For datetime datatypes, this is the length in characters of the String representation (assuming the
 maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
 this is the length in bytes. Null is returned for data types where the
 column size is not applicable.

**返回**

- a `ResultSet` object in which each row is an SQL type description

**异常**

- **SQLException** — if a database access error occurs
