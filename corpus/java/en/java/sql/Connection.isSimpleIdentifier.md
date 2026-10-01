---
id: "java-en-function-connection-issimpleidentifier"
language: "java"
lang: "en"
category: "function"
name: "Connection.isSimpleIdentifier"
signature: "default boolean isSimpleIdentifier(String identifier) throws SQLException"
title: "Connection.isSimpleIdentifier"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.isSimpleIdentifier

```java
default boolean isSimpleIdentifier(String identifier) throws SQLException
```

Returns whether `identifier` is a simple SQL identifier.
 A simple SQL identifier is referred to as regular (or ordinary) identifier
 within the SQL standard.  A regular identifier represents the name of a database
 object such as a table, column, or view.
 

 The rules for a regular Identifier are:
 
 
- The first character is an alphabetic character from a (`'\u005Cu0061'`)
 through z (`'\u005Cu007A'`), or from A (`'\u005Cu0041'`)
 through Z (`'\u005Cu005A'`)
 
- The name only contains alphanumeric characters([0-9A-Za-z])
 or the character "_"
 
- It cannot be a SQL reserved word
 

 

 A datasource may have additional rules for a regular identifier such as:
 
 
- Supports additional characters within the name based on
 the locale being used
 
- Supports a different maximum length for the identifier
 

 determine a valid simple SQL identifier:
 
 
- The identifier is not enclosed in double quotes
 
- The first character is an alphabetic character from a through z, or
 from A through Z
 
- The identifier only contains alphanumeric characters([0-9A-Za-z]) or
 the character "_"
 
- The identifier is not a SQL reserved word
 
- The identifier is between 1 and 128 characters in length inclusive
 

 
 
 Examples of the conversion:
 
 
 identifier
 Simple Identifier
 

 
 
 Hello
 true
 
 
 G'Day
 false
 
 
 "Bruce Wayne"
 false
 
 
 GoodDay$
 false
 
 
 Hello"World
 false
 
 
 "Hello"World"
 false
 
 
 "select"
 false
 
 "from"
 false
 
 
 
 
 implementation of this method in order to meet the requirements of the
 underlying datasource.

**参数**

- **identifier** — a SQL identifier

**返回**

- true if a simple SQL identifier, false otherwise

**异常**

- **NullPointerException** — if identifier is `null`
- **SQLException** — if a database access error occurs

> *Since 26*
