---
id: "java-en-function-relationsupport-getroles"
language: "java"
lang: "en"
category: "function"
name: "RelationSupport.getRoles"
signature: "public RoleResult getRoles(String[] roleNameArray) throws IllegalArgumentException, RelationServiceNotRegisteredException"
title: "RelationSupport.getRoles"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupport.getRoles

```java
public RoleResult getRoles(String[] roleNameArray) throws IllegalArgumentException, RelationServiceNotRegisteredException
```

Retrieves values of roles with given names.
 

Checks for each role if it exists and is readable according to the
 relation type.

**参数**

- **roleNameArray** — array of names of roles to be retrieved

**返回**

- a RoleResult object, including a RoleList (for roles successfully retrieved) and a RoleUnresolvedList (for roles not retrieved).

**异常**

- **IllegalArgumentException** — if null role name
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server

**参见**

- #setRoles
