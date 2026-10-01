---
id: "java-en-function-javax-naming-notcontextexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NotContextException"
title: "NotContextException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NotContextException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotContextException

This exception is thrown when a naming operation proceeds to a point
 where a context is required to continue the operation, but the
 resolved object is not a context. For example, Context.destroy() requires
 that the named object be a context. If it is not, NotContextException
 is thrown. Another example is a non-context being encountered during
 the resolution phase of the Context methods.

 It is also thrown when a particular subtype of context is required,
 such as a DirContext, and the resolved object is a context but not of
 the required subtype.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

**参见**

- Context#destroySubcontext

> *Since 1.3*
