---
id: "java-en-function-databasemetadata-getclientinfoproperties"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getClientInfoProperties"
signature: "ResultSet getClientInfoProperties() throws SQLException"
title: "DatabaseMetaData.getClientInfoProperties"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getClientInfoProperties

```java
ResultSet getClientInfoProperties() throws SQLException
```

Retrieves a list of the client info properties
 that the driver supports.  The result set contains the following columns

 
 
- **NAME** String`=>` The name of the client info property

 
- **MAX_LEN** int`=>` The maximum length of the value for the property

 
- **DEFAULT_VALUE** String`=>` The default value of the property

 
- **DESCRIPTION** String`=>` A description of the property.  This will typically
                                              contain information as to where this property is
                                              stored in the database.
 

 

 The `ResultSet` is sorted by the NAME column

**返回**

- A `ResultSet` object; each row is a supported client info property

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
