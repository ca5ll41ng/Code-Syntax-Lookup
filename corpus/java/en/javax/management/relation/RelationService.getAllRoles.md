---
id: "java-en-function-relationservice-getallroles"
language: "java"
lang: "en"
category: "function"
name: "RelationService.getAllRoles"
signature: "public RoleResult getAllRoles(String relationId) throws IllegalArgumentException, RelationNotFoundException, RelationServiceNotRegisteredException"
title: "RelationService.getAllRoles"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.getAllRoles

```java
public RoleResult getAllRoles(String relationId) throws IllegalArgumentException, RelationNotFoundException, RelationServiceNotRegisteredException
```

Returns all roles present in the relation.

**参数**

- **relationId** — relation id

**返回**

- a RoleResult object, including a RoleList (for roles successfully retrieved) and a RoleUnresolvedList (for roles not readable).

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation for given id
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
