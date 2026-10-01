---
id: "java-en-function-relationservice-setrole"
language: "java"
lang: "en"
category: "function"
name: "RelationService.setRole"
signature: "public void setRole(String relationId, Role role) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException, RoleNotFoundException, InvalidRoleValueException"
title: "RelationService.setRole"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.setRole

```java
public void setRole(String relationId, Role role) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException, RoleNotFoundException, InvalidRoleValueException
```

Sets the given role in given relation.
 

Will check the role according to its corresponding role definition
 provided in relation's relation type
 

The Relation Service will keep track of the change to keep the
 consistency of relations by handling referenced MBean deregistrations.

**参数**

- **relationId** — relation id
- **role** — role to be set (name and new value)

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation with given id
- **RoleNotFoundException** — if the role does not exist or is not writable
- **InvalidRoleValueException** — if value provided for role is not valid:   - the number of referenced MBeans in given value is less than expected minimum degree   or   - the number of referenced MBeans in provided value exceeds expected maximum degree   or   - one referenced MBean in the value is not an Object of the MBean class expected for that role   or   - an MBean provided for that role does not exist

**参见**

- #getRole
