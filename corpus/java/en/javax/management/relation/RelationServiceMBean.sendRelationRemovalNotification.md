---
id: "java-en-function-relationservicembean-sendrelationremovalnotification"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.sendRelationRemovalNotification"
signature: "public void sendRelationRemovalNotification(String relationId, List<ObjectName> unregMBeanList) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationServiceMBean.sendRelationRemovalNotification"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.sendRelationRemovalNotification

```java
public void sendRelationRemovalNotification(String relationId, List<ObjectName> unregMBeanList) throws IllegalArgumentException, RelationNotFoundException
```

Sends a notification (RelationNotification) for a relation removal.
 The notification type is:
 

- RelationNotification.RELATION_BASIC_REMOVAL if the relation is an
 object internal to the Relation Service
 

- RelationNotification.RELATION_MBEAN_REMOVAL if the relation is a
 MBean added as a relation.
 

The source object is the Relation Service itself.
 

It is called in Relation Service removeRelation() method.

**参数**

- **relationId** — relation identifier of the updated relation
- **unregMBeanList** — List of ObjectNames of MBeans expected to be unregistered due to relation removal (can be null)

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if there is no relation for given relation id
