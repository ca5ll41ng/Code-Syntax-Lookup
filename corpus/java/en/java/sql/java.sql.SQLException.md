---
id: "java-en-function-java-sql-sqlexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLException"
title: "SQLException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLException

An exception that provides information on a database access
 error or other errors.

 

Each `SQLException` provides several kinds of information:
 
   
-  a string describing the error.  This is used as the Java Exception
       message, available via the method `getMessage`.
   
-  a "SQLstate" string, which follows either the XOPEN SQLstate conventions
        or the SQL:2003 conventions.
       The values of the SQLState string are described in the appropriate spec.
       The `DatabaseMetaData` method `getSQLStateType`
       can be used to discover whether the driver returns the XOPEN type or
       the SQL:2003 type.
   
-  an integer error code that is specific to each vendor.  Normally this will
       be the actual error code returned by the underlying database.
   
-  a chain to a next Exception.  This can be used to provide additional
       error information.
   
-  the causal relationship, if any for this `SQLException`.

> *Since 1.1*
