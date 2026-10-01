---
id: "java-en-function-relationsupport-setroles"
language: "java"
lang: "en"
category: "function"
name: "RelationSupport.setRoles"
signature: "public RoleResult setRoles(RoleList list) throws IllegalArgumentException, RelationServiceNotRegisteredException, RelationTypeNotFoundException, RelationNotFoundException"
title: "RelationSupport.setRoles"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupport.setRoles

```java
public RoleResult setRoles(RoleList list) throws IllegalArgumentException, RelationServiceNotRegisteredException, RelationTypeNotFoundException, RelationNotFoundException
```

Sets the given roles.
 

Will check the role according to its corresponding role definition
 provided in relation's relation type
 

Will send one notification (RelationNotification with type
 RELATION_BASIC_UPDATE or RELATION_MBEAN_UPDATE, depending if the
 relation is a MBean or not) per updated role.

**参数**

- **list** — list of roles to be set

**返回**

- a RoleResult object, including a RoleList (for roles successfully set) and a RoleUnresolvedList (for roles not set).

**异常**

- **IllegalArgumentException** — if null role list
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **RelationTypeNotFoundException** — if the relation type has not been declared in the Relation Service.
- **RelationNotFoundException** — if the relation MBean has not been added in the Relation Service.

**参见**

- #getRoles
