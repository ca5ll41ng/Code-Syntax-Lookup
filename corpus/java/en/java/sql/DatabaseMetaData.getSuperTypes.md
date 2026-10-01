---
id: "java-en-function-databasemetadata-getsupertypes"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSuperTypes"
signature: "ResultSet getSuperTypes(String catalog, String schemaPattern, String typeNamePattern) throws SQLException"
title: "DatabaseMetaData.getSuperTypes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSuperTypes

```java
ResultSet getSuperTypes(String catalog, String schemaPattern, String typeNamePattern) throws SQLException
```

Retrieves a description of the user-defined type (UDT) hierarchies defined in a
 particular schema in this database. Only the immediate super type/
 sub type relationship is modeled.
 

 Only supertype information for UDTs matching the catalog,
 schema, and type name is returned. The type name parameter
 may be a fully-qualified name. When the UDT name supplied is a
 fully-qualified name, the catalog and schemaPattern parameters are
 ignored.
 

 If a UDT does not have a direct super type, it is not listed here.
 A row of the `ResultSet` object returned by this method
 describes the designated UDT and a direct supertype. A row has the following
 columns:
  
  
- **TYPE_CAT** String `=>` the UDT's catalog (may be `null`)
  
- **TYPE_SCHEM** String `=>` UDT's schema (may be `null`)
  
- **TYPE_NAME** String `=>` type name of the UDT
  
- **SUPERTYPE_CAT** String `=>` the direct super type's catalog
                           (may be `null`)
  
- **SUPERTYPE_SCHEM** String `=>` the direct super type's schema
                             (may be `null`)
  
- **SUPERTYPE_NAME** String `=>` the direct super type's name
  

 

**Note:** If the driver does not support type hierarchies, an
 empty result set is returned.

**参数**

- **catalog** — a catalog name; "" retrieves those without a catalog; `null` means drop catalog name from the selection criteria
- **schemaPattern** — a schema name pattern; "" retrieves those without a schema
- **typeNamePattern** — a UDT name pattern; may be a fully-qualified name

**返回**

- a `ResultSet` object in which a row gives information about the designated UDT

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape

> *Since 1.4*
