---
id: "java-en-function-java-util-stream-gatherer"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.Gatherer"
title: "Gatherer"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer

An intermediate operation that transforms a stream of input elements into a
 stream of output elements, optionally applying a final action when the end of
 the upstream is reached. The transformation may be stateless or stateful,
 and may buffer input before producing any output.

 

Gatherer operations can be performed either sequentially,
 or be parallelized -- if a combiner function is supplied.

 

There are many examples of gathering operations, including but not
 limited to:
 grouping elements into batches (windowing functions);
 de-duplicating consecutively similar elements; incremental accumulation
 functions (prefix scan); incremental reordering functions, etc.  The class
 `java.util.stream.Gatherers` provides implementations of common
 gathering operations.

 

A `Gatherer` is specified by four functions that work together to
 process input elements, optionally using intermediate state, and optionally
 perform a final action at the end of input.  They are: 
     
- creating a new, potentially mutable, state (`initializer`)
     
- integrating a new input element (`integrator`)
     
- combining two states into one (`combiner`)
     
- performing an optional final action (`finisher`)
 

 

Each invocation of `initializer`, `integrator`,
 `combiner`, and `finisher` must return a semantically
 identical result.

 

Implementations of Gatherer must not capture, retain, or expose to
 other threads, the references to the state instance, or the downstream
 `Downstream` for longer than the invocation duration of the method
 which they are passed to.

 

Performing a gathering operation with a `Gatherer` should produce a
 result equivalent to:

 {@snippet lang = java:
 Gatherer.Downstream<? super R> downstream = ...;
 A state = gatherer.initializer().get();
 for (T t : data) {
     gatherer.integrator().integrate(state, t, downstream);
 }
 gatherer.finisher().accept(state, downstream);
 }

 

However, the library is free to partition the input, perform the
 integrations on the partitions, and then use the combiner function to
 combine the partial results to achieve a gathering operation.  (Depending
 on the specific gathering operation, this may perform better or worse,
 depending on the relative cost of the integrator and combiner functions.)

 

In addition to the predefined implementations in `Gatherers`, the
 static factory methods `of(...)` and `ofSequential(...)`
 can be used to construct gatherers.  For example, you could create a gatherer
 that implements the equivalent of
 `map` with:

 {@snippet lang = java:
 public static  Gatherer map(Function<? super T, ? extends R> mapper) {
     return Gatherer.of(
         (unused, element, downstream) -> // integrator
             downstream.push(mapper.apply(element))
     );
 }
 }

 

Gatherers are designed to be composed; two or more Gatherers can
 be composed into a single Gatherer using the `andThen`
 method.

 {@snippet lang = java:
 // using the implementation of `map` as seen above
 Gatherer increment = map(i -> i + 1);

 Gatherer toString = map(i -> i.toString());

 Gatherer incrementThenToString = increment.andThen(toString);
 }

 

As an example, a Gatherer implementing a sequential Prefix Scan could
 be done the following way:

 {@snippet lang = java:
 public static  Gatherer scan(
     Supplier initial,
     BiFunction<? super R, ? super T, ? extends R> scanner) {

     class State {
         R current = initial.get();
     }

     return Gatherer.ofSequential(
          State::new,
          Gatherer.Integrator.ofGreedy((state, element, downstream) -> {
              state.current = scanner.apply(state.current, element);
              return downstream.push(state.current);
          })
     );
 }
 }

 

Example of usage:

 {@snippet lang = java:
 // will contain: ["1", "12", "123", "1234", "12345", "123456", "1234567", "12345678", "123456789"]
 List numberStrings =
     Stream.of(1,2,3,4,5,6,7,8,9)
           .gather(
               scan(() -> "", (string, number) -> string + number)
            )
           .toList();
 }

 such as `gather`, must adhere to the following
 constraints:
 
     
- Gatherers whose initializer is `defaultInitializer` are
     considered to be stateless, and invoking their initializer is optional.
     
     
- Gatherers whose integrator is an instance of `Integrator.Greedy`
     can be assumed not to short-circuit, and the return value of invoking
     `integrate` does not need to
     be inspected.
     
- The first argument passed to the integration function, both
     arguments passed to the combiner function, and the argument passed to the
     finisher function must be the result of a previous invocation of the
     initializer or combiner functions.
     
- The implementation should not do anything with the result of any of
     the initializer or combiner functions other than to
     pass them again to the integrator, combiner, or finisher functions.
     
- Once a state object is passed to the combiner or finisher function,
     it is never passed to the integrator function again.
     
- When the integrator function returns `false`,
     it shall be interpreted just as if there were no more elements to pass
     it.
     
- For parallel evaluation, the gathering implementation must manage
     that the input is properly partitioned, that partitions are processed
     in isolation, and combining happens only after integration is complete
     for both partitions.
     
- Gatherers whose combiner is `defaultCombiner` may only be
     evaluated sequentially. All other combiners allow the operation to be
     parallelized by initializing each partition in separation, invoking
     the integrator until it returns `false`, and then joining each
     partitions state using the combiner, and then invoking the finisher on
     the joined state. Outputs and state later in the input sequence will
     be discarded if processing an earlier partition short-circuits.
     
- Gatherers whose finisher is `defaultFinisher` are considered
     to not have an end-of-stream hook and invoking their finisher is
     optional.

**参数**

- **the** — type of input elements to the gatherer operation
- **the** — potentially mutable state type of the gatherer operation (often hidden as an implementation detail)
- **the** — type of output elements from the gatherer operation

**参见**

- Stream#gather(Gatherer)
- Gatherers

> *Since 24*
