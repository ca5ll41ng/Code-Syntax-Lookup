---
id: "java-en-function-relationservice-removerelationtype"
language: "java"
lang: "en"
category: "function"
name: "RelationService.removeRelationType"
signature: "public void removeRelationType(String relationTypeName) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationTypeNotFoundException"
title: "RelationService.removeRelationType"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.removeRelationType

```java
public void removeRelationType(String relationTypeName) throws RelationServiceNotRegisteredException, IllegalArgumentException, RelationTypeNotFoundException
```

Removes given relation type from Relation Service.
 

The relation objects of that type will be removed from the
 Relation Service.

**参数**

- **relationTypeName** — name of the relation type to be removed

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server
- **IllegalArgumentException** — if null parameter
- **RelationTypeNotFoundException** — If there is no relation type with that name
