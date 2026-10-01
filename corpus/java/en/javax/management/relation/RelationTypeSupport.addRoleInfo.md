---
id: "java-en-function-relationtypesupport-addroleinfo"
language: "java"
lang: "en"
category: "function"
name: "RelationTypeSupport.addRoleInfo"
signature: "protected void addRoleInfo(RoleInfo roleInfo) throws IllegalArgumentException, InvalidRelationTypeException"
title: "RelationTypeSupport.addRoleInfo"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationTypeSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationTypeSupport.addRoleInfo

```java
protected void addRoleInfo(RoleInfo roleInfo) throws IllegalArgumentException, InvalidRelationTypeException
```

Add a role info.
 This method of course should not be used after the creation of the
 relation type, because updating it would invalidate that the relations
 created associated to that type still conform to it.
 Can throw a RuntimeException if trying to update a relation type
 declared in the Relation Service.

**参数**

- **roleInfo** — role info to be added.

**异常**

- **IllegalArgumentException** — if null parameter.
- **InvalidRelationTypeException** — if there is already a role info in current relation type with the same name.
