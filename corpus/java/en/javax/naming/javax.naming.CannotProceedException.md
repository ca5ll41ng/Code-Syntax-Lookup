---
id: "java-en-function-javax-naming-cannotproceedexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.CannotProceedException"
title: "CannotProceedException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException

This exception is thrown to indicate that the operation reached
 a point in the name where the operation cannot proceed any further.
 When performing an operation on a composite name, a naming service
 provider may reach a part of the name that does not belong to its
 namespace.  At that point, it can construct a
 CannotProceedException and then invoke methods provided by
 javax.naming.spi.NamingManager (such as getContinuationContext())
 to locate another provider to continue the operation.  If this is
 not possible, this exception is raised to the caller of the
 context operation.

 If the program wants to handle this exception in particular, it
 should catch CannotProceedException explicitly before attempting to
 catch NamingException.

 A CannotProceedException instance is not synchronized against concurrent
 multithreaded access. Multiple threads trying to access and modify
 CannotProceedException should lock the object.

> *Since 1.3*
