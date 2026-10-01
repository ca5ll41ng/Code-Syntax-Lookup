---
id: "python-en-function-sched-scheduler-enterabs"
language: "python"
lang: "en"
category: "function"
name: "scheduler.enterabs"
signature: "scheduler.enterabs(time, priority, action, argument=(), kwargs={})"
directive: "method"
module: "sched"
source_url: "https://docs.python.org/3/library/sched.html#sched.scheduler.enterabs"
license: "PSF"
updated: "2026-10-01"
---

# scheduler.enterabs

Schedule a new event. The *time* argument should be a numeric type compatible
with the return value of the *timefunc* function passed  to the constructor.
Events scheduled for the same *time* will be executed in the order of their
*priority*. A lower number represents a higher priority.

Executing the event means executing `action(*argument, **kwargs)`.
*argument* is a sequence holding the positional arguments for *action*.
*kwargs* is a dictionary holding the keyword arguments for *action*.

Return value is an event which may be used for later cancellation of the event
(see `cancel`).

> *Changed in 3.3*: *argument* parameter is optional.

> *Changed in 3.3*: *kwargs* parameter was added.
