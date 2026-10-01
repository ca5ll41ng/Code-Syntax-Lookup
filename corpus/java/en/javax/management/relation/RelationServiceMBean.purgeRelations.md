---
id: "java-en-function-relationservicembean-purgerelations"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.purgeRelations"
signature: "public void purgeRelations() throws RelationServiceNotRegisteredException"
title: "RelationServiceMBean.purgeRelations"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.purgeRelations

```java
public void purgeRelations() throws RelationServiceNotRegisteredException
```

Purges the relations.

 

Depending on the purgeFlag value, this method is either called
 automatically when a notification is received for the unregistration of
 an MBean referenced in a relation (if the flag is set to true), or not
 (if the flag is set to false).
 

In that case it is up to the user to call it to maintain the
 consistency of the relations. To be kept in mind that if an MBean is
 unregistered and the purge not done immediately, if the ObjectName is
 reused and assigned to another MBean referenced in a relation, calling
 manually this purgeRelations() method will cause trouble, as will
 consider the ObjectName as corresponding to the unregistered MBean, not
 seeing the new one.

 

The behavior depends on the cardinality of the role where the
 unregistered MBean is referenced:
 

- if removing one MBean reference in the role makes its number of
 references less than the minimum degree, the relation has to be removed.
 

- if the remaining number of references after removing the MBean
 reference is still in the cardinality range, keep the relation and
 update it calling its handleMBeanUnregistration() callback.

**异常**

- **RelationServiceNotRegisteredException** — if the Relation Service is not registered in the MBean Server.
