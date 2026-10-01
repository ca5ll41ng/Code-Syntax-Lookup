---
id: "java-en-function-javax-naming-nameclasspair"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NameClassPair"
title: "NameClassPair"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair

This class represents the object name and class name pair of a binding
 found in a context.

 A context consists of name-to-object bindings.
 The NameClassPair class represents the name and the
 class of the bound object. It consists
 of a name and a string representing the
 package-qualified class name.

 Use subclassing for naming systems that generate contents of
 a name/class pair dynamically.

 A NameClassPair instance is not synchronized against concurrent
 access by multiple threads. Threads that need to access a NameClassPair
 concurrently should synchronize amongst themselves and provide
 the necessary locking.

**参见**

- Context#list

> *Since 1.3*
