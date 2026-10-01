---
id: "python-en-function-multiprocessing-multiprocessing-manager"
language: "python"
lang: "en"
category: "function"
name: "multiprocessing.Manager"
signature: "multiprocessing.Manager()"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Manager"
license: "PSF"
updated: "2026-10-01"
---

# multiprocessing.Manager

Returns a started `~multiprocessing.managers.SyncManager` object which
can be used for sharing objects between processes.  The returned manager
object corresponds to a spawned child process and has methods which will
create shared objects and return corresponding proxies.
