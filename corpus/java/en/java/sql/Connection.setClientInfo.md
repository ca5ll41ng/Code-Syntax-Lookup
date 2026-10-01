---
id: "java-en-function-connection-setclientinfo"
language: "java"
lang: "en"
category: "function"
name: "Connection.setClientInfo"
signature: "void setClientInfo(String name, String value) throws SQLClientInfoException"
title: "Connection.setClientInfo"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setClientInfo

```java
void setClientInfo(String name, String value) throws SQLClientInfoException
```

Sets the value of the client info property specified by name to the
 value specified by value.
 

 Applications may use the `DatabaseMetaData.getClientInfoProperties`
 method to determine the client info properties supported by the driver
 and the maximum length that may be specified for each property.
 

 The driver stores the value specified in a suitable location in the
 database.  For example in a special register, session parameter, or
 system table column.  For efficiency the driver may defer setting the
 value in the database until the next time a statement is executed or
 prepared.  Other than storing the client information in the appropriate
 place in the database, these methods shall not alter the behavior of
 the connection in anyway.  The values supplied to these methods are
 used for accounting, diagnostics and debugging purposes only.
 

 The driver shall generate a warning if the client info name specified
 is not recognized by the driver.
 

 If the value specified to this method is greater than the maximum
 length for the property the driver may either truncate the value and
 generate a warning or generate a `SQLClientInfoException`.  If the driver
 generates a `SQLClientInfoException`, the value specified was not set on the
 connection.
 

 The following are standard client info properties.  Drivers are not
 required to support these properties however if the driver supports a
 client info property that can be described by one of the standard
 properties, the standard property name should be used.

 
 
- ApplicationName -       The name of the application currently utilizing
                                                      the connection
 
- ClientUser      -       The name of the user that the application using
                                                      the connection is performing work for.  This may
                                                      not be the same as the user name that was used
                                                      in establishing the connection.
 
- ClientHostname  -       The hostname of the computer the application
                                                      using the connection is running on.

**参数**

- **name** — The name of the client info property to set
- **value** — The value to set the client info property to.  If the value is null, the current value of the specified property is cleared.

**异常**

- **SQLClientInfoException** — if the database server returns an error while setting the client info value on the database server or this method is called on a closed connection

> *Since 1.6*
