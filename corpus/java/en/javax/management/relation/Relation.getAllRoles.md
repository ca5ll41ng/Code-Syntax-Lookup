---
id: "java-en-function-relation-getallroles"
language: "java"
lang: "en"
category: "function"
name: "Relation.getAllRoles"
signature: "public RoleResult getAllRoles() throws RelationServiceNotRegisteredException"
title: "Relation.getAllRoles"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Relation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Relation.getAllRoles

```java
public RoleResult getAllRoles() throws RelationServiceNotRegisteredException
```

Returns all roles present in the relation.

**返回**

- a RoleResult object, including a RoleList (for roles successfully retrieved) and a RoleUnresolvedList (for roles not readable).

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
