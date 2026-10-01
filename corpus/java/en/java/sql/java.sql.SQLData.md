---
id: "java-en-function-java-sql-sqldata"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLData"
title: "SQLData"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLData

The interface used for the custom mapping of an SQL user-defined type (UDT) to
 a class in the Java programming language. The class object for a class
 implementing the `SQLData` interface will be entered in the
 appropriate `Connection` object's type map along with the SQL
 name of the UDT for which it is a custom mapping.
 

 Typically, a `SQLData` implementation
 will define a field for each attribute of an SQL structured type or a
 single field for an SQL `DISTINCT` type. When the UDT is
 retrieved from a data source with the `ResultSet.getObject`
 method, it will be mapped as an instance of this class.  A programmer
 can operate on this class instance just as on any other object in the
 Java programming language and then store any changes made to it by
 calling the `PreparedStatement.setObject` method,
 which will map it back to the SQL type.
 

 It is expected that the implementation of the class for a custom
 mapping will be done by a tool.  In a typical implementation, the
 programmer would simply supply the name of the SQL UDT, the name of
 the class to which it is being mapped, and the names of the fields to
 which each of the attributes of the UDT is to be mapped.  The tool will use
 this information to implement the `SQLData.readSQL` and
 `SQLData.writeSQL` methods.  The `readSQL` method
 calls the appropriate `SQLInput` methods to read
 each attribute from an `SQLInput` object, and the
 `writeSQL` method calls `SQLOutput` methods
 to write each attribute back to the data source via an
 `SQLOutput` object.
 

 An application programmer will not normally call `SQLData` methods
 directly, and the `SQLInput` and `SQLOutput` methods
 are called internally by `SQLData` methods, not by application code.

> *Since 1.2*
