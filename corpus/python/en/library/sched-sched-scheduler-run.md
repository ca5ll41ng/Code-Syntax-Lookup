---
id: "python-en-function-sched-scheduler-run"
language: "python"
lang: "en"
category: "function"
name: "scheduler.run"
signature: "scheduler.run(blocking=True)"
directive: "method"
module: "sched"
source_url: "https://docs.python.org/3/library/sched.html#sched.scheduler.run"
license: "PSF"
updated: "2026-10-01"
---

# scheduler.run

Run all scheduled events. This method will wait  (using the *delayfunc*
function passed to the constructor) for the next event, then execute it and so
on until there are no more scheduled events.

If *blocking* is false, immediately executes all events in the queue which have
a time value less than or equal to the current *timefunc* value (if any) and
returns the difference between the current *timefunc* value and the time value
of the next scheduled event in the scheduler's event queue.  If the queue is
empty, returns `None`.

Either *action* or *delayfunc* can raise an exception.  In either case, the
scheduler will maintain a consistent state and propagate the exception.  If an
exception is raised by *action*, the event will not be attempted in future calls
to `run`.

If a sequence of events takes longer to run than the time available before the
next event, the scheduler will simply fall behind.  No events will be dropped;
the calling code is responsible for canceling  events which are no longer
pertinent.

> *Changed in 3.3*: *blocking* parameter was added.
