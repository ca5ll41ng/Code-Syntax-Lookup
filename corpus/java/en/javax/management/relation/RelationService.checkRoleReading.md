---
id: "java-en-function-relationservice-checkrolereading"
language: "java"
lang: "en"
category: "function"
name: "RelationService.checkRoleReading"
signature: "public Integer checkRoleReading(String roleName, String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException"
title: "RelationService.checkRoleReading"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.checkRoleReading

```java
public Integer checkRoleReading(String roleName, String relationTypeName) throws IllegalArgumentException, RelationTypeNotFoundException
```

Checks if given Role can be read in a relation of the given type.

**参数**

- **roleName** — name of role to be checked
- **relationTypeName** — name of the relation type

**返回**

- an Integer wrapping an integer corresponding to possible problems represented as constants in RoleUnresolved:   - 0 if role can be read   - integer corresponding to RoleStatus.NO_ROLE_WITH_NAME   - integer corresponding to RoleStatus.ROLE_NOT_READABLE

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationTypeNotFoundException** — if the relation type is not known in the Relation Service
