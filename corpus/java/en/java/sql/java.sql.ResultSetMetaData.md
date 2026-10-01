---
id: "java-en-function-java-sql-resultsetmetadata"
language: "java"
lang: "en"
category: "function"
name: "java.sql.ResultSetMetaData"
title: "ResultSetMetaData"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData

An object that can be used to get information about the types
 and properties of the columns in a `ResultSet` object.
 The following code fragment creates the `ResultSet` object rs,
 creates the `ResultSetMetaData` object rsmd, and uses rsmd
 to find out how many columns rs has and whether the first column in rs
 can be used in a `WHERE` clause.
 
```

     ResultSet rs = stmt.executeQuery("SELECT a, b, c FROM TABLE2");
     ResultSetMetaData rsmd = rs.getMetaData();
     int numberOfColumns = rsmd.getColumnCount();
     boolean b = rsmd.isSearchable(1);

 
```

> *Since 1.1*
