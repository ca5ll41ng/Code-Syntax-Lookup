---
id: "java-en-function-java-util-concurrent-atomic-atomicreferencefieldupdater"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.atomic.AtomicReferenceFieldUpdater"
title: "AtomicReferenceFieldUpdater"
directive: "type"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceFieldUpdater

A reflection-based utility that enables atomic updates to
 designated non-static `volatile` reference fields of
 designated classes, providing a subset of the functionality of
 class `VarHandle` that should be used instead.  This class
 may be used in atomic data structures in which several reference
 fields of the same node are independently subject to atomic
 updates. For example, a tree node might be declared as

 
```
 `class Node {
   private volatile Node left, right;

   private static final AtomicReferenceFieldUpdater leftUpdater =
     AtomicReferenceFieldUpdater.newUpdater(Node.class, Node.class, "left");
   private static final AtomicReferenceFieldUpdater rightUpdater =
     AtomicReferenceFieldUpdater.newUpdater(Node.class, Node.class, "right");

   Node getLeft() { return left; `
   boolean compareAndSetLeft(Node expect, Node update) {
     return leftUpdater.compareAndSet(this, expect, update);
   }
   // ... and so on
 }}
```

 However, it is preferable to use `VarHandle`:
 
```
 `import java.lang.invoke.VarHandle;
 import java.lang.invoke.MethodHandles;
 class Node {
  private volatile Node left, right;
  private static final VarHandle LEFT, RIGHT;
  Node getLeft() { return left; `
  boolean compareAndSetLeft(Node expect, Node update) {
    return LEFT.compareAndSet(this, expect, update);
  }
  // ... and so on
  static { try {
    MethodHandles.Lookup l = MethodHandles.lookup();
    LEFT  = l.findVarHandle(Node.class, "left", Node.class);
    RIGHT = l.findVarHandle(Node.class, "right", Node.class);
   } catch (ReflectiveOperationException e) {
     throw new ExceptionInInitializerError(e);
 }}}}
```

 

Note that the guarantees of the `compareAndSet`
 method in this class are weaker than in other atomic classes.
 Because this class cannot ensure that all uses of the field
 are appropriate for purposes of atomic access, it can
 guarantee atomicity only with respect to other invocations of
 `compareAndSet` and `set` on the same updater.

 

Object arguments for parameters of type `T` that are not
 instances of the class passed to `newUpdater` will result in
 a `ClassCastException` being thrown.

**参数**

- **The** — type of the object holding the updatable field
- **The** — type of the field

> *Since 1.5*
