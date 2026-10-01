---
id: "java-en-function-relationservice-addrelation"
language: "java"
lang: "en"
category: "function"
name: "RelationService.addRelation"
signature: "public void addRelation(ObjectName relationObjectName) throws IllegalArgumentException, RelationServiceNotRegisteredException, NoSuchMethodException, InvalidRelationIdException, InstanceNotFoundException, InvalidRelationServiceException, RelationTypeNotFoundException, RoleNotFoundException, InvalidRoleValueException"
title: "RelationService.addRelation"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.addRelation

```java
public void addRelation(ObjectName relationObjectName) throws IllegalArgumentException, RelationServiceNotRegisteredException, NoSuchMethodException, InvalidRelationIdException, InstanceNotFoundException, InvalidRelationServiceException, RelationTypeNotFoundException, RoleNotFoundException, InvalidRoleValueException
```

Adds an MBean created by the user (and registered by him in the MBean
 Server) as a relation in the Relation Service.
 

To be added as a relation, the MBean must conform to the
 following:
 

- implement the Relation interface
 

- have for RelationService ObjectName the ObjectName of current
 Relation Service
 

- have a relation id unique and unused in current Relation Service
 

- have for relation type a relation type created in the Relation
 Service
 

- have roles conforming to the role info provided in the relation
 type.

**参数**

- **relationObjectName** — ObjectName of the relation MBean to be added.

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **NoSuchMethodException** — If the MBean does not implement the Relation interface
- **InvalidRelationIdException** — if:   - no relation identifier in MBean   - the relation identifier is already used in the Relation Service
- **InstanceNotFoundException** — if the MBean for given ObjectName has not been registered
- **InvalidRelationServiceException** — if:   - no Relation Service name in MBean   - the Relation Service name in the MBean is not the one of the current Relation Service
- **RelationTypeNotFoundException** — if:   - no relation type name in MBean   - the relation type name in MBean does not correspond to a relation type created in the Relation Service
- **InvalidRoleValueException** — if:   - the number of referenced MBeans in a role is less than expected minimum degree   - the number of referenced MBeans in a role exceeds expected maximum degree   - one referenced MBean in the value is not an Object of the MBean class expected for that role   - an MBean provided for a role does not exist
- **RoleNotFoundException** — if a value is provided for a role that does not exist in the relation type
