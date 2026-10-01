---
id: "java-en-function-relationsupport-relationsupport"
language: "java"
lang: "en"
category: "function"
name: "RelationSupport.RelationSupport"
signature: "public RelationSupport(String relationId, ObjectName relationServiceName, String relationTypeName, RoleList list) throws InvalidRoleValueException, IllegalArgumentException"
title: "RelationSupport.RelationSupport"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupport.RelationSupport

```java
public RelationSupport(String relationId, ObjectName relationServiceName, String relationTypeName, RoleList list) throws InvalidRoleValueException, IllegalArgumentException
```

Creates a `RelationSupport` object.
 

This constructor has to be used when the RelationSupport object will
 be registered as a MBean by the user, or when creating a user relation
 MBean whose class extends RelationSupport.
 

Nothing is done at the Relation Service level, i.e.
 the `RelationSupport` object is not added to the
 `RelationService` and no checks are performed to
 see if the provided values are correct.
 The object is always created, EXCEPT if:
 

- any of the required parameters is `null`.
 

- the same name is used for two roles.
 

To be handled as a relation, the `RelationSupport` object has
 to be added to the Relation Service using the Relation Service method
 addRelation().

**参数**

- **relationId** — relation identifier, to identify the relation in the Relation Service.   Expected to be unique in the given Relation Service.
- **relationServiceName** — ObjectName of the Relation Service where the relation will be registered.   This parameter is required as it is the Relation Service that is aware of the definition of the relation type of the given relation, so that will be able to check update operations (set).
- **relationTypeName** — Name of relation type.   Expected to have been created in the given Relation Service.
- **list** — list of roles (Role objects) to initialize the relation. Can be `null`.   Expected to conform to relation info in associated relation type.

**异常**

- **InvalidRoleValueException** — if the same name is used for two roles.
- **IllegalArgumentException** — if any of the required parameters (relation id, relation service ObjectName, or relation type name) is `null`.
