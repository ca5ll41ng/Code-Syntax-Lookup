---
id: "java-en-function-relationservice-setroles"
language: "java"
lang: "en"
category: "function"
name: "RelationService.setRoles"
signature: "public RoleResult setRoles(String relationId, RoleList roleList) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException"
title: "RelationService.setRoles"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.setRoles

```java
public RoleResult setRoles(String relationId, RoleList roleList) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException
```

Sets the given roles in given relation.
 

Will check the role according to its corresponding role definition
 provided in relation's relation type
 

The Relation Service keeps track of the changes to keep the
 consistency of relations by handling referenced MBean deregistrations.

**参数**

- **relationId** — relation id
- **roleList** — list of roles to be set

**返回**

- a RoleResult object, including a RoleList (for roles successfully set) and a RoleUnresolvedList (for roles not set).

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation with given id

**参见**

- #getRoles
