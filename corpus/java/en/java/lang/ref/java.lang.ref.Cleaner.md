---
id: "java-en-function-java-lang-ref-cleaner"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ref.Cleaner"
title: "Cleaner"
directive: "type"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Cleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cleaner

`Cleaner` manages a set of object references and corresponding cleaning actions.
 

 Cleaning actions are `register(Object object, Runnable action) registered`
 to run after the cleaner is notified that the object has become
 phantom reachable.
 The cleaner uses `PhantomReference` and `ReferenceQueue` to be
 notified when the `#reachability reachability`
 changes.
 

 Each cleaner operates independently, managing the pending cleaning actions
 and handling threading and termination when the cleaner is no longer in use.
 Registering an object reference and corresponding cleaning action returns
 a `Cleanable Cleanable`. The most efficient use is to explicitly invoke
 the `clean clean` method when the object is closed or
 no longer needed.
 The cleaning action is a `Runnable` to be invoked at most once when
 the object has become phantom reachable unless it has already been explicitly cleaned.
 Note that the cleaning action must not refer to the object being registered.
 If so, the object will not become phantom reachable and the cleaning action
 will not be invoked automatically.
 

 The execution of the cleaning action is performed
 by a thread associated with the cleaner.
 All exceptions thrown by the cleaning action are ignored.
 The cleaner and other cleaning actions are not affected by
 exceptions in a cleaning action.
 The thread runs until all registered cleaning actions have
 completed and the cleaner itself is reclaimed by the garbage collector.
 

 The behavior of cleaners during `exit(int) System.exit`
 is implementation specific. No guarantees are made relating
 to whether cleaning actions are invoked or not.
 

 Unless otherwise noted, passing a `null` argument to a constructor or
 method in this class will cause a
 `java.lang.NullPointerException NullPointerException` to be thrown.

 The cleaning action is invoked only after the associated object becomes
 phantom reachable, so it is important that the object implementing the
 cleaning action does not hold references to the object.
 In this example, a static class encapsulates the cleaning state and action.
 An "inner" class, anonymous or not,  must not be used because it implicitly
 contains a reference to the outer instance, preventing it from becoming
 phantom reachable.
 The choice of a new cleaner or sharing an existing cleaner is determined
 by the use case.
 

 If the CleaningExample is used in a try-finally block then the
 `close` method calls the cleaning action.
 If the `close` method is not called, the cleaning action is called
 by the Cleaner when the CleaningExample instance has become phantom reachable.
 
```
`public class CleaningExample implements AutoCloseable {
        // A cleaner (preferably one shared within a library,
        // but for the sake of example, a new one is created here)
        private static final Cleaner cleaner = Cleaner.create();

        // State class captures information necessary for cleanup.
        // It must hold no reference to the instance being cleaned
        // and therefore it is a static inner class in this example.
        static class State implements Runnable {

            State(...) {
                // initialize State needed for cleaning action
            `

            public void run() {
                // cleanup action accessing State, executed at most once
            }
        }

        private final State state;
        private final Cleaner.Cleanable cleanable;

        public CleaningExample() {
            this.state = new State(...);
            this.cleanable = cleaner.register(this, state);
        }

        public void close() {
            cleanable.clean();
        }
    }
 }
```

 The cleaning action could be a lambda but all too easily will capture
 the object reference, by referring to fields of the object being cleaned,
 preventing the object from becoming phantom reachable.
 Using a static nested class, as above, will avoid accidentally retaining the
 object reference.
 

 
 Cleaning actions should be prepared to be invoked concurrently with
 other cleaning actions.
 Typically the cleaning actions should be very quick to execute
 and not block. If the cleaning action blocks, it may delay processing
 other cleaning actions registered to the same cleaner.
 All cleaning actions registered to a cleaner should be mutually compatible.

> *Since 9*
