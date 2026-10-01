---
id: "java-en-function-java-util-concurrent-submissionpublisher"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.SubmissionPublisher"
title: "SubmissionPublisher"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher

A `Flow.Publisher` that asynchronously issues submitted
 (non-null) items to current subscribers until it is closed.  Each
 current subscriber receives newly submitted items in the same order
 unless drops or exceptions are encountered.  Using a
 SubmissionPublisher allows item generators to act as compliant  reactive-streams
 Publishers relying on drop handling and/or blocking for flow
 control.

 

A SubmissionPublisher uses the `Executor` supplied in its
 constructor for delivery to subscribers. The best choice of
 Executor depends on expected usage. If the generator(s) of
 submitted items run in separate threads, and the number of
 subscribers can be estimated, consider using a `newFixedThreadPool`. Otherwise consider using the
 default, normally the `commonPool`.

 

Buffering allows producers and consumers to transiently operate
 at different rates.  Each subscriber uses an independent buffer.
 Buffers are created upon first use and expanded as needed up to the
 given maximum. (The enforced capacity may be rounded up to the
 nearest power of two and/or bounded by the largest value supported
 by this implementation.)  Invocations of `request(long) request` do not directly result in
 buffer expansion, but risk saturation if unfilled requests exceed
 the maximum capacity.  The default value of `defaultBufferSize` may provide a useful starting point for
 choosing a capacity based on expected rates, resources, and usages.

 

A single SubmissionPublisher may be shared among multiple
 sources. Actions in a source thread prior to publishing an item or
 issuing a signal 
 happen-before actions subsequent to the corresponding
 access by each subscriber. But reported estimates of lag and demand
 are designed for use in monitoring, not for synchronization
 control, and may reflect stale or inaccurate views of progress.

 

Publication methods support different policies about what to do
 when buffers are saturated. Method `submit(Object) submit`
 blocks until resources are available. This is simplest, but least
 responsive.  The `offer` methods may drop items (either
 immediately or with bounded timeout), but provide an opportunity to
 interpose a handler and then retry.

 

If any Subscriber method throws an exception, its subscription
 is cancelled.  If a handler is supplied as a constructor argument,
 it is invoked before cancellation upon an exception in method
 `onNext onNext`, but exceptions in methods
 `onSubscribe onSubscribe`,
 `onError(Throwable) onError` and
 `onComplete() onComplete` are not recorded or
 handled before cancellation.  If the supplied Executor throws
 `RejectedExecutionException` (or any other RuntimeException
 or Error) when attempting to execute a task, or a drop handler
 throws an exception when processing a dropped item, then the
 exception is rethrown. In these cases, not all subscribers will
 have been issued the published item. It is usually good practice to
 `closeExceptionally closeExceptionally` in these cases.

 

Method `consume` simplifies support for a
 common case in which the only action of a subscriber is to request
 and process all items using a supplied function.

 

This class may also serve as a convenient base for subclasses
 that generate items, and use the methods in this class to publish
 them.  For example here is a class that periodically publishes the
 items generated from a supplier. (In practice you might add methods
 to independently start and stop generation, to share Executors
 among publishers, and so on, or use a SubmissionPublisher as a
 component rather than a superclass.)

 
```
 `class PeriodicPublisher extends SubmissionPublisher {
   final ScheduledFuture<?> periodicTask;
   final ScheduledExecutorService scheduler;
   PeriodicPublisher(Executor executor, int maxBufferCapacity,
                     Supplier<? extends T> supplier,
                     long period, TimeUnit unit) {
     super(executor, maxBufferCapacity);
     scheduler = new ScheduledThreadPoolExecutor(1);
     periodicTask = scheduler.scheduleAtFixedRate(
       () -> submit(supplier.get()), 0, period, unit);
   `
   public void close() {
     periodicTask.cancel(false);
     scheduler.shutdown();
     super.close();
   }
 }}
```

 

Here is an example of a `Flow.Processor` implementation.
 It uses single-step requests to its publisher for simplicity of
 illustration. A more adaptive version could monitor flow using the
 lag estimate returned from `submit`, along with other utility
 methods.

 
```
 `class TransformProcessor extends SubmissionPublisher
   implements Flow.Processor {
   final Function<? super S, ? extends T> function;
   Flow.Subscription subscription;
   TransformProcessor(Executor executor, int maxBufferCapacity,
                      Function<? super S, ? extends T> function) {
     super(executor, maxBufferCapacity);
     this.function = function;
   `
   public void onSubscribe(Flow.Subscription subscription) {
     (this.subscription = subscription).request(1);
   }
   public void onNext(S item) {
     submit(function.apply(item));
     subscription.request(1);
   }
   public void onError(Throwable ex) { closeExceptionally(ex); }
   public void onComplete() { close(); }
 }}
```

**参数**

- **the** — published item type

> *Since 9*
