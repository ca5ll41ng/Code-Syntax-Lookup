---
id: "java-en-function-java-util-concurrent-copyonwritearrayset"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.CopyOnWriteArraySet"
title: "CopyOnWriteArraySet"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet

A `Set` that uses an internal `CopyOnWriteArrayList`
 for all of its operations.  Thus, it shares the same basic properties:
 
  
- It is best suited for applications in which set sizes generally
       stay small, read-only operations
       vastly outnumber mutative operations, and you need
       to prevent interference among threads during traversal.
  
- It is thread-safe.
  
- Mutative operations (`add`, `set`, `remove`, etc.)
      are expensive since they usually entail copying the entire underlying
      array.
  
- Iterators do not support the mutative `remove` operation.
  
- Traversal via iterators is fast and cannot encounter
      interference from other threads. Iterators rely on
      unchanging snapshots of the array at the time the iterators were
      constructed.
 

 

**Sample Usage.** The following code sketch uses a
 copy-on-write set to maintain a set of Handler objects that
 perform some action upon state updates.

 
```
 `class Handler { void handle() { ... ` }

 class X {
   private final CopyOnWriteArraySet handlers
     = new CopyOnWriteArraySet<>();
   public void addHandler(Handler h) { handlers.add(h); }

   private long internalState;
   private synchronized void changeState() { internalState = ...; }

   public void update() {
     changeState();
     for (Handler handler : handlers)
       handler.handle();
   }
 }}
```

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this set

**参见**

- CopyOnWriteArrayList

> *Since 1.5*
