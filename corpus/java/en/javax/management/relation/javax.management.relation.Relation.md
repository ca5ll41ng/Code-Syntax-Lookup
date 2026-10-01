---
id: "java-en-function-javax-management-relation-relation"
language: "java"
lang: "en"
category: "function"
name: "javax.management.relation.Relation"
title: "Relation"
directive: "type"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Relation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Relation

This interface has to be implemented by any MBean class expected to
 represent a relation managed using the Relation Service.
 

Simple relations, i.e. having only roles, no properties or methods, can
 be created directly by the Relation Service (represented as RelationSupport
 objects, internally handled by the Relation Service).
 

If the user wants to represent more complex relations, involving
 properties and/or methods, he has to provide his own class implementing the
 Relation interface. This can be achieved either by inheriting from
 RelationSupport class, or by implementing the interface (fully or delegation to
 a RelationSupport object member).
 

Specifying such user relation class is to introduce properties and/or
 methods. Those have to be exposed for remote management. So this means that
 any user relation class must be a MBean class.

> *Since 1.5*
