---
id: "java-en-function-java-sql-wrapper"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Wrapper"
title: "Wrapper"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Wrapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Wrapper

Interface for JDBC classes which provide the ability to retrieve the delegate instance when the instance
 in question is in fact a proxy class.
 

 The wrapper pattern is employed by many JDBC driver implementations to provide extensions beyond
 the traditional JDBC API that are specific to a data source. Developers may wish to gain access to
 these resources that are wrapped (the delegates) as  proxy class instances representing the
 the actual resources. This interface describes a standard mechanism to access
 these wrapped resources
 represented by their proxy, to permit direct access to the resource delegates.

> *Since 1.6*
