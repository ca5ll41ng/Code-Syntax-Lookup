---
id: "java-en-function-relationservice-getroles"
language: "java"
lang: "en"
category: "function"
name: "RelationService.getRoles"
signature: "public RoleResult getRoles(String relationId, String[] roleNameArray) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException"
title: "RelationService.getRoles"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.getRoles

```java
public RoleResult getRoles(String relationId, String[] roleNameArray) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException
```

Retrieves values of roles with given names in given relation.

**参数**

- **relationId** — relation id
- **roleNameArray** — array of names of roles to be retrieved

**返回**

- a RoleResult object, including a RoleList (for roles successfully retrieved) and a RoleUnresolvedList (for roles not retrieved).

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation with given id

**参见**

- #setRoles
