---
id: "java-en-function-connection-setnetworktimeout"
language: "java"
lang: "en"
category: "function"
name: "Connection.setNetworkTimeout"
signature: "void setNetworkTimeout(Executor executor, int milliseconds) throws SQLException"
title: "Connection.setNetworkTimeout"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setNetworkTimeout

```java
void setNetworkTimeout(Executor executor, int milliseconds) throws SQLException
```

Sets the maximum period a `Connection` or
 objects created from the `Connection`
 will wait for the database to reply to any one request. If any
  request remains unanswered, the waiting method will
 return with a `SQLException`, and the `Connection`
 or objects created from the `Connection`  will be marked as
 closed. Any subsequent use of
 the objects, with the exception of the `close`,
 `isClosed` or `Connection.isValid`
 methods, will result in  a `SQLException`.
 

 **Note**: This method is intended to address a rare but serious
 condition where network partitions can cause threads issuing JDBC calls
 to hang uninterruptedly in socket reads, until the OS TCP-TIMEOUT
 (typically 10 minutes). This method is related to the
 `abort abort()` method which provides an administrator
 thread a means to free any such threads in cases where the
 JDBC connection is accessible to the administrator thread.
 The `setNetworkTimeout` method will cover cases where
 there is no administrator thread, or it has no access to the
 connection. This method is severe in it's effects, and should be
 given a high enough value so it is never triggered before any more
 normal timeouts, such as transaction timeouts.
 

 JDBC driver implementations  may also choose to support the
 `setNetworkTimeout` method to impose a limit on database
 response time, in environments where no network is present.
 

 Drivers may internally implement some or all of their API calls with
 multiple internal driver-database transmissions, and it is left to the
 driver implementation to determine whether the limit will be
 applied always to the response to the API call, or to any
 single  request made during the API call.
 

 This method can be invoked more than once, such as to set a limit for an
 area of JDBC code, and to reset to the default on exit from this area.
 Invocation of this method has no impact on already outstanding
 requests.
 

 The `Statement.setQueryTimeout()` timeout value is independent of the
 timeout value specified in `setNetworkTimeout`. If the query timeout
 expires  before the network timeout then the
 statement execution will be canceled. If the network is still
 active the result will be that both the statement and connection
 are still usable. However if the network timeout expires before
 the query timeout or if the statement timeout fails due to network
 problems, the connection will be marked as closed, any resources held by
 the connection will be released and both the connection and
 statement will be unusable.
 

 When the driver determines that the `setNetworkTimeout` timeout
 value has expired, the JDBC driver marks the connection
 closed and releases any resources held by the connection.

**参数**

- **executor** — The `Executor`  implementation which will be used by `setNetworkTimeout`.
- **milliseconds** — The time in milliseconds to wait for the database operation to complete.  If the JDBC driver does not support milliseconds, the JDBC driver will round the value up to the nearest second.  If the timeout period expires before the operation completes, a SQLException will be thrown. A value of 0 indicates that there is not timeout for database operations.

**异常**

- **java.sql.SQLException** — if a database access error occurs, this method is called on a closed connection, the `executor` is `null`, or the value specified for `seconds` is less than 0.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- Statement#setQueryTimeout
- #getNetworkTimeout
- #abort
- Executor

> *Since 1.7*
