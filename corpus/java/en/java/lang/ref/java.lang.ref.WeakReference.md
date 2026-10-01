---
id: "java-en-function-java-lang-ref-weakreference"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ref.WeakReference"
title: "WeakReference"
directive: "type"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/WeakReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakReference

Weak reference objects, which do not prevent their referents from being
 made finalizable, finalized, and then reclaimed.  Weak references are most
 often used to implement canonicalizing mappings.

 
      
          The referent must have `hasIdentity(Object) object identity`.
          When preview features are enabled, attempts to create a reference
          to a `isValue value object` result in an `IdentityException`.
      
 

 

 Suppose that the garbage collector determines at a certain point in time
 that an object is weakly
 reachable.  At that time it will atomically clear all weak references to
 that object and all weak references to any other weakly-reachable objects
 from which that object is reachable through a chain of strong and soft
 references.  At the same time it will declare all of the formerly
 weakly-reachable objects to be finalizable.  At the same time or at some
 later time it will enqueue those newly-cleared weak references that are
 registered with reference queues.

**参数**

- **the** — type of the referent

> *Since 1.2*
