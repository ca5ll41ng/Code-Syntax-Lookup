---
id: "java-en-function-javax-sql-pooledconnection"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.PooledConnection"
title: "PooledConnection"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection

An object that provides hooks for connection pool management.
 A `PooledConnection` object
 represents a physical connection to a data source.  The connection
 can be recycled rather than being closed when an application is
 finished with it, thus reducing the number of connections that
 need to be made.
 

 An application programmer does not use the `PooledConnection`
 interface directly; rather, it is used by a middle tier infrastructure
 that manages the pooling of connections.
 

 When an application calls the method `DataSource.getConnection`,
 it gets back a `Connection` object.  If connection pooling is
 being done, that `Connection` object is actually a handle to
 a `PooledConnection` object, which is a physical connection.
 

 The connection pool manager, typically the application server, maintains
 a pool of `PooledConnection` objects.  If there is a
 `PooledConnection` object available in the pool, the
 connection pool manager returns a `Connection` object that
 is a handle to that physical connection.
 If no `PooledConnection` object is available, the
 connection pool manager calls the `ConnectionPoolDataSource`
 method `getPoolConnection` to create a new physical connection.  The
  JDBC driver implementing `ConnectionPoolDataSource` creates a
  new `PooledConnection` object and returns a handle to it.
 

 When an application closes a connection, it calls the `Connection`
 method `close`. When connection pooling is being done,
 the connection pool manager is notified because it has registered itself as
 a `ConnectionEventListener` object using the
 `ConnectionPool` method `addConnectionEventListener`.
 The connection pool manager deactivates the handle to
 the `PooledConnection` object and  returns the
 `PooledConnection` object to the pool of connections so that
 it can be used again.  Thus, when an application closes its connection,
 the underlying physical connection is recycled rather than being closed.
 

 If the connection pool manager wraps or provides a proxy to the logical
 handle returned from a call to `PoolConnection.getConnection`, the pool
 manager must do one of the following when the connection pool manager
 closes or returns the `PooledConnection` to the pool in response to
 the application calling `Connection.close`:
 
 
- call `endRequest` on the logical `Connection` handle
 
- call `close` on the logical `Connection` handle
 

 

 The physical connection is not closed until the connection pool manager
 calls the `PooledConnection` method `close`.
 This method is generally called to have an orderly shutdown of the server or
 if a fatal error has made the connection unusable.

 

 A connection pool manager is often also a statement pool manager, maintaining
  a pool of `PreparedStatement` objects.
  When an application closes a prepared statement, it calls the
  `PreparedStatement`
 method `close`. When `Statement` pooling is being done,
 the pool manager is notified because it has registered itself as
 a `StatementEventListener` object using the
 `ConnectionPool` method `addStatementEventListener`.
  Thus, when an application closes its  `PreparedStatement`,
 the underlying prepared statement is recycled rather than being closed.

> *Since 1.4*
