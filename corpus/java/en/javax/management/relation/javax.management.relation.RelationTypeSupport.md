---
id: "java-en-function-javax-management-relation-relationtypesupport"
language: "java"
lang: "en"
category: "function"
name: "javax.management.relation.RelationTypeSupport"
title: "RelationTypeSupport"
directive: "type"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationTypeSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationTypeSupport

A RelationTypeSupport object implements the RelationType interface.
 

It represents a relation type, providing role information for each role
 expected to be supported in every relation of that type.

 

A relation type includes a relation type name and a list of
 role infos (represented by RoleInfo objects).

 

A relation type has to be declared in the Relation Service:
 

- either using the createRelationType() method, where a RelationTypeSupport
 object will be created and kept in the Relation Service
 

- either using the addRelationType() method where the user has to create
 an object implementing the RelationType interface, and this object will be
 used as representing a relation type in the Relation Service.

 

The **serialVersionUID** of this class is 4611072955724144607L.

> *Since 1.5*
