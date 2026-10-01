---
id: "java-en-function-javax-management-relation-invalidrolevalueexception"
language: "java"
lang: "en"
category: "function"
name: "javax.management.relation.InvalidRoleValueException"
title: "InvalidRoleValueException"
directive: "type"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/InvalidRoleValueException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvalidRoleValueException

Role value is invalid.
 This exception is raised when, in a role, the number of referenced MBeans
 in given value is less than expected minimum degree, or the number of
 referenced MBeans in provided value exceeds expected maximum degree, or
 one referenced MBean in the value is not an Object of the MBean
 class expected for that role, or an MBean provided for that role does not
 exist.

> *Since 1.5*
