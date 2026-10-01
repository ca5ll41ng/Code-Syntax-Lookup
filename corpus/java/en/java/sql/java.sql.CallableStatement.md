---
id: "java-en-function-java-sql-callablestatement"
language: "java"
lang: "en"
category: "function"
name: "java.sql.CallableStatement"
title: "CallableStatement"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement

The interface used to execute SQL stored procedures.  The JDBC API
 provides a stored procedure SQL escape syntax that allows stored procedures
 to be called in a standard way for all RDBMSs. This escape syntax has one
 form that includes a result parameter and one that does not. If used, the result
 parameter must be registered as an OUT parameter. The other parameters
 can be used for input, output or both. Parameters are referred to
 sequentially, by number, with the first parameter being 1.
 
```

   {?= call &lt;procedure-name&gt;[(&lt;arg1&gt;,&lt;arg2&gt;, ...)]}
   {call &lt;procedure-name&gt;[(&lt;arg1&gt;,&lt;arg2&gt;, ...)]}
 
```

 

 IN parameter values are set using the `set` methods inherited from
 `PreparedStatement`.  The type of all OUT parameters must be
 registered prior to executing the stored procedure; their values
 are retrieved after execution via the `get` methods provided here.
 

 A `CallableStatement` can return one `ResultSet` object or
 multiple `ResultSet` objects.  Multiple
 `ResultSet` objects are handled using operations
 inherited from `Statement`.
 

 For maximum portability, a call's `ResultSet` objects and
 update counts should be processed prior to getting the values of output
 parameters.

**参见**

- Connection#prepareCall
- ResultSet

> *Since 1.1*
