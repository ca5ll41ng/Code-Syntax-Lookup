---
id: "java-en-function-java-lang-lazyconstant"
language: "java"
lang: "en"
category: "function"
name: "java.lang.LazyConstant"
title: "LazyConstant"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LazyConstant.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LazyConstant

A lazy constant is a holder of content that can be initialized at most once.
 

 A lazy constant is created using the factory method
 `of`.
 

 When created, the lazy constant is not initialized, meaning it has no content.
 

 The lazy constant (of type `T`) can then be initialized
 (and its content retrieved) by calling `get`. The first time
 `get` is called, the underlying computing function
 (provided at construction) will be invoked and the result will be used to initialize
 the constant.
 

 Once a lazy constant is initialized, its content can never change
 and will always be returned by subsequent `get` invocations.
 

 Consider the following example where a lazy constant field "`logger`" holds
 an object of type `Logger`:

 {@snippet lang = java:
 public class Component {

    // Creates a new uninitialized lazy constant
    private final LazyConstant logger =
            // @link substring="of" target="#of" :
            LazyConstant.of( () -> Logger.create(Component.class) );

    public void process() {
        logger.get().info("Process started");
        // ...
    }
 }
 }
 

 Initially, the lazy constant is not initialized. When `logger.get()`
 is first invoked, it evaluates the computing function and initializes the constant to
 the result; the result is then returned to the client. Hence, `get`
 guarantees that the constant is initialized before it returns, barring
 any exceptions.
 

 Furthermore, `get` guarantees that, out of several threads trying to
 invoke the computing function simultaneously, `#thread-safety only one is
 ever selected` for computation. This property is crucial as evaluation of the computing
 function may have side effects, for example, the call above to `Logger.create()`
 may result in storage resources being prepared.

 Exception handling
 If evaluation of the computing function throws an unchecked exception (i.e., a runtime
 exception or an error), the lazy constant is not initialized but instead transitions to
 an error state whereafter a `NoSuchElementException` is thrown with the
 unchecked exception as a cause. Subsequent `get` calls throw
 `NoSuchElementException` (without ever invoking the computing function
 again) with no cause and with a message that includes the name of the original
 unchecked exception's class.
 

 All failures are handled in this way. There are two special cases that cause unchecked
 exceptions to be thrown:
 

 If the computing function returns `null`, a `NoSuchElementException`
 (with a `NullPointerException` as a cause) will be thrown. Hence, a
 lazy constant can never hold a `null` value. Clients who want to use a nullable
 constant can wrap the value into an `Optional` holder.
 

 If the computing function recursively invokes itself via the lazy constant, a
 `NoSuchElementException` (with an `IllegalStateException` as a
 cause) will be thrown.

 Composing lazy constants
 A lazy constant can depend on other lazy constants, forming a dependency graph
 that can be lazily computed but where access to individual elements can still be
 performant. In the following example, a single `Foo` and a `Bar`
 instance (that is dependent on the `Foo` instance) are lazily created, both of
 which are held by lazy constants:

 {@snippet lang = java:
 public static class Foo {
      // ...
  }

 public static class Bar {
     public Bar(Foo foo) {
          // ...
     }
 }

 static final LazyConstant FOO = LazyConstant.of( Foo::new );
 static final LazyConstant BAR = LazyConstant.of( () -> new Bar(FOO.get()) );

 public static Foo foo() {
     return FOO.get();
 }

 public static Bar bar() {
     return BAR.get();
 }
 }
 Calling `BAR.get()` will create the `Bar` singleton if it is not already
 created. Upon such a creation, a dependent `Foo` will first be created if
 the `Foo` does not already exist.

 Thread Safety
 A lazy constant is guaranteed to be initialized atomically and at most once. If
 competing threads are racing to initialize a lazy constant, only one updating thread
 runs the computing function (which runs on the caller's thread and is hereafter denoted
 the computing thread), while the other threads are blocked until the constant
 is initialized (or computation fails), after which the other threads observe the lazy
 constant is initialized (or has transisioned to an error state) and leave the constant
 unchanged and will never invoke any computation.
 

 The invocation of the computing function and the resulting initialization of
 the constant `#MemoryVisibility happens-before`
 the initialized constant's content is read. Hence, the initialized constant's content,
 including any `final` fields of any newly created objects, is safely published.
 As subsequent retrieval of the content might be elided, there are no other memory
 ordering or visibility guarantees provided as a consequence of calling
 `get` again.
 

 Thread interruption does not cancel the initialization of a lazy constant. In other
 words, if the computing thread is interrupted, `LazyConstant::get` doesn't clear
 the interrupted thread’s status, nor does it throw an `InterruptedException`.
 

 If the computing function blocks indefinitely, other threads operating on this
 lazy constant may block indefinitely; no timeouts or cancellations are provided.

 Performance
 The content of a lazy constant can never change after the lazy constant has been
 initialized. Therefore, a JVM implementation may, for an initialized lazy constant,
 elide all future reads of that lazy constant's content and instead use the content
 that has been previously observed. We call this optimization constant folding.
 This is only possible if there is a direct reference from a `static final` field
 to a lazy constant or if there is a chain from a `static final` field -- via one
 or more trusted fields (i.e., `static final` fields,
 `Record record` fields, or final instance fields in hidden classes) --
 to a lazy constant.

          This can be a source of an unintended memory leak. More specifically,
          a lazy constant `#reachability strongly references`
          its content. Hence, the content of a lazy constant will be reachable as long
          as the lazy constant itself is reachable.
          

          While it's possible to store an array inside a lazy constant, doing so will
          not result in improved access performance of the array elements. Instead, a
          `ofLazy(int, IntFunction) lazy list` of arbitrary depth can
          be used, which provides constant components.
          

          The `LazyConstant` type is not `Serializable`.
          

          Use in static initializers may interact with class initialization order;
          cyclic initialization may result in initialization errors as described
          in section {@jls 12.4} of The Java Language Specification.

           A lazy constant is free to synchronize on itself. Hence, care must be
           taken when directly or indirectly synchronizing on a lazy constant.
           A lazy constant is unmodifiable but its content may or may not be
           immutable (e.g., it may hold an `ArrayList`).

**参数**

- **type** — of the constant

**参见**

- Optional
- Supplier
- List#ofLazy(int, IntFunction)
- Map#ofLazy(Set, Function)

> *Since 26*
