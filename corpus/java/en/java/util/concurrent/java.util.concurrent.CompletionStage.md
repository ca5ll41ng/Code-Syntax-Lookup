---
id: "java-en-function-java-util-concurrent-completionstage"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.CompletionStage"
title: "CompletionStage"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage

A stage of a possibly asynchronous computation, that performs an
 action or computes a value when another CompletionStage completes.
 A stage completes upon termination of its computation, which may
 in turn trigger other dependent stages.  The functionality defined
 in this interface takes only a few basic forms, which expand out to
 a larger set of methods to capture a range of usage styles:

 

 
- The computation performed by a stage may be expressed as a
 Function, Consumer, or Runnable (using methods with names including
 apply, accept, or run, respectively)
 depending on whether it requires arguments and/or produces results.
 For example:
 
```
 `stage.thenApply(x -> square(x))
      .thenAccept(x -> System.out.print(x))
      .thenRun(() -> System.out.println());`
```

 An additional form (compose) allows the construction of
 computation pipelines from functions returning completion stages.

 

Any argument to a stage's computation is the outcome of a
 triggering stage's computation.

 
- One stage's execution may be triggered by completion of a
 single stage, or both of two stages, or either of two stages.
 Dependencies on a single stage are arranged using methods with
 prefix then. Those triggered by completion of
 both of two stages may combine their results or
 effects, using correspondingly named methods. Those triggered by
 either of two stages make no guarantees about which of the
 results or effects are used for the dependent stage's computation.

 
- Dependencies among stages control the triggering of
 computations, but do not otherwise guarantee any particular
 ordering. Additionally, execution of a new stage's computations may
 be arranged in any of three ways: default execution, default
 asynchronous execution (using methods with suffix async
 that employ the stage's default asynchronous execution facility),
 or custom (via a supplied `Executor`).  The execution
 properties of default and async modes are specified by
 CompletionStage implementations, not this interface. Methods with
 explicit Executor arguments may have arbitrary execution
 properties, and might not even support concurrent execution, but
 are arranged for processing in a way that accommodates asynchrony.

 
- Two method forms (`handle handle` and `whenComplete whenComplete`) support unconditional computation
 whether the triggering stage completed normally or exceptionally.
 Method `exceptionally exceptionally` supports computation
 only when the triggering stage completes exceptionally, computing a
 replacement result, similarly to the java `catch` keyword.
 In all other cases, if a stage's computation terminates abruptly
 with an (unchecked) exception or error, then all dependent stages
 requiring its completion complete exceptionally as well, with a
 `CompletionException` holding the exception as its
 cause. This convention distinguishes exceptions in an action itself
 from those it depends on. If they are to be handled in the same
 way, instead catch `RuntimeException` (possibly inspecting
 the exception's `getCause()`).  If a stage is dependent on
 both of two stages, and both complete exceptionally, then
 the CompletionException may correspond to either one of these
 exceptions.  If a stage is dependent on either of two
 others, and only one of them completes exceptionally, no guarantees
 are made about whether the dependent stage completes normally or
 exceptionally. In the case of method `whenComplete`, when the
 supplied action itself encounters an exception, then the stage
 completes exceptionally with that exception unless the source stage
 also completed exceptionally, in which case the exceptional
 completion from the source stage is given preference and propagated
 to the dependent stage. Applications are encouraged to maintain
 these conventions, avoiding unnecessary nesting when rethrowing, as
 in `throw (ex instanceof CompletionException) ? ex : new
 CompletionException(ex)`.

 

 

All methods adhere to the above triggering, execution, and
 exceptional completion specifications (which are not repeated in
 individual method specifications). Additionally, while arguments
 used to pass a completion result (that is, for parameters of type
 `T`) for methods accepting them may be null, passing a null
 value for any other parameter will result in a `NullPointerException` being thrown.

 

Method form `handle handle` is the most general way of
 creating a continuation stage, unconditionally performing a
 computation that is given both the result and exception (if any) of
 the triggering CompletionStage, and computing an arbitrary result.
 Method `whenComplete whenComplete` is similar, but preserves
 the result of the triggering stage instead of computing a new one.
 Because a stage's normal result may be `null`, both methods
 should have a computation structured thus:

 
```
`(result, exception) -> {
   if (exception == null) {
     // triggering stage completed normally
   ` else {
     // triggering stage completed exceptionally
   }
 }}
```

 

The `CompletionStage` interface does not define methods for initially creating,
 forcibly completing normally or exceptionally, probing completion
 status or results, or awaiting completion of a stage.
 Implementations of CompletionStage may provide means of achieving
 such effects, as appropriate.  Method `toCompletableFuture`
 enables interoperability among different implementations of this
 interface by providing a common conversion type.

 

Memory consistency effects: Actions in a thread prior to the
 submission of a computation producing a `CompletionStage` happen-before
 that computation begins. And actions taken by `CompletionStage x` happen-before actions of any dependent
 stage subsequent to `x`'s completion.

**参数**

- **the** — type of values the stage produces or consumes

> *Since 1.8*
