---
id: "java-en-function-databasemetadata-getprocedures"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getProcedures"
signature: "ResultSet getProcedures(String catalog, String schemaPattern, String procedureNamePattern) throws SQLException"
title: "DatabaseMetaData.getProcedures"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getProcedures

```java
ResultSet getProcedures(String catalog, String schemaPattern, String procedureNamePattern) throws SQLException
```

Retrieves a description of the stored procedures available in the given
 catalog.
 

 Only procedure descriptions matching the schema and
 procedure name criteria are returned.  They are ordered by
 `PROCEDURE_CAT`, `PROCEDURE_SCHEM`,
 `PROCEDURE_NAME` and `SPECIFIC_NAME`.

 

Each procedure description has the following columns:
  
  
- **PROCEDURE_CAT** String `=>` procedure catalog (may be `null`)
  
- **PROCEDURE_SCHEM** String `=>` procedure schema (may be `null`)
  
- **PROCEDURE_NAME** String `=>` procedure name
  
-  reserved for future use
  
-  reserved for future use
  
-  reserved for future use
  
- **REMARKS** String `=>` explanatory comment on the procedure
  
- **PROCEDURE_TYPE** short `=>` kind of procedure:
      
      
-  procedureResultUnknown - Cannot determine if  a return value
       will be returned
      
-  procedureNoResult - Does not return a return value
      
-  procedureReturnsResult - Returns a return value
      

  
- **SPECIFIC_NAME** String  `=>` The name which uniquely identifies this
 procedure within its schema.
  

 

 A user may not have permissions to execute any of the procedures that are
 returned by `getProcedures`

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema name pattern; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **procedureNamePattern** — a procedure name pattern; must match the procedure name as it is stored in the database

**返回**

- `ResultSet` - each row is a procedure description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape
