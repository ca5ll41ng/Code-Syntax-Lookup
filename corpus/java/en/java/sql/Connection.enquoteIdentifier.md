---
id: "java-en-function-connection-enquoteidentifier"
language: "java"
lang: "en"
category: "function"
name: "Connection.enquoteIdentifier"
signature: "default String enquoteIdentifier(String identifier, boolean alwaysDelimit) throws SQLException"
title: "Connection.enquoteIdentifier"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.enquoteIdentifier

```java
default String enquoteIdentifier(String identifier, boolean alwaysDelimit) throws SQLException
```

Returns a `isSimpleIdentifier(String) simple SQL identifier` or a
 delimited identifier.  A delimited identifier represents the name of a
 database object such as a table, column, or view that is enclosed by a
 delimiter, which is typically a double quote as defined by the SQL standard.
 

 If `identifier` is a simple SQL identifier:
 
 
- If `alwaysDelimit` is `false`, return the original value
 
- if `alwaysDelimit` is `true`, enquote the original value
 and return as a delimited identifier
 

 If `identifier` is not a simple SQL identifier, the delimited
 `identifier` to be returned must be enclosed by the delimiter
 returned from `getIdentifierQuoteString`. If
 the datasource does not support delimited identifiers, a
 `SQLFeatureNotSupportedException` is thrown.
 

 A `SQLException` will be thrown if `identifier` contains any
 invalid characters within a delimited identifier or the identifier length
 is invalid for the datasource.

 The default implementation uses the following criteria to
 determine a valid simple SQL identifier:
 
 
- The string is not enclosed in double quotes
 
- The first character is an alphabetic character from a (`'\u005C0061'`)
 through z (`'\u005Cu007A'`), or from A (`'\u005Cu0041'`)
 through Z (`'\u005Cu005A'`)
 
- The name only contains alphanumeric characters([0-9A-Za-z])
 or the character "_"
 

 The default implementation will throw a `SQLException` if:
 
 
-  `getIdentifierQuoteString` does not return a
 double quote
 
- `identifier` contains a `null` character or double quote
 
- The length of `identifier` is less than 1 or greater than 128 characters
 

 
 
 Examples of the conversion:
 
 
 identifier
 alwaysDelimit
 Result
 
 
 
 Hello
 false
 Hello
 
 
 Hello
 true
 "Hello"
 
 
 G'Day
 false
 "G'Day"
 
 
 "Bruce Wayne"
 false
 "Bruce Wayne"
 
 
 "Bruce Wayne"
 true
 "Bruce Wayne"
 
 
 "select"
 false
 "select"
 
 
 "select"
 true
 "select"
 
 
 GoodDay$
 false
 "GoodDay$"
 
 
 Hello"World
 false
 SQLException
 
 
 "Hello"World"
 false
 SQLException
 
 
 
 
 JDBC driver implementations may need to provide their own implementation
 of this method in order to meet the requirements of the underlying
 datasource.

**参数**

- **identifier** — a SQL identifier
- **alwaysDelimit** — indicates if a simple SQL identifier should be returned as a delimited identifier

**返回**

- A simple SQL identifier or a delimited identifier

**异常**

- **SQLException** — if identifier is not a valid identifier
- **SQLFeatureNotSupportedException** — if the datasource does not support delimited identifiers
- **NullPointerException** — if identifier is `null`

> *Since 26*
