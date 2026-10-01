---
id: "java-en-function-relation-getrole"
language: "java"
lang: "en"
category: "function"
name: "Relation.getRole"
signature: "public List<ObjectName> getRole(String roleName) throws IllegalArgumentException, RoleNotFoundException, RelationServiceNotRegisteredException"
title: "Relation.getRole"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Relation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Relation.getRole

```java
public List<ObjectName> getRole(String roleName) throws IllegalArgumentException, RoleNotFoundException, RelationServiceNotRegisteredException
```

Retrieves role value for given role name.
 

Checks if the role exists and is readable according to the relation
 type.

**参数**

- **roleName** — name of role

**返回**

- the ArrayList of ObjectName objects being the role value

**异常**

- **IllegalArgumentException** — if null role name
- **RoleNotFoundException** — if:   - there is no role with given name   - the role is not readable.
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server

**参见**

- #setRole
