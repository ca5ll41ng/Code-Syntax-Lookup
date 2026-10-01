---
id: "java-en-function-javax-naming-binding"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.Binding"
title: "Binding"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Binding.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Binding

This class represents a name-to-object binding found in a context.

 A context consists of name-to-object bindings.
 The Binding class represents such a binding.  It consists
 of a name and an object. The Context.listBindings()
 method returns an enumeration of Binding.

 Use subclassing for naming systems that generate contents of
 a binding dynamically.

 A Binding instance is not synchronized against concurrent access by multiple
 threads. Threads that need to access a Binding concurrently should
 synchronize amongst themselves and provide the necessary locking.

> *Since 1.3*
