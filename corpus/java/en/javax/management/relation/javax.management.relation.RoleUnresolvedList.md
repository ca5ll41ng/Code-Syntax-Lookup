---
id: "java-en-function-javax-management-relation-roleunresolvedlist"
language: "java"
lang: "en"
category: "function"
name: "javax.management.relation.RoleUnresolvedList"
title: "RoleUnresolvedList"
directive: "type"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleUnresolvedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleUnresolvedList

A RoleUnresolvedList represents a list of RoleUnresolved objects,
 representing roles not retrieved from a relation due to a problem
 encountered when trying to access (read or write) the roles.

 

It is not permitted to add objects to a `RoleUnresolvedList` that are
 not instances of `RoleUnresolved`.  This will produce an `IllegalArgumentException`
 when calling methods in this class, or when using `listIterator` and `add` or `set`.

> *Since 1.5*
