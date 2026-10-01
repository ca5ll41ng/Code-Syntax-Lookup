---
id: "java-en-function-java-sql-preparedstatement"
language: "java"
lang: "en"
category: "function"
name: "java.sql.PreparedStatement"
title: "PreparedStatement"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement

An object that represents a precompiled SQL statement.
 

A SQL statement is precompiled and stored in a
 `PreparedStatement` object. This object can then be used to
 efficiently execute this statement multiple times.

 

**Note:** The setter methods (`setShort`, `setString`,
 and so on) for setting IN parameter values
 must specify types that are compatible with the defined SQL type of
 the input parameter. For instance, if the IN parameter has SQL type
 `INTEGER`, then the method `setInt` should be used.

 

If arbitrary parameter type conversions are required, the method
 `setObject` should be used with a target SQL type.
 

 In the following example of setting a parameter, `con` represents
 an active connection:
 
```
`BigDecimal sal = new BigDecimal("153833.00");
   PreparedStatement pstmt = con.prepareStatement("UPDATE EMPLOYEES
                                     SET SALARY = ? WHERE ID = ?");
   pstmt.setBigDecimal(1, sal);
   pstmt.setInt(2, 110592);
 `
```

**参见**

- Connection#prepareStatement
- ResultSet

> *Since 1.1*
