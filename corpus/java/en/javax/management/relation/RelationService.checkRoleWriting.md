---
id: "java-en-function-relationservice-checkrolewriting"
language: "java"
lang: "en"
category: "function"
name: "RelationService.checkRoleWriting"
signature: "public Integer checkRoleWriting(Role role, String relationTypeName, Boolean initFlag) throws IllegalArgumentException, RelationTypeNotFoundException"
title: "RelationService.checkRoleWriting"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.checkRoleWriting

```java
public Integer checkRoleWriting(Role role, String relationTypeName, Boolean initFlag) throws IllegalArgumentException, RelationTypeNotFoundException
```

Checks if given Role can be set in a relation of given type.

**参数**

- **role** — role to be checked
- **relationTypeName** — name of relation type
- **initFlag** — flag to specify that the checking is done for the initialization of a role, write access shall not be verified.

**返回**

- an Integer wrapping an integer corresponding to possible problems represented as constants in RoleUnresolved:   - 0 if role can be set   - integer corresponding to RoleStatus.NO_ROLE_WITH_NAME   - integer for RoleStatus.ROLE_NOT_WRITABLE   - integer for RoleStatus.LESS_THAN_MIN_ROLE_DEGREE   - integer for RoleStatus.MORE_THAN_MAX_ROLE_DEGREE   - integer for RoleStatus.REF_MBEAN_OF_INCORRECT_CLASS   - integer for RoleStatus.REF_MBEAN_NOT_REGISTERED

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationTypeNotFoundException** — if unknown relation type
