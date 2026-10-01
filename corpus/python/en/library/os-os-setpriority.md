---
id: "python-en-function-os-setpriority"
language: "python"
lang: "en"
category: "function"
name: "setpriority"
signature: "setpriority(which, who, priority)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setpriority"
license: "PSF"
updated: "2026-10-01"
---

# setpriority

Set program scheduling priority. The value *which* is one of
`PRIO_PROCESS`, `PRIO_PGRP`, or `PRIO_USER`, and *who*
is interpreted relative to *which* (a process identifier for
`PRIO_PROCESS`, process group identifier for `PRIO_PGRP`, and a
user ID for `PRIO_USER`). A zero value for *who* denotes
(respectively) the calling process, the process group of the calling process,
or the real user ID of the calling process.
*priority* is a value in the range -20 to 19. The default priority is 0;
lower priorities cause more favorable scheduling.

availability:: Unix, not WASI.

> *Added in 3.3*
