---
id: "java-en-function-relation-handlembeanunregistration"
language: "java"
lang: "en"
category: "function"
name: "Relation.handleMBeanUnregistration"
signature: "public void handleMBeanUnregistration(ObjectName objectName, String roleName) throws IllegalArgumentException, RoleNotFoundException, InvalidRoleValueException, RelationServiceNotRegisteredException, RelationTypeNotFoundException, RelationNotFoundException"
title: "Relation.handleMBeanUnregistration"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Relation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Relation.handleMBeanUnregistration

```java
public void handleMBeanUnregistration(ObjectName objectName, String roleName) throws IllegalArgumentException, RoleNotFoundException, InvalidRoleValueException, RelationServiceNotRegisteredException, RelationTypeNotFoundException, RelationNotFoundException
```

Callback used by the Relation Service when a MBean referenced in a role
 is unregistered.
 

The Relation Service will call this method to let the relation
 take action to reflect the impact of such unregistration.
 

BEWARE. the user is not expected to call this method.
 

Current implementation is to set the role with its current value
 (list of ObjectNames of referenced MBeans) without the unregistered
 one.

**参数**

- **objectName** — ObjectName of unregistered MBean
- **roleName** — name of role where the MBean is referenced

**异常**

- **IllegalArgumentException** — if null parameter
- **RoleNotFoundException** — if role does not exist in the relation or is not writable
- **InvalidRoleValueException** — if role value does not conform to the associated role info (this will never happen when called from the Relation Service)
- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **RelationTypeNotFoundException** — if the relation type has not been declared in the Relation Service.
- **RelationNotFoundException** — if this method is called for a relation MBean not added in the Relation Service.
