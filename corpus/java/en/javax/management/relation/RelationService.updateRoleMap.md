---
id: "java-en-function-relationservice-updaterolemap"
language: "java"
lang: "en"
category: "function"
name: "RelationService.updateRoleMap"
signature: "public void updateRoleMap(String relationId, Role newRole, List<ObjectName> oldValue) throws IllegalArgumentException, RelationServiceNotRegisteredException, RelationNotFoundException"
title: "RelationService.updateRoleMap"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.updateRoleMap

```java
public void updateRoleMap(String relationId, Role newRole, List<ObjectName> oldValue) throws IllegalArgumentException, RelationServiceNotRegisteredException, RelationNotFoundException
```

Handles update of the Relation Service role map for the update of given
 role in given relation.
 

It is called in relation MBean setRole() (for given role) and
 setRoles() (for each role) methods (implementation provided in
 RelationSupport class).
 

It is also called in Relation Service setRole() (for given role) and
 setRoles() (for each role) methods.
 

To allow the Relation Service to maintain the consistency (in case
 of MBean unregistration) and to be able to perform queries, this method
 must be called when a role is updated.

**参数**

- **relationId** — relation identifier of the updated relation
- **newRole** — new role (name and new value)
- **oldValue** — old role value (List of ObjectName objects)

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **RelationNotFoundException** — if no relation for given id.
