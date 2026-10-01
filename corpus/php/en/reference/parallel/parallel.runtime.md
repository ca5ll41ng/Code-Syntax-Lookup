---
id: "en-php-guide-class-parallel-runtime"
language: "php"
lang: "en"
category: "guide"
name: "class.parallel-runtime"
title: "The parallel\\Runtime class"
module: "parallel"
source_url: "https://www.php.net/manual/en/class.parallel-runtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The parallel\Runtime class

parallel\Runtime

  Runtime Objects  Each runtime represents a single PHP thread, the thread is created (and bootstrapped) upon construction. The thread then waits for tasks to be scheduled: Scheduled tasks will be executed FIFO and then the thread will resume waiting until more tasks are scheduled, or it's closed, killed, or destroyed by the normal scoping rules of PHP objects.   
> When a runtime is destroyed by the normal scoping rules of PHP objects, it will first execute all of the tasks that were scheduled, and block while doing so.

   Runtime Bootstrapping  When a new runtime is created, it does not share code with the thread (or process) that created it. This means it doesn't have the same classes and functions loaded, nor the same autoloader set. In some cases, a very lightweight runtime is desirable because the tasks that will be scheduled do not need access to the code in the parent thread. In those cases where the tasks do need to access the same code, it is enough to set an autoloader as the bootstrap.   
> preloading may be used in conjunction with parallel, in this case preloaded code is available without bootstrapping

   Class Synopsis   `parallel\Runtime`    `final` `parallel\Runtime`    Create  Execute  Join
