---
id: "java-en-function-relationservicembean-createrelation"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.createRelation"
signature: "public void createRelation(String relationId, String relationTypeName, RoleList roleList) throws RelationServiceNotRegisteredException, IllegalArgumentException, RoleNotFoundException, InvalidRelationIdException, RelationTypeNotFoundException, InvalidRoleValueException"
title: "RelationServiceMBean.createRelation"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.createRelation

```java
public void createRelation(String relationId, String relationTypeName, RoleList roleList) throws RelationServiceNotRegisteredException, IllegalArgumentException, RoleNotFoundException, InvalidRelationIdException, RelationTypeNotFoundException, InvalidRoleValueException
```

Creates a simple relation (represented by a RelationSupport object) of
 given relation type, and adds it in the Relation Service.
 

Roles are initialized according to the role list provided in
 parameter. The ones not initialized in this way are set to an empty
 ArrayList of ObjectNames.
 

A RelationNotification, with type RELATION_BASIC_CREATION, is sent.

**参数**

- **relationId** — relation identifier, to identify uniquely the relation inside the Relation Service
- **relationTypeName** — name of the relation type (has to be created in the Relation Service)
- **roleList** — role list to initialize roles of the relation (can be null).

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **IllegalArgumentException** — if null parameter
- **RoleNotFoundException** — if a value is provided for a role that does not exist in the relation type
- **InvalidRelationIdException** — if relation id already used
- **RelationTypeNotFoundException** — if relation type not known in Relation Service
- **InvalidRoleValueException** — if:   - the same role name is used for two different roles   - the number of referenced MBeans in given value is less than expected minimum degree   - the number of referenced MBeans in provided value exceeds expected maximum degree   - one referenced MBean in the value is not an Object of the MBean class expected for that role   - an MBean provided for that role does not exist
