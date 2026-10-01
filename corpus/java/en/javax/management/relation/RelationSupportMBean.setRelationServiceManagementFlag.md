---
id: "java-en-function-relationsupportmbean-setrelationservicemanagementflag"
language: "java"
lang: "en"
category: "function"
name: "RelationSupportMBean.setRelationServiceManagementFlag"
signature: "public void setRelationServiceManagementFlag(Boolean flag) throws IllegalArgumentException"
title: "RelationSupportMBean.setRelationServiceManagementFlag"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupportMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupportMBean.setRelationServiceManagementFlag

```java
public void setRelationServiceManagementFlag(Boolean flag) throws IllegalArgumentException
```

Specifies whether this relation is handled by the Relation
 Service.
 

BEWARE, this method has to be exposed as the Relation Service will
 access the relation through its management interface. It is RECOMMENDED
 NOT to use this method. Using it does not affect the registration of the
 relation object in the Relation Service, but will provide wrong
 information about it!

**参数**

- **flag** — whether the relation is handled by the Relation Service.

**异常**

- **IllegalArgumentException** — if null parameter
