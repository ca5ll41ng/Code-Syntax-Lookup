---
id: "java-en-function-relationservice-sendroleupdatenotification"
language: "java"
lang: "en"
category: "function"
name: "RelationService.sendRoleUpdateNotification"
signature: "public void sendRoleUpdateNotification(String relationId, Role newRole, List<ObjectName> oldValue) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationService.sendRoleUpdateNotification"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.sendRoleUpdateNotification

```java
public void sendRoleUpdateNotification(String relationId, Role newRole, List<ObjectName> oldValue) throws IllegalArgumentException, RelationNotFoundException
```

Sends a notification (RelationNotification) for a role update in the
 given relation. The notification type is:
 

- RelationNotification.RELATION_BASIC_UPDATE if the relation is an
 object internal to the Relation Service
 

- RelationNotification.RELATION_MBEAN_UPDATE if the relation is a
 MBean added as a relation.
 

The source object is the Relation Service itself.
 

It is called in relation MBean setRole() (for given role) and
 setRoles() (for each role) methods (implementation provided in
 RelationSupport class).
 

It is also called in Relation Service setRole() (for given role) and
 setRoles() (for each role) methods.

**参数**

- **relationId** — relation identifier of the updated relation
- **newRole** — new role (name and new value)
- **oldValue** — old role value (List of ObjectName objects)

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if there is no relation for given relation id
