---
id: "java-en-function-relationservice-getrole"
language: "java"
lang: "en"
category: "function"
name: "RelationService.getRole"
signature: "public List<ObjectName> getRole(String relationId, String roleName) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException, RoleNotFoundException"
title: "RelationService.getRole"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.getRole

```java
public List<ObjectName> getRole(String relationId, String roleName) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException, RoleNotFoundException
```

Retrieves role value for given role name in given relation.

**参数**

- **relationId** — relation id
- **roleName** — name of role

**返回**

- the ArrayList of ObjectName objects being the role value

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered
- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation with given id
- **RoleNotFoundException** — if:   - there is no role with given name   or   - the role is not readable.

**参见**

- #setRole
