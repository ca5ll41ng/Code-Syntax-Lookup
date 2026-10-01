---
id: "java-en-function-relationnotification-relationnotification"
language: "java"
lang: "en"
category: "function"
name: "RelationNotification.RelationNotification"
signature: "public RelationNotification(String notifType, Object sourceObj, long sequence, long timeStamp, String message, String id, String typeName, ObjectName objectName, List<ObjectName> unregMBeanList) throws IllegalArgumentException"
title: "RelationNotification.RelationNotification"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationNotification.RelationNotification

```java
public RelationNotification(String notifType, Object sourceObj, long sequence, long timeStamp, String message, String id, String typeName, ObjectName objectName, List<ObjectName> unregMBeanList) throws IllegalArgumentException
```

Creates a notification for either a relation creation (RelationSupport
 object created internally in the Relation Service, or an MBean added as a
 relation) or for a relation removal from the Relation Service.

**参数**

- **notifType** — type of the notification; either:   - RELATION_BASIC_CREATION   - RELATION_MBEAN_CREATION   - RELATION_BASIC_REMOVAL   - RELATION_MBEAN_REMOVAL
- **sourceObj** — source object, sending the notification.  This is either an ObjectName or a RelationService object.  In the latter case it must be the MBean emitting the notification; the MBean Server will rewrite the source to be the ObjectName under which that MBean is registered.
- **sequence** — sequence number to identify the notification
- **timeStamp** — time stamp
- **message** — human-readable message describing the notification
- **id** — relation id identifying the relation in the Relation Service
- **typeName** — name of the relation type
- **objectName** — ObjectName of the relation object if it is an MBean (null for relations internally handled by the Relation Service)
- **unregMBeanList** — list of ObjectNames of referenced MBeans expected to be unregistered due to relation removal (only for removal, due to CIM qualifiers, can be null)

**异常**

- **IllegalArgumentException** — if:   - no value for the notification type   - the notification type is not RELATION_BASIC_CREATION, RELATION_MBEAN_CREATION, RELATION_BASIC_REMOVAL or RELATION_MBEAN_REMOVAL   - no source object   - the source object is not a Relation Service   - no relation id   - no relation type name
