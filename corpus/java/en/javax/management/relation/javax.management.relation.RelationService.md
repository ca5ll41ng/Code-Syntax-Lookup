---
id: "java-en-function-javax-management-relation-relationservice"
language: "java"
lang: "en"
category: "function"
name: "javax.management.relation.RelationService"
title: "RelationService"
directive: "type"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService

The Relation Service is in charge of creating and deleting relation types
 and relations, of handling the consistency and of providing query
 mechanisms.
 

It implements the NotificationBroadcaster by extending
 NotificationBroadcasterSupport to send notifications when a relation is
 removed from it.
 

It implements the NotificationListener interface to be able to receive
 notifications concerning unregistration of MBeans referenced in relation
 roles and of relation MBeans.
 

It implements the MBeanRegistration interface to be able to retrieve
 its ObjectName and MBean Server.

> *Since 1.5*
