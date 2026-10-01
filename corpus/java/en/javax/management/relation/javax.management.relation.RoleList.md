---
id: "java-en-function-javax-management-relation-rolelist"
language: "java"
lang: "en"
category: "function"
name: "javax.management.relation.RoleList"
title: "RoleList"
directive: "type"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleList

A RoleList represents a list of roles (Role objects). It is used as
 parameter when creating a relation, and when trying to set several roles in
 a relation (via 'setRoles()' method). It is returned as part of a
 RoleResult, to provide roles successfully retrieved.
 

It is not permitted to add objects to a `RoleList` that are
 not instances of `Role`.  This will produce an `IllegalArgumentException`
 when calling methods in this class, or when using `listIterator` and `add` or `set`.

> *Since 1.5*
