---
id: "java-en-function-javax-naming-linkexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.LinkException"
title: "LinkException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException

This exception is used to describe problems encountered while resolving links.
 Additional information is added to the base NamingException for pinpointing
 the problem with the link.

 Analogously to how NamingException captures name resolution information,
 LinkException captures "link"-name resolution information pinpointing
 the problem encountered while resolving a link. All these fields may
 be null.
 
 
-  Link Resolved Name. Portion of link name that has been resolved.
 
-  Link Resolved Object. Object to which resolution of link name proceeded.
 
-  Link Remaining Name. Portion of link name that has not been resolved.
 
-  Link Explanation. Detail explaining why link resolution failed.

 A LinkException instance is not synchronized against concurrent
 multithreaded access. Multiple threads trying to access and modify
 a single LinkException instance should lock the object.

**参见**

- Context#lookupLink
- LinkRef

> *Since 1.3*
