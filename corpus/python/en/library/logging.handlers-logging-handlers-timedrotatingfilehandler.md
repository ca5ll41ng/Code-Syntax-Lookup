---
id: "python-en-function-logging-handlers-timedrotatingfilehandler"
language: "python"
lang: "en"
category: "function"
name: "TimedRotatingFileHandler"
signature: "TimedRotatingFileHandler(filename, when='h', interval=1, backupCount=0, encoding=None, delay=False, utc=False, atTime=None, errors=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler"
license: "PSF"
updated: "2026-10-01"
---

# TimedRotatingFileHandler

Returns a new instance of the `TimedRotatingFileHandler` class. The
specified file is opened and used as the stream for logging. On rotating it also
sets the filename suffix. Rotating happens based on the product of *when* and
*interval*.

You can use the *when* to specify the type of *interval*. The list of possible
values is below.  Note that they are not case sensitive.

+----------------+----------------------------+-------------------------+
 Value           Type of interval            If/how *atTime* is used 
+================+============================+=========================+
 `'S'`         Seconds                     Ignored                 
+----------------+----------------------------+-------------------------+
 `'M'`         Minutes                     Ignored                 
+----------------+----------------------------+-------------------------+
 `'H'`         Hours                       Ignored                 
+----------------+----------------------------+-------------------------+
 `'D'`         Days                        Ignored                 
+----------------+----------------------------+-------------------------+
 `'W0'-'W6'`   Weekday (0=Monday)          Used to compute initial 
                                             rollover time           
+----------------+----------------------------+-------------------------+
 `'midnight'`  Roll over at midnight, if   Used to compute initial 
                 *atTime* not specified,     rollover time           
                 else at time *atTime*                               
+----------------+----------------------------+-------------------------+

When using weekday-based rotation, specify 'W0' for Monday, 'W1' for
Tuesday, and so on up to 'W6' for Sunday. In this case, the value passed for
*interval* isn't used.

The system will save old log files by appending extensions to the filename.
The extensions are date-and-time based, using the strftime format
`%Y-%m-%d_%H-%M-%S` or a leading portion thereof, depending on the
rollover interval.

When computing the next rollover time for the first time (when the handler
is created), the creation time (if supported by the OS and file system)
or the last modification of an existing log file, or else
the current time, is used to compute when the next rotation will occur.

If the *utc* argument is true, times in UTC will be used; otherwise
local time is used.

If *backupCount* is nonzero, at most *backupCount* files
will be kept, and if more would be created when rollover occurs, the oldest
one is deleted. The deletion logic uses the interval to determine which
files to delete, so changing the interval may leave old files lying around.

If *delay* is true, then file opening is deferred until the first call to
`emit`.

If *atTime* is not `None`, it must be a `datetime.time` instance which
specifies the time of day when rollover occurs, for the cases where rollover
is set to happen "at midnight" or "on a particular weekday". Note that in
these cases, the *atTime* value is effectively used to compute the *initial*
rollover, and subsequent rollovers would be calculated via the normal
interval calculation.

If *errors* is specified, it's used to determine how encoding errors are
handled.

> **Note**
>
> is initialised. Calculation of subsequent rollover times is done only
> when rollover occurs, and rollover occurs only when emitting output. If
> this is not kept in mind, it might lead to some confusion. For example,
> if an interval of "every minute" is set, that does not mean you will
> always see log files with times (in the filename) separated by a minute;
> if, during application execution, logging output is generated more
> frequently than once a minute, *then* you can expect to see log files
> with times separated by a minute. If, on the other hand, logging messages
> are only output once every five minutes (say), then there will be gaps in
> the file times corresponding to the minutes where no output (and hence no
> rollover) occurred.
>

> *Changed in 3.4*: *atTime* parameter was added.

> *Changed in 3.6*: As well as string values, :class:`~pathlib.Path` objects are also accepted for the *filename* argument.

> *Changed in 3.9*: The *errors* parameter was added.

> *Changed in next*: Use the creation time instead of the last modification time, if supported by the OS and file system.

method:: doRollover()

method:: emit(record)

method:: getFilesToDelete()

method:: shouldRollover(record)
