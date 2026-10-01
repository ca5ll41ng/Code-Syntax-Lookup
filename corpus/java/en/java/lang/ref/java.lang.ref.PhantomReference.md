---
id: "java-en-function-java-lang-ref-phantomreference"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ref.PhantomReference"
title: "PhantomReference"
directive: "type"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/PhantomReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PhantomReference

Phantom reference objects, which are enqueued after the collector
 determines that their referents may otherwise be reclaimed.  Phantom
 references are most often used to schedule post-mortem cleanup actions.

 
      
          The referent must have `hasIdentity(Object) object identity`.
          When preview features are enabled, attempts to create a reference
          to a `isValue value object` result in an `IdentityException`.
      
 

 

 Suppose the garbage collector determines at a certain point in time
 that an object is 
 phantom reachable.  At that time it will atomically clear
 all phantom references to that object and all phantom references to
 any other phantom-reachable objects from which that object is reachable.
 At the same time or at some later time it will enqueue those newly-cleared
 phantom references that are registered with reference queues.

 

 In order to ensure that a reclaimable object remains so, the referent of
 a phantom reference may not be retrieved: The `get` method of a
 phantom reference always returns `null`.
 The `refersTo(Object) refersTo` method can be used to test
 whether some object is the referent of a phantom reference.

**参数**

- **the** — type of the referent

> *Since 1.2*
