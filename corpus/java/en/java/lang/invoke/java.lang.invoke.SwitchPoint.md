---
id: "java-en-function-java-lang-invoke-switchpoint"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.SwitchPoint"
title: "SwitchPoint"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SwitchPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchPoint

A `SwitchPoint` is an object which can publish state transitions to other threads.
 A switch point is initially in the valid state, but may at any time be
 changed to the invalid state.  Invalidation cannot be reversed.
 A switch point can combine a guarded pair of method handles into a
 guarded delegator.
 The guarded delegator is a method handle which delegates to one of the old method handles.
 The state of the switch point determines which of the two gets the delegation.
 

 A single switch point may be used to control any number of method handles.
 (Indirectly, therefore, it can control any number of call sites.)
 This is done by using the single switch point as a factory for combining
 any number of guarded method handle pairs into guarded delegators.
 

 When a guarded delegator is created from a guarded pair, the pair
 is wrapped in a new method handle `M`,
 which is permanently associated with the switch point that created it.
 Each pair consists of a target `T` and a fallback `F`.
 While the switch point is valid, invocations to `M` are delegated to `T`.
 After it is invalidated, invocations are delegated to `F`.
 

 Invalidation is global and immediate, as if the switch point contained a
 volatile boolean variable consulted on every call to `M`.
 The invalidation is also permanent, which means the switch point
 can change state only once.
 The switch point will always delegate to `F` after being invalidated.
 At that point `guardWithTest` may ignore `T` and return `F`.
 

 Here is an example of a switch point in action:
 
```
`MethodHandle MH_strcat = MethodHandles.lookup()
     .findVirtual(String.class, "concat", MethodType.methodType(String.class, String.class));
 SwitchPoint spt = new SwitchPoint();
 assert(!spt.hasBeenInvalidated());
 // the following steps may be repeated to re-use the same switch point:
 MethodHandle worker1 = MH_strcat;
 MethodHandle worker2 = MethodHandles.permuteArguments(MH_strcat, MH_strcat.type(), 1, 0);
 MethodHandle worker = spt.guardWithTest(worker1, worker2);
 assertEquals("method", (String) worker.invokeExact("met", "hod"));
 SwitchPoint.invalidateAll(new SwitchPoint[]{ spt `);
 assert(spt.hasBeenInvalidated());
 assertEquals("hodmet", (String) worker.invokeExact("met", "hod"));
 }
```

 
 Discussion:
 Switch points are useful without subclassing.  They may also be subclassed.
 This may be useful in order to associate application-specific invalidation logic
 with the switch point.
 Notice that there is no permanent association between a switch point and
 the method handles it produces and consumes.
 The garbage collector may collect method handles produced or consumed
 by a switch point independently of the lifetime of the switch point itself.
 
 Implementation Note:
 A switch point behaves as if implemented on top of `MutableCallSite`,
 approximately as follows:
 
```
`public class SwitchPoint {
     private static final MethodHandle
         K_true  = MethodHandles.constant(boolean.class, true),
         K_false = MethodHandles.constant(boolean.class, false);
     private final MutableCallSite mcs;
     private final MethodHandle mcsInvoker;
     public SwitchPoint() {
         this.mcs = new MutableCallSite(K_true);
         this.mcsInvoker = mcs.dynamicInvoker();
     `
     public MethodHandle guardWithTest(
             MethodHandle target, MethodHandle fallback) {
         // Note:  mcsInvoker is of type ()boolean.
         // Target and fallback may take any arguments, but must have the same type.
         return MethodHandles.guardWithTest(this.mcsInvoker, target, fallback);
     }
     public static void invalidateAll(SwitchPoint[] spts) {
         List mcss = new ArrayList<>();
         for (SwitchPoint spt : spts)  mcss.add(spt.mcs);
         for (MutableCallSite mcs : mcss)  mcs.setTarget(K_false);
         MutableCallSite.syncAll(mcss.toArray(new MutableCallSite[0]));
     }
 }
 }
```

> *Since 1.7*
