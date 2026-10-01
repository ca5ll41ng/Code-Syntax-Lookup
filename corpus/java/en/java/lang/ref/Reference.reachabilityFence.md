---
id: "java-en-function-reference-reachabilityfence"
language: "java"
lang: "en"
category: "function"
name: "Reference.reachabilityFence"
signature: "public static void reachabilityFence(Object ref)"
title: "Reference.reachabilityFence"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.reachabilityFence

```java
public static void reachabilityFence(Object ref)
```

Ensures that the given object remains
 strongly reachable.
 This reachability is assured regardless of any optimizing transformations
 the virtual machine may perform that might otherwise allow the object to
 become unreachable (see JLS {@jls 12.6.1}). Thus, the given object is not
 reclaimable by garbage collection at least until after the invocation of
 this method. References to the given object will not be cleared (or
 enqueued, if applicable) by the garbage collector until after invocation
 of this method.
 Invocation of this method does not itself initiate reference processing,
 garbage collection, or finalization.

 

 This method establishes an ordering for strong reachability
 with respect to garbage collection.  It controls relations that are
 otherwise only implicit in a program -- the reachability conditions
 triggering garbage collection.  This method is applicable only
 when reclamation may have visible effects,
 such as for objects that use finalizers or `Cleaner`, or code that
 performs `java.lang.ref reference processing`.

 

`#MemoryConsistency Memory consistency effects`:
 Actions in a thread prior to calling `reachabilityFence(x)`
 happen-before
 the garbage collector clears any reference to `x`.

 Reference processing or finalization can occur after an object becomes
 unreachable. An object can become unreachable when the virtual machine
 detects that there is no further need for the object (other than for
 running a finalizer). In the course of optimization, the virtual machine
 can reorder operations of an object's methods such that the object
 becomes unneeded earlier than might naively be expected &mdash;
 including while a method of the object is still running. For instance,
 the VM can move the loading of values from the object's fields
 to occur earlier. The object itself is then no longer needed and becomes
 unreachable, and the method can continue running using the obtained values.
 This may have surprising and undesirable effects when using a Cleaner or
 finalizer for cleanup: there is a race between the
 program thread running the method, and the cleanup thread running the
 Cleaner or finalizer. The cleanup thread could free a
 resource, followed by the program thread (still running the method)
 attempting to access the now-already-freed resource.
 Use of `reachabilityFence` can prevent this race by ensuring that the
 object remains strongly reachable.
 

 The following is an example in which the bookkeeping associated with a class is
 managed through array indices.  Here, method `action` uses a
 `reachabilityFence` to ensure that the `Resource` object is
 not reclaimed before bookkeeping on an associated
 `ExternalResource` has been performed; specifically, to
 ensure that the array slot holding the `ExternalResource` is not
 nulled out in method `finalize`, which may otherwise run
 concurrently.

 {@snippet :
 class Resource {
   private static ExternalResource[] externalResourceArray = ...

   int myIndex;
   Resource(...) {
     this.myIndex = ...
     externalResourceArray[myIndex] = ...;
     ...
   }
   protected void finalize() {
     externalResourceArray[this.myIndex] = null;
     ...
   }
   public void action() {
     try {
       // ...
       int i = this.myIndex; // last use of 'this' Resource in action()
       Resource.update(externalResourceArray[i]);
     } finally {
       Reference.reachabilityFence(this);
     }
   }
   private static void update(ExternalResource ext) {
     ext.status = ...;
   }
 }
 }

 The invocation of `reachabilityFence` is
 placed after the call to `update`, to ensure that the
 array slot is not nulled out by `finalize` before the
 update, even if the call to `action` was the last use of this
 object.  This might be the case if, for example, a usage in a user program
 had the form `new Resource().action();` which retains no other
 reference to this `Resource`.
 The `reachabilityFence` call is placed in a `finally` block to
 ensure that it is invoked across all paths in the method. A more complex
 method might need further precautions to ensure that
 `reachabilityFence` is encountered along all code paths.

 

 Method `reachabilityFence` is not required in constructions
 that themselves ensure reachability.  For example, because objects that
 are locked cannot, in general, be reclaimed, it would suffice if all
 accesses of the object, in all methods of class `Resource`
 (including `finalize`) were enclosed in `synchronized (this)`
 blocks.  (Further, such blocks must not include infinite loops, or
 themselves be unreachable, which fall into the corner case exceptions to
 the "in general" disclaimer.)  However, method `reachabilityFence`
 remains a better option in cases where synchronization is not as efficient,
 desirable, or possible; for example because it would encounter deadlock.

**参数**

- **ref** — the reference to the object to keep strongly reachable. If `null`, this method has no effect.

> *Since 9*
