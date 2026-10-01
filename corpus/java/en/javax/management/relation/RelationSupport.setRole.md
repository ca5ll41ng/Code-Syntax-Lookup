---
id: "java-en-function-relationsupport-setrole"
language: "java"
lang: "en"
category: "function"
name: "RelationSupport.setRole"
signature: "public void setRole(Role role) throws IllegalArgumentException, RoleNotFoundException, RelationTypeNotFoundException, InvalidRoleValueException, RelationServiceNotRegisteredException, RelationNotFoundException"
title: "RelationSupport.setRole"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupport.setRole

```java
public void setRole(Role role) throws IllegalArgumentException, RoleNotFoundException, RelationTypeNotFoundException, InvalidRoleValueException, RelationServiceNotRegisteredException, RelationNotFoundException
```

Sets the given role.
 

Will check the role according to its corresponding role definition
 provided in relation's relation type
 

Will send a notification (RelationNotification with type
 RELATION_BASIC_UPDATE or RELATION_MBEAN_UPDATE, depending if the
 relation is a MBean or not).

**参数**

- **role** — role to be set (name and new value)

**异常**

- **IllegalArgumentException** — if null role
- **RoleNotFoundException** — if there is no role with the supplied role's name or if the role is not writable (no test on the write access mode performed when initializing the role)
- **InvalidRoleValueException** — if value provided for role is not valid, i.e.:   - the number of referenced MBeans in given value is less than expected minimum degree   - the number of referenced MBeans in provided value exceeds expected maximum degree   - one referenced MBean in the value is not an Object of the MBean class expected for that role   - a MBean provided for that role does not exist
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **RelationTypeNotFoundException** — if the relation type has not been declared in the Relation Service
- **RelationNotFoundException** — if the relation has not been added in the Relation Service.

**参见**

- #getRole
