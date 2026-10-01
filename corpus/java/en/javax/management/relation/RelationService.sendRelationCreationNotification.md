---
id: "java-en-function-relationservice-sendrelationcreationnotification"
language: "java"
lang: "en"
category: "function"
name: "RelationService.sendRelationCreationNotification"
signature: "public void sendRelationCreationNotification(String relationId) throws IllegalArgumentException, RelationNotFoundException"
title: "RelationService.sendRelationCreationNotification"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.sendRelationCreationNotification

```java
public void sendRelationCreationNotification(String relationId) throws IllegalArgumentException, RelationNotFoundException
```

Sends a notification (RelationNotification) for a relation creation.
 The notification type is:
 

- RelationNotification.RELATION_BASIC_CREATION if the relation is an
 object internal to the Relation Service
 

- RelationNotification.RELATION_MBEAN_CREATION if the relation is a
 MBean added as a relation.
 

The source object is the Relation Service itself.
 

It is called in Relation Service createRelation() and
 addRelation() methods.

**参数**

- **relationId** — relation identifier of the updated relation

**异常**

- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if there is no relation for given relation id
