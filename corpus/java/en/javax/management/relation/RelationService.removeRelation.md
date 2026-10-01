---
id: "java-en-function-relationservice-removerelation"
language: "java"
lang: "en"
category: "function"
name: "RelationService.removeRelation"
signature: "public void removeRelation(String relationId) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException"
title: "RelationService.removeRelation"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.removeRelation

```java
public void removeRelation(String relationId) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationNotFoundException
```

Removes given relation from the Relation Service.
 

A RelationNotification notification is sent, its type being:
 

- RelationNotification.RELATION_BASIC_REMOVAL if the relation was
 only internal to the Relation Service
 

- RelationNotification.RELATION_MBEAN_REMOVAL if the relation is
 registered as an MBean.
 

For MBeans referenced in such relation, nothing will be done,

**参数**

- **relationId** — relation id of the relation to be removed

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **IllegalArgumentException** — if null parameter
- **RelationNotFoundException** — if no relation corresponding to given relation id
