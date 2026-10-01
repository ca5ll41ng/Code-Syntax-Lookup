---
id: "python-en-function-trace-trace-count-1-trace-1-countfuncs-0-countcallers-0-ignoremods"
language: "python"
lang: "en"
category: "function"
name: "Trace(count=1, trace=1, countfuncs=0, countcallers=0, ignoremods=(),\\"
directive: "class"
module: "trace"
source_url: "https://docs.python.org/3/library/trace.html#trace.Trace(count=1, trace=1, countfuncs=0, countcallers=0, ignoremods=(),\\"
license: "PSF"
updated: "2026-10-01"
---

# Trace(count=1, trace=1, countfuncs=0, countcallers=0, ignoremods=(),\

Create an object to trace execution of a single statement or expression.  All
parameters are optional.  *count* enables counting of line numbers.  *trace*
enables line execution tracing.  *countfuncs* enables listing of the
functions called during the run.  *countcallers* enables call relationship
tracking.  *ignoremods* is a list of modules or packages to ignore.
*ignoredirs* is a list of directories whose modules or packages should be
ignored.  *infile* is the name of the file from which to read stored count
information.  *outfile* is the name of the file in which to write updated
count information.  *timing* enables a timestamp relative to when tracing was
started to be displayed.

method:: run(cmd)

method:: runctx(cmd, globals=None, locals=None)

method:: runfunc(func, /, *args, **kwds)

method:: results()
