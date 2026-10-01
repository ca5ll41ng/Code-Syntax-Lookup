---
id: "java-en-function-java-sql-databasemetadata"
language: "java"
lang: "en"
category: "function"
name: "java.sql.DatabaseMetaData"
title: "DatabaseMetaData"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData

Comprehensive information about the database as a whole.
 

 This interface is implemented by driver vendors to let users know the capabilities
 of a Database Management System (DBMS) in combination with
 the driver based on JDBC technology
 ("JDBC driver") that is used with it.  Different relational DBMSs often support
 different features, implement features in different ways, and use different
 data types.  In addition, a driver may implement a feature on top of what the
 DBMS offers.  Information returned by methods in this interface applies
 to the capabilities of a particular driver and a particular DBMS working
 together. Note that as used in this documentation, the term "database" is
 used generically to refer to both the driver and DBMS.
 

 A user for this interface is commonly a tool that needs to discover how to
 deal with the underlying DBMS.  This is especially true for applications
 that are intended to be used with more than one DBMS. For example, a tool might use the method
 `getTypeInfo` to find out what data types can be used in a
 `CREATE TABLE` statement.  Or a user might call the method
 `supportsCorrelatedSubqueries` to see if it is possible to use
 a correlated subquery or `supportsBatchUpdates` to see if it is
 possible to use batch updates.
 

 Some `DatabaseMetaData` methods return lists of information
 in the form of `ResultSet` objects.
 Regular `ResultSet` methods, such as
 `getString` and `getInt`, can be used
 to retrieve the data from these `ResultSet` objects.  If
 a given form of metadata is not available, an empty `ResultSet`
 will be returned. Additional columns beyond the columns defined to be
 returned by the `ResultSet` object for a given method
 can be defined by the JDBC driver vendor and must be accessed
 by their **column label**.
 

 Some `DatabaseMetaData` methods take arguments that are
 String patterns.  These arguments all have names such as fooPattern.
 Within a pattern String, "%" means match any substring of 0 or more
 characters, and "_" means match any one character. Only metadata
 entries matching the search pattern are returned. If a search pattern
 argument is set to `null`, that argument's criterion will
 be dropped from the search.

> *Since 1.1*
