---
id: "java-en-function-databasemetadata-getudts"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getUDTs"
signature: "ResultSet getUDTs(String catalog, String schemaPattern, String typeNamePattern, int[] types) throws SQLException"
title: "DatabaseMetaData.getUDTs"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getUDTs

```java
ResultSet getUDTs(String catalog, String schemaPattern, String typeNamePattern, int[] types) throws SQLException
```

Retrieves a description of the user-defined types (UDTs) defined
 in a particular schema.  Schema-specific UDTs may have type
 `JAVA_OBJECT`, `STRUCT`,
 or `DISTINCT`.

 

Only types matching the catalog, schema, type name and type
 criteria are returned.  They are ordered by `DATA_TYPE`,
 `TYPE_CAT`, `TYPE_SCHEM`  and
 `TYPE_NAME`.  The type name parameter may be a fully-qualified
 name.  In this case, the catalog and schemaPattern parameters are
 ignored.

 

Each type description has the following columns:
  
  
- **TYPE_CAT** String `=>` the type's catalog (may be `null`)
  
- **TYPE_SCHEM** String `=>` type's schema (may be `null`)
  
- **TYPE_NAME** String `=>` type name
  
- **CLASS_NAME** String `=>` Java class name
  
- **DATA_TYPE** int `=>` type value defined in java.sql.Types.
     One of JAVA_OBJECT, STRUCT, or DISTINCT
  
- **REMARKS** String `=>` explanatory comment on the type
  
- **BASE_TYPE** short `=>` type code of the source type of a
     DISTINCT type or the type that implements the user-generated
     reference type of the SELF_REFERENCING_COLUMN of a structured
     type as defined in java.sql.Types (`null` if DATA_TYPE is not
     DISTINCT or not STRUCT with REFERENCE_GENERATION = USER_DEFINED)
  

 

**Note:** If the driver does not support UDTs, an empty
 result set is returned.

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema pattern name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **typeNamePattern** — a type name pattern; must match the type name as it is stored in the database; may be a fully qualified name
- **types** — a list of user-defined types (JAVA_OBJECT, STRUCT, or DISTINCT) to include; `null` returns all types

**返回**

- `ResultSet` object in which each row describes a UDT

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape

> *Since 1.2*
