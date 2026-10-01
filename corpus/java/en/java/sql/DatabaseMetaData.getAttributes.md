---
id: "java-en-function-databasemetadata-getattributes"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getAttributes"
signature: "ResultSet getAttributes(String catalog, String schemaPattern, String typeNamePattern, String attributeNamePattern) throws SQLException"
title: "DatabaseMetaData.getAttributes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getAttributes

```java
ResultSet getAttributes(String catalog, String schemaPattern, String typeNamePattern, String attributeNamePattern) throws SQLException
```

Retrieves a description of the given attribute of the given type
 for a user-defined type (UDT) that is available in the given schema
 and catalog.
 

 Descriptions are returned only for attributes of UDTs matching the
 catalog, schema, type, and attribute name criteria. They are ordered by
 `TYPE_CAT`, `TYPE_SCHEM`,
 `TYPE_NAME` and `ORDINAL_POSITION`. This description
 does not contain inherited attributes.
 

 The `ResultSet` object that is returned has the following
 columns:
 
  
- **TYPE_CAT** String `=>` type catalog (may be `null`)
  
- **TYPE_SCHEM** String `=>` type schema (may be `null`)
  
- **TYPE_NAME** String `=>` type name
  
- **ATTR_NAME** String `=>` attribute name
  
- **DATA_TYPE** int `=>` attribute type SQL type from java.sql.Types
  
- **ATTR_TYPE_NAME** String `=>` Data source dependent type name.
  For a UDT, the type name is fully qualified. For a REF, the type name is
  fully qualified and represents the target type of the reference type.
  
- **ATTR_SIZE** int `=>` column size.  For char or date
      types this is the maximum number of characters; for numeric or
      decimal types this is precision.
  
- **DECIMAL_DIGITS** int `=>` the number of fractional digits. Null is returned for data types where
 DECIMAL_DIGITS is not applicable.
  
- **NUM_PREC_RADIX** int `=>` Radix (typically either 10 or 2)
  
- **NULLABLE** int `=>` whether NULL is allowed
      
      
-  attributeNoNulls - might not allow NULL values
      
-  attributeNullable - definitely allows NULL values
      
-  attributeNullableUnknown - nullability unknown
      

  
- **REMARKS** String `=>` comment describing column (may be `null`)
  
- **ATTR_DEF** String `=>` default value (may be `null`)
  
- **SQL_DATA_TYPE** int `=>` unused
  
- **SQL_DATETIME_SUB** int `=>` unused
  
- **CHAR_OCTET_LENGTH** int `=>` for char types the
       maximum number of bytes in the column
  
- **ORDINAL_POSITION** int `=>` index of the attribute in the UDT
      (starting at 1)
  
- **IS_NULLABLE** String  `=>` ISO rules are used to determine
 the nullability for a attribute.
       
       
-  YES           --- if the attribute can include NULLs
       
-  NO            --- if the attribute cannot include NULLs
       
-  empty string  --- if the nullability for the
 attribute is unknown
       

  
- **SCOPE_CATALOG** String `=>` catalog of table that is the
      scope of a reference attribute (`null` if DATA_TYPE isn't REF)
  
- **SCOPE_SCHEMA** String `=>` schema of table that is the
      scope of a reference attribute (`null` if DATA_TYPE isn't REF)
  
- **SCOPE_TABLE** String `=>` table name that is the scope of a
      reference attribute (`null` if the DATA_TYPE isn't REF)
 
- **SOURCE_DATA_TYPE** short `=>` source type of a distinct type or user-generated
      Ref type, SQL type from java.sql.Types (`null` if DATA_TYPE
      isn't DISTINCT or user-generated REF)

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema name pattern; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **typeNamePattern** — a type name pattern; must match the type name as it is stored in the database
- **attributeNamePattern** — an attribute name pattern; must match the attribute name as it is declared in the database

**返回**

- a `ResultSet` object in which each row is an attribute description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape

> *Since 1.4*
